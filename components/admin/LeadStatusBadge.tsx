export default function LeadStatusBadge({ status }: { status: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      {status.replace('_', ' ')}
    </span>
  )
}
