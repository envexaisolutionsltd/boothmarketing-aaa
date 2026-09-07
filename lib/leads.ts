import { sql } from '@vercel/postgres'

export type LeadStatus = 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'CALL_BOOKED' | 'CLOSED'

export type Lead = {
  id: string
  name: string
  email: string
  company: string
  industry?: string
  teamSize?: string
  challenge?: string
  status: LeadStatus
  notes?: string
  createdAt: string
  updatedAt?: string
}

export async function saveLead(lead: Lead) {
  await sql`
    INSERT INTO leads (
      id, name, email, company, industry, team_size, challenge, status, notes, created_at
    ) VALUES (
      ${lead.id},
      ${lead.name},
      ${lead.email},
      ${lead.company},
      ${lead.industry ?? ''},
      ${lead.teamSize ?? ''},
      ${lead.challenge ?? ''},
      ${lead.status},
      ${lead.notes ?? ''},
      ${lead.createdAt}
    )
  `

  return lead
}

export async function getLeads(): Promise<Lead[]> {
  const { rows } = await sql`
    SELECT * FROM leads ORDER BY created_at DESC
  `

  return rows.map((lead) => ({
    id: lead.id,
    name: lead.name,
    email: lead.email,
    company: lead.company,
    industry: lead.industry,
    teamSize: lead.team_size,
    challenge: lead.challenge,
    status: lead.status,
    notes: lead.notes,
    createdAt: lead.created_at,
    updatedAt: lead.updated_at,
  })) as Lead[]
}

export async function getLeadById(id: string): Promise<Lead | null> {
  const { rows } = await sql`
    SELECT * FROM leads WHERE id = ${id} LIMIT 1
  `

  if (!rows[0]) return null

  return {
    id: rows[0].id,
    name: rows[0].name,
    email: rows[0].email,
    company: rows[0].company,
    industry: rows[0].industry,
    teamSize: rows[0].team_size,
    challenge: rows[0].challenge,
    status: rows[0].status,
    notes: rows[0].notes,
    createdAt: rows[0].created_at,
    updatedAt: rows[0].updated_at,
  } as Lead
}

export async function updateLead(
  id: string,
  updates: Partial<Pick<Lead, 'status' | 'notes'>>
) {
  await sql`
    UPDATE leads
    SET
      status = COALESCE(${updates.status ?? null}, status),
      notes = COALESCE(${updates.notes ?? null}, notes),
      updated_at = CURRENT_TIMESTAMP
    WHERE id = ${id}
  `
}
