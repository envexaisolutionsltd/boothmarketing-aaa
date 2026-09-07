export type StoredLead = {
  id: string
  name: string
  email: string
  company: string
  website?: string
  industry?: string
  teamSize?: string
  challenge?: string
  status: string
  createdAt: string
}

const memoryStore: StoredLead[] = []

export function createLead(lead: StoredLead) {
  memoryStore.unshift(lead)
  return lead
}

export function getAllLeads() {
  return memoryStore
}
