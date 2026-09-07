const stats = [
  ['New Leads', '0'],
  ['Awaiting Contact', '0'],
  ['Qualified', '0'],
]

export default function StatsCards() {
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
