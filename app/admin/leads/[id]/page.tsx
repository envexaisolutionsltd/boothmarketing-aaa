import { getLeads, updateLead, LeadStatus } from '@/lib/leads'
import { revalidatePath } from 'next/cache'

const statuses: LeadStatus[] = [
  'NEW',
  'CONTACTED',
  'QUALIFIED',
  'CALL_BOOKED',
  'CLOSED',
]

export default async function LeadPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const leads = await getLeads()
  const lead = leads.find((item) => item.id === id)

  async function changeStatus(formData: FormData) {
    'use server'

    const status = formData.get('status') as LeadStatus

    if (statuses.includes(status)) {
      await updateLead(id, { status })
      revalidatePath(`/admin/leads/${id}`)
      revalidatePath('/admin')
    }
  }

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
          {lead.industry && <p>Industry: {lead.industry}</p>}
          {lead.teamSize && <p>Team size: {lead.teamSize}</p>}
        </div>

        <form action={changeStatus} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="text-sm text-white/50">Lead status</label>
          <select
            name="status"
            defaultValue={lead.status}
            className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-[#d8cbb7]"
          >
            {statuses.map((status) => (
              <option key={status} value={status} className="bg-[#090a0b]">
                {status.replace('_', ' ')}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="rounded-xl bg-[#d8cbb7] px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
          >
            Update Status
          </button>
        </form>

        <p className="mt-4 text-sm text-white/50">Current status: {lead.status}</p>

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
