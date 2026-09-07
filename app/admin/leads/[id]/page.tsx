import { getLeads, updateLead, LeadStatus } from '@/lib/leads'
import { revalidatePath } from 'next/cache'

const statuses: LeadStatus[] = ['NEW', 'CONTACTED', 'QUALIFIED', 'CALL_BOOKED', 'CLOSED']

export default async function LeadPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const leads = await getLeads()
  const lead = leads.find((item) => item.id === id)

  async function updateAnalysis(formData: FormData) {
    'use server'

    await updateLead(id, {
      status: formData.get('status') as LeadStatus,
      websiteUrl: String(formData.get('websiteUrl') || ''),
      opportunityScore: String(formData.get('opportunityScore') || ''),
      firstImpression: String(formData.get('firstImpression') || ''),
      trustIssues: String(formData.get('trustIssues') || ''),
      conversionIssues: String(formData.get('conversionIssues') || ''),
      uxIssues: String(formData.get('uxIssues') || ''),
      technicalIssues: String(formData.get('technicalIssues') || ''),
      aiSearchIssues: String(formData.get('aiSearchIssues') || ''),
      recommendedChanges: String(formData.get('recommendedChanges') || ''),
      outreachAngle: String(formData.get('outreachAngle') || ''),
    })

    revalidatePath(`/admin/leads/${id}`)
    revalidatePath('/admin')
  }

  if (!lead) return <main className="min-h-screen bg-[#090a0b] p-8 text-white">Lead not found</main>

  const field = 'w-full rounded-xl border border-white/10 bg-black/30 p-3 text-white placeholder:text-white/30'

  return (
    <main className="min-h-screen bg-[#090a0b] px-6 py-12 text-[#f4f4f3]">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#d8cbb7]">Website Intelligence</p>
          <h1 className="mt-4 text-3xl font-semibold">{lead.name}</h1>
          <p className="mt-2 text-white/50">{lead.company} · {lead.email}</p>

          <form action={updateAnalysis} className="mt-8 space-y-5">
            <select name="status" defaultValue={lead.status} className={field}>
              {statuses.map((status) => <option key={status} value={status}>{status.replace('_', ' ')}</option>)}
            </select>

            <input name="websiteUrl" defaultValue={lead.websiteUrl} placeholder="Website URL" className={field} />
            <input name="opportunityScore" defaultValue={lead.opportunityScore} placeholder="Opportunity Score (Low / Medium / High)" className={field} />

            <textarea name="firstImpression" defaultValue={lead.firstImpression} placeholder="First impression issues" className={field} />
            <textarea name="trustIssues" defaultValue={lead.trustIssues} placeholder="Trust issues detected" className={field} />
            <textarea name="conversionIssues" defaultValue={lead.conversionIssues} placeholder="Conversion issues" className={field} />
            <textarea name="uxIssues" defaultValue={lead.uxIssues} placeholder="UX/mobile issues" className={field} />
            <textarea name="technicalIssues" defaultValue={lead.technicalIssues} placeholder="Technical issues" className={field} />
            <textarea name="aiSearchIssues" defaultValue={lead.aiSearchIssues} placeholder="AI search readiness issues" className={field} />
            <textarea name="recommendedChanges" defaultValue={lead.recommendedChanges} placeholder="Recommended improvements" className={field} />
            <textarea name="outreachAngle" defaultValue={lead.outreachAngle} placeholder="Personalised outreach angle" className={field} />

            <button className="rounded-xl bg-[#d8cbb7] px-6 py-3 font-medium text-black">
              Save Website Analysis
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
