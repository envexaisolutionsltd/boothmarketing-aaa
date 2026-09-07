import { getLeads } from '@/lib/leads'

export default async function LeadPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const leads = await getLeads()
  const lead = leads.find((item) => item.id === id)

  if (!lead) {
    return (
      <main className="min-h-screen bg-[#090a0b] px-6 py-12 text-[#f4f4f3]">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-semibold">Lead not found</h1>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#090a0b] px-6 py-12 text-[#f4f4f3]">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-[#d8cbb7]">Lead</p>
        <h1 className="mt-4 text-3xl font-semibold">{lead.name}</h1>
        <div className="mt-6 space-y-2 text-white/70">
          <p>{lead.company}</p>
          <p>{lead.email}</p>
          <p>Status: {lead.status}</p>
          {lead.industry && <p>Industry: {lead.industry}</p>}
          {lead.teamSize && <p>Team size: {lead.teamSize}</p>}
        </div>
        {lead.challenge && (
          <div className="mt-8 rounded-xl border border-white/10 p-5">
            <p className="text-sm text-white/40">Challenge</p>
            <p className="mt-2">{lead.challenge}</p>
          </div>
        )}
      </div>
    </main>
  )
}
