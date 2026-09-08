import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getLeadById, updateLead } from '@/lib/leads'

const websiteEmail='qa-website-20260908@boothmarketing.test'
const automationEmail='qa-automation-20260908@boothmarketing.test'

export async function GET(request:Request){
  const base=new URL(request.url).origin
  let createdIds:string[]=[]
  try{
    await db()`DELETE FROM leads WHERE email IN (${websiteEmail},${automationEmail})`
    const payloads=[
      {name:'Booth QA Website',email:websiteEmail,company:'Booth QA Website Ltd',websiteUrl:'https://example.com',industry:'Professional Services',teamSize:'6-10',challenge:'QA website audit submission',enquiryType:'WEBSITE_AUDIT'},
      {name:'Booth QA Automation',email:automationEmail,company:'Booth QA Automation Ltd',teamSize:'2 to 10',processType:'Lead handling',challenge:'QA automation audit submission',enquiryType:'AUTOMATION_AUDIT'}
    ]
    const apiResults=[] as Array<{status:number;id?:string;error?:string}>
    for(const payload of payloads){
      const response=await fetch(`${base}/api/leads`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),cache:'no-store'})
      const body=await response.json().catch(()=>({}))
      if(body.id) createdIds.push(body.id)
      apiResults.push({status:response.status,...body})
    }
    const inserted=await db()`SELECT id,email,enquiry_type,status FROM leads WHERE email IN (${websiteEmail},${automationEmail}) ORDER BY email`
    const website=inserted.find((r:any)=>r.email===websiteEmail)
    const automation=inserted.find((r:any)=>r.email===automationEmail)
    if(!website||!automation) throw new Error('QA leads were not persisted')

    await updateLead(website.id,{status:'QUALIFIED',opportunityScore:'High',notes:'QA verified website audit workflow'})
    await updateLead(automation.id,{status:'CALL_BOOKED',opportunityScore:'Medium',notes:'QA verified automation audit workflow'})
    const websiteUpdated=await getLeadById(website.id)
    const automationUpdated=await getLeadById(automation.id)
    const checks={
      apiCreated:apiResults.every(r=>r.status===201),
      twoRecords:inserted.length===2,
      websiteType:website.enquiry_type==='WEBSITE_AUDIT',
      automationType:automation.enquiry_type==='AUTOMATION_AUDIT',
      websiteUpdate:websiteUpdated?.status==='QUALIFIED'&&websiteUpdated?.opportunityScore==='High'&&websiteUpdated?.notes==='QA verified website audit workflow',
      automationUpdate:automationUpdated?.status==='CALL_BOOKED'&&automationUpdated?.opportunityScore==='Medium'&&automationUpdated?.notes==='QA verified automation audit workflow'
    }
    const passed=Object.values(checks).every(Boolean)
    return NextResponse.json({passed,checks,apiResults},{status:passed?200:500,headers:{'Cache-Control':'no-store'}})
  }catch(error){
    return NextResponse.json({passed:false,error:error instanceof Error?error.message:'QA failed'},{status:500,headers:{'Cache-Control':'no-store'}})
  }finally{
    await db()`DELETE FROM leads WHERE email IN (${websiteEmail},${automationEmail})`.catch(()=>{})
  }
}
