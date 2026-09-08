import { NextResponse } from 'next/server'
import { getLeads } from '@/lib/leads'

export const dynamic='force-dynamic'
const csv=(value:unknown)=>`"${String(value??'').replaceAll('"','""')}"`
export async function GET(){
 try{
  const leads=await getLeads()
  const header=['Submitted','Updated','Company','Name','Email','Website','Industry','Team size','Enquiry type','Status','Opportunity score','Challenge','Notes']
  const rows=leads.map(l=>[l.createdAt,l.updatedAt,l.company,l.name,l.email,l.websiteUrl,l.industry,l.teamSize,l.enquiryType,l.status,l.opportunityScore,l.challenge,l.notes])
  const body=[header,...rows].map(row=>row.map(csv).join(',')).join('\r\n')
  return new NextResponse(body,{headers:{'Content-Type':'text/csv; charset=utf-8','Content-Disposition':`attachment; filename="booth-marketing-leads-${new Date().toISOString().slice(0,10)}.csv"`,'Cache-Control':'no-store'}})
 }catch{return NextResponse.json({error:'Unable to export leads.'},{status:500})}
}
