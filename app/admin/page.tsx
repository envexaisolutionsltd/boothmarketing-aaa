import { getLeads } from '@/lib/leads'

const statusLabel = (value: string) => value.replace('_', ' ')

export default async function AdminPage() {
  const leads = await getLeads()

  const stats = [
    ['New Leads', leads.filter((lead) => lead.status === 'NEW').length],
    ['Awaiting Contact', leads.filter((lead) => lead.status === 'CONTACTED').length],
    ['Qualified', leads.filter((lead) => lead.status === 'QUALIFIED').length],
  ]

  return (
    <main className="min-h-screen bg-[#090a0b] px-6 py-12 text-[#f4f4f3]">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.25em] text-[#d8cbb7]">Booth Marketing</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Lead Dashboard</h1>
        <p className="mt-3 text-white/50">Manage incoming website audit requests.</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {stats.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm text-white/50">{label}</p>
              <p className="mt-3 text-3xl font-semibold">{value}</p>
            </div>
          ))}
        </div>

        <section className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="border-b border-white/10 p-6">
            <h2 className="text-xl font-medium">Recent Leads</h2>
          </div>
          <div className="divide-y divide-white/10">
            {leads.length === 0 ? (
              <p className="p-6 text-sm text-white/50">No leads yet.</p>
            ) : leads.map((lead) => (
              <div key={lead.id} className="p-6">
                <div className="flex flex-wrap justify-between gap-4">
                  <div>
                    <p className="font-medium">{lead.name} · {lead.company}</p>
                    <p className="text-sm text-white/50">{lead.email}</p>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                    {statusLabel(lead.status)}
                  </span>
                </div>
                {lead.challenge && <p className="mt-3 text-sm text-white/60">{lead.challenge}</p>}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
