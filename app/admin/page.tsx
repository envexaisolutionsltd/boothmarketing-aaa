import Link from 'next/link'
import { getLeads } from '@/lib/leads'

const statusLabel = (value: string) => value.replaceAll('_', ' ')

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ q?: string; status?: string }> }) {
  const params = await searchParams
  const leads = await getLeads()
  const q = (params.q || '').trim().toLowerCase()
  const status = params.status || 'ALL'

  const filtered = leads.filter((lead) => {
    const matchesSearch = !q || [lead.name, lead.email, lead.company, lead.websiteUrl, lead.challenge]
      .some((value) => String(value || '').toLowerCase().includes(q))
    const matchesStatus = status === 'ALL' || lead.status === status
    return matchesSearch && matchesStatus
  })

  const stats = [
    ['New Leads', leads.filter((lead) => lead.status === 'NEW').length],
    ['Contacted', leads.filter((lead) => lead.status === 'CONTACTED').length],
    ['Qualified', leads.filter((lead) => lead.status === 'QUALIFIED').length],
    ['Calls Booked', leads.filter((lead) => lead.status === 'CALL_BOOKED').length],
  ]

  return (
    <main className="min-h-screen bg-[#090a0b] px-4 py-10 text-[#f4f4f3] sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.25em] text-[#d8cbb7]">Booth Marketing</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <div><h1 className="text-4xl font-semibold tracking-tight">Lead Dashboard</h1><p className="mt-3 text-white/50">Website audit enquiries and pre-sales intelligence.</p></div>
          <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50">{leads.length} total leads</span>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([label, value]) => <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><p className="text-sm text-white/50">{label}</p><p className="mt-3 text-3xl font-semibold">{value}</p></div>)}
        </div>

        <form className="mt-6 grid gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:grid-cols-[1fr_190px_auto]">
          <input name="q" defaultValue={params.q} placeholder="Search name, company, email or website" className="min-h-11 rounded-lg border border-white/10 bg-[#090a0b] px-4 text-sm outline-none placeholder:text-white/30" />
          <select name="status" defaultValue={status} className="min-h-11 rounded-lg border border-white/10 bg-[#090a0b] px-3 text-sm outline-none">
            {['ALL','NEW','CONTACTED','QUALIFIED','CALL_BOOKED','CLOSED'].map((value) => <option key={value} value={value}>{statusLabel(value)}</option>)}
          </select>
          <button className="min-h-11 rounded-lg bg-[#efe3cf] px-5 text-sm font-semibold text-[#151515]">Filter</button>
        </form>

        <section className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="flex items-center justify-between border-b border-white/10 p-5 sm:p-6"><h2 className="text-xl font-medium">Leads</h2><p className="text-xs text-white/40">{filtered.length} shown</p></div>
          <div className="divide-y divide-white/10">
            {filtered.length === 0 ? <p className="p-6 text-sm text-white/50">No leads match these filters.</p> : filtered.map((lead) => (
              <Link href={`/admin/leads/${lead.id}`} key={lead.id} className="block p-5 transition hover:bg-white/[0.035] sm:p-6">
                <div className="flex flex-wrap justify-between gap-4">
                  <div><p className="font-medium">{lead.name} · {lead.company}</p><p className="mt-1 text-sm text-white/50">{lead.email}{lead.websiteUrl ? ` · ${lead.websiteUrl}` : ''}</p></div>
                  <div className="flex items-center gap-2">{lead.opportunityScore && <span className="rounded-full border border-[#d92f3c]/25 bg-[#190f11] px-3 py-1 text-xs text-[#d9b9bd]">{lead.opportunityScore}</span>}<span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">{statusLabel(lead.status)}</span></div>
                </div>
                {lead.challenge && <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/60">{lead.challenge}</p>}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
