import { NextResponse } from 'next/server'
import { EnquiryType, saveLead } from '@/lib/leads'
import { clientIp, hasAllowedJsonSize, isValidHttpUrl, rateLimit, safeText, sameOrigin } from '@/lib/security'

const types:EnquiryType[]=['WEBSITE_AUDIT','AUTOMATION_AUDIT','CONTACT','CALCULATOR']

export async function POST(request:Request){
 try{
  if(!sameOrigin(request)) return NextResponse.json({error:'Invalid request'},{status:403})
  if(!hasAllowedJsonSize(request,20_000)) return NextResponse.json({error:'Request too large'},{status:413})
  const gate=rateLimit(`lead:${clientIp(request)}`,6,10*60*1000)
  if(!gate.ok) return NextResponse.json({error:'Too many submissions. Please try again shortly.'},{status:429,headers:{'Retry-After':String(gate.retryAfter)}})
  if(!request.headers.get('content-type')?.includes('application/json')) return NextResponse.json({error:'Unsupported request'},{status:415})
  const body=await request.json()
  if(safeText(body.websiteCompany,100)) return NextResponse.json({success:true})
  const name=safeText(body.name,120), email=safeText(body.email,200).toLowerCase(), company=safeText(body.company,160), websiteUrl=safeText(body.websiteUrl,500), industry=safeText(body.industry,120), teamSize=safeText(body.teamSize,80)
  const processType=safeText(body.processType,120), rawChallenge=safeText(body.challenge,1500)
  const enquiryType=types.includes(body.enquiryType as EnquiryType)?body.enquiryType as EnquiryType:'WEBSITE_AUDIT'
  const challenge=[processType?`Manual process: ${processType}`:'',rawChallenge].filter(Boolean).join('\n\n')
  if(!name||!email||!company) return NextResponse.json({error:'Name, email and company are required.'},{status:400})
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({error:'Enter a valid email address.'},{status:400})
  if(!isValidHttpUrl(websiteUrl)) return NextResponse.json({error:'Enter a valid website URL including https://.'},{status:400})
  const lead=await saveLead({id:crypto.randomUUID(),name,email,company,industry,teamSize,challenge,websiteUrl,status:'NEW',enquiryType,createdAt:new Date().toISOString()})
  return NextResponse.json({success:true,id:lead.id},{status:201,headers:{'Cache-Control':'no-store'}})
 }catch{return NextResponse.json({error:'Unable to submit your request.'},{status:500,headers:{'Cache-Control':'no-store'}})}
}
