import LeadStatusBadge from './LeadStatusBadge'

export default function LeadCard({ lead }: { lead: any }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <h3 className="font-semibold">{lead.name}</h3>
      <p className="mt-1 text-sm text-white/60">{lead.company}</p>
      <div className="mt-4"><LeadStatusBadge status={lead.status} /></div>
    </div>
  )
}
