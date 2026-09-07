type Props = { params: { id: string } }

export default function LeadPage({ params }: Props) {
  return (
    <main className="min-h-screen bg-[#090a0b] px-6 py-12 text-[#f4f4f3]">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-[0.25em] text-[#d8cbb7]">Lead</p>
        <h1 className="mt-4 text-3xl font-semibold">Lead #{params.id}</h1>
        <p className="mt-4 text-[#929399]">Lead details will populate from the connected storage layer.</p>
      </div>
    </main>
  )
}
