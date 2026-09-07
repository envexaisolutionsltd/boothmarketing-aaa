export type LeadStatus = 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'CALL_BOOKED' | 'CLOSED'

export type Lead = {
  id: string
  name: string
  email: string
  company: string
  challenge?: string
  status: LeadStatus
  createdAt: string
}

// Storage abstraction kept separate so production storage can be swapped without changing the UI.
export async function saveLead(lead: Lead) {
  return lead
}

export async function getLeads(): Promise<Lead[]> {
  return []
}
