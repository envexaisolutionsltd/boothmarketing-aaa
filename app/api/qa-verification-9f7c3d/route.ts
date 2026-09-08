import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

const websiteEmail='qa-website-20260907@boothmarketing.test'
const automationEmail='qa-automation-20260907@boothmarketing.test'

export async function GET(request:Request){
  const url=new URL(request.url)
  const action=url.searchParams.get('action')||'run'
  if(action==='cleanup'){
    await db()`DELETE FROM leads WHERE email IN (${websiteEmail},${automationEmail})`
    const rows=await db()`SELECT email FROM leads WHERE email IN (${websiteEmail},${automationEmail})`
    return NextResponse.json({ok:true,remaining:rows.length},{headers:{'Cache-Control':'no-store'}})
  }

  await db()`DELETE FROM leads WHERE email IN (${websiteEmail},${automationEmail})`
  const base=url.origin
  const payloads=[
    {name:'Booth QA Website',email:websiteEmail,company:'Booth QA Website Ltd',websiteUrl:'https://example.com',industry:'Professional Services',teamSize:'6–10',challenge:'QA website audit submission',enquiryType:'WEBSITE_AUDIT'},
    {name:'Booth QA Automation',email:automationEmail,company:'Booth QA Automation Ltd',teamSize:'2 to 10',processType:'Lead handling',challenge:'QA automation audit submission',enquiryType:'AUTOMATION_AUDIT'}
  ]
  const responses=[] as {status:number;body:any}[]
  for(const payload of payloads){
    const response=await fetch(`${base}/api/leads`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),cache:'no-store'})
    responses.push({status:response.status,body:await response.json().catch(()=>({}))})
  }
  const rows=await db()`SELECT email,enquiry_type,status,company,opportunity_score,notes FROM leads WHERE email IN (${websiteEmail},${automationEmail}) ORDER BY email`
  return NextResponse.json({
    ok:responses.every(r=>r.status===201)&&rows.length===2,
    apiResponses:responses,
    records:rows,
    checks:{
      twoRecords:rows.length===2,
      websiteType:rows.some((r:any)=>r.email===websiteEmail&&r.enquiry_type==='WEBSITE_AUDIT'),
      automationType:rows.some((r:any)=>r.email===automationEmail&&r.enquiry_type==='AUTOMATION_AUDIT'),
      newPipeline:rows.every((r:any)=>r.status==='NEW')
    }
  },{headers:{'Cache-Control':'no-store'}})
}
