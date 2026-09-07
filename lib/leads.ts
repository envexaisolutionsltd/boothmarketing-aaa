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
  createdAt: string
}

export async function saveLead(lead: Lead) {
  await sql`
    INSERT INTO leads (
      id, name, email, company, industry, team_size, challenge, status, created_at
    ) VALUES (
      ${lead.id},
      ${lead.name},
      ${lead.email},
      ${lead.company},
      ${lead.industry ?? ''},
      ${lead.teamSize ?? ''},
      ${lead.challenge ?? ''},
      ${lead.status},
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
    createdAt: lead.created_at,
  })) as Lead[]
}
