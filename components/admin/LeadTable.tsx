export default function LeadTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <div className="grid grid-cols-4 gap-4 border-b border-white/10 px-5 py-4 text-xs uppercase tracking-wider text-white/50">
        <span>Name</span>
        <span>Company</span>
        <span>Status</span>
        <span>Date</span>
      </div>
      <div className="px-5 py-8 text-sm text-white/50">
        No leads connected yet.
      </div>
    </div>
  )
}
