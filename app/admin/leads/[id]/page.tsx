import Link from 'next/link'
import { getLeadById, updateLead, LeadStatus } from '@/lib/leads'
import { revalidatePath } from 'next/cache'

const statuses: LeadStatus[] = ['NEW', 'CONTACTED', 'QUALIFIED', 'CALL_BOOKED', 'CLOSED']
const scores = ['', 'Low', 'Medium', 'High', 'Very High']

export default async function LeadPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const lead = await getLeadById(id)

  async function updateAnalysis(formData: FormData) {
    'use server'
    const status = String(formData.get('status') || '') as LeadStatus
    const opportunityScore = String(formData.get('opportunityScore') || '')
    if (!statuses.includes(status) || !scores.includes(opportunityScore)) return

    await updateLead(id, {
      status,
      websiteUrl: String(formData.get('websiteUrl') || '').trim().slice(0, 500),
      opportunityScore,
      firstImpression: String(formData.get('firstImpression') || '').trim().slice(0, 4000),
      trustIssues: String(formData.get('trustIssues') || '').trim().slice(0, 4000),
      conversionIssues: String(formData.get('conversionIssues') || '').trim().slice(0, 4000),
      uxIssues: String(formData.get('uxIssues') || '').trim().slice(0, 4000),
      technicalIssues: String(formData.get('technicalIssues') || '').trim().slice(0, 4000),
      aiSearchIssues: String(formData.get('aiSearchIssues') || '').trim().slice(0, 4000),
      recommendedChanges: String(formData.get('recommendedChanges') || '').trim().slice(0, 6000),
      outreachAngle: String(formData.get('outreachAngle') || '').trim().slice(0, 4000),
    })

    revalidatePath(`/admin/leads/${id}`)
    revalidatePath('/admin')
  }

  if (!lead) return <main className="min-h-screen bg-[#090a0b] p-8 text-white">Lead not found</main>

  const field = 'w-full rounded-xl border border-white/10 bg-[#090a0b] p-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#d8cbb7]/40'
  const sections = [
    ['firstImpression','First impression','What a serious buyer is likely to understand, trust or question immediately.',lead.firstImpression],
    ['trustIssues','Trust issues','Missing proof, credibility gaps, weak reassurance or reasons to hesitate.',lead.trustIssues],
    ['conversionIssues','Conversion issues','CTA, offer, messaging and decision-path friction.',lead.conversionIssues],
    ['uxIssues','UX / mobile issues','Navigation, hierarchy, readability and mobile usability problems.',lead.uxIssues],
    ['technicalIssues','Technical issues','Performance, broken behaviour or implementation problems actually observed.',lead.technicalIssues],
    ['aiSearchIssues','AI / search clarity','Issues affecting how clearly the business, services and evidence can be understood.',lead.aiSearchIssues],
    ['recommendedChanges','Recommended changes','Prioritised improvements supported by the review.',lead.recommendedChanges],
    ['outreachAngle','Outreach angle','The most relevant, evidence-based way to discuss the opportunity with this lead.',lead.outreachAngle],
  ]

  return (
    <main className="min-h-screen bg-[#090a0b] px-4 py-8 text-[#f4f4f3] sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <Link href="/admin" className="text-xs text-white/45 transition hover:text-white">← Back to leads</Link>
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#d8cbb7]">Website Intelligence</p>
          <div className="mt-4 flex flex-wrap items-start justify-between gap-4"><div><h1 className="text-3xl font-semibold">{lead.name}</h1><p className="mt-2 text-sm text-white/50">{lead.company} · {lead.email}</p>{lead.challenge && <p className="mt-4 max-w-3xl text-sm leading-6 text-white/60">Submitted challenge: {lead.challenge}</p>}</div><span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50">{lead.status.replaceAll('_',' ')}</span></div>

          <form action={updateAnalysis} className="mt-8">
            <div className="grid gap-4 md:grid-cols-3"><label className="text-xs text-white/55">Lead status<select name="status" defaultValue={lead.status} className={`${field} mt-2`}>{statuses.map((status) => <option key={status} value={status}>{status.replaceAll('_', ' ')}</option>)}</select></label><label className="text-xs text-white/55">Opportunity score<select name="opportunityScore" defaultValue={lead.opportunityScore || ''} className={`${field} mt-2`}>{scores.map((score) => <option key={score || 'unset'} value={score}>{score || 'Not scored'}</option>)}</select></label><label className="text-xs text-white/55">Website URL<input name="websiteUrl" type="url" defaultValue={lead.websiteUrl || ''} placeholder="https://" className={`${field} mt-2`} /></label></div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">{sections.map(([name,label,help,value]) => <label key={name} className="rounded-2xl border border-white/10 bg-black/20 p-4"><span className="text-sm font-medium">{label}</span><span className="mt-1 block text-xs leading-5 text-white/40">{help}</span><textarea name={name} defaultValue={value || ''} rows={6} className={`${field} mt-3 resize-y`} /></label>)}</div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3"><p className="max-w-xl text-xs leading-5 text-white/40">Record only findings supported by an actual review of the submitted website. Nothing is generated or inferred automatically.</p><button className="rounded-xl bg-[#efe3cf] px-6 py-3 text-sm font-semibold text-[#151515]">Save Website Analysis</button></div>
          </form>
        </div>
      </div>
    </main>
  )
}
