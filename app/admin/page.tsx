const stats = [
  ['New Leads', '0'],
  ['Awaiting Contact', '0'],
  ['Qualified', '0'],
]

function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map(([label, value]) => (
        <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm text-white/50">{label}</p>
          <p className="mt-3 text-3xl font-semibold">{value}</p>
        </div>
      ))}
    </div>
  )
}

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#090a0b] px-6 py-12 text-[#f4f4f3]">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.25em] text-[#d8cbb7]">Booth Marketing</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Lead Dashboard</h1>
        <p className="mt-3 text-white/50">Manage incoming website audit requests.</p>

        <div className="mt-10">
          <StatsCards />
        </div>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-xl font-medium">Recent Leads</h2>
          <p className="mt-3 text-sm text-white/50">Lead storage connection is being finalised.</p>
        </section>
      </div>
    </main>
  )
}
