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
  websiteUrl?: string
  opportunityScore?: string
  firstImpression?: string
  trustIssues?: string
  conversionIssues?: string
  uxIssues?: string
  technicalIssues?: string
  aiSearchIssues?: string
  recommendedChanges?: string
  outreachAngle?: string
  createdAt: string
  updatedAt?: string
}

export async function saveLead(lead: Lead) {
  await sql`
    INSERT INTO leads (
      id, name, email, company, industry, team_size, challenge, status, notes,
      website_url, opportunity_score, first_impression, trust_issues,
      conversion_issues, ux_issues, technical_issues, ai_search_issues,
      recommended_changes, outreach_angle, created_at
    ) VALUES (
      ${lead.id}, ${lead.name}, ${lead.email}, ${lead.company},
      ${lead.industry ?? ''}, ${lead.teamSize ?? ''}, ${lead.challenge ?? ''},
      ${lead.status}, ${lead.notes ?? ''}, ${lead.websiteUrl ?? ''},
      ${lead.opportunityScore ?? ''}, ${lead.firstImpression ?? ''},
      ${lead.trustIssues ?? ''}, ${lead.conversionIssues ?? ''},
      ${lead.uxIssues ?? ''}, ${lead.technicalIssues ?? ''},
      ${lead.aiSearchIssues ?? ''}, ${lead.recommendedChanges ?? ''},
      ${lead.outreachAngle ?? ''}, ${lead.createdAt}
    )
  `

  return lead
}

function mapLead(lead: any): Lead {
  return {
    id: lead.id,
    name: lead.name,
    email: lead.email,
    company: lead.company,
    industry: lead.industry,
    teamSize: lead.team_size,
    challenge: lead.challenge,
    status: lead.status,
    notes: lead.notes,
    websiteUrl: lead.website_url,
    opportunityScore: lead.opportunity_score,
    firstImpression: lead.first_impression,
    trustIssues: lead.trust_issues,
    conversionIssues: lead.conversion_issues,
    uxIssues: lead.ux_issues,
    technicalIssues: lead.technical_issues,
    aiSearchIssues: lead.ai_search_issues,
    recommendedChanges: lead.recommended_changes,
    outreachAngle: lead.outreach_angle,
    createdAt: lead.created_at,
    updatedAt: lead.updated_at,
  }
}

export async function getLeads(): Promise<Lead[]> {
  const { rows } = await sql`
    SELECT * FROM leads ORDER BY created_at DESC
  `

  return rows.map(mapLead)
}

export async function getLeadById(id: string): Promise<Lead | null> {
  const { rows } = await sql`
    SELECT * FROM leads WHERE id = ${id} LIMIT 1
  `

  return rows[0] ? mapLead(rows[0]) : null
}

export async function updateLead(
  id: string,
  updates: Partial<Lead>
) {
  await sql`
    UPDATE leads SET
      status = COALESCE(${updates.status ?? null}, status),
      notes = COALESCE(${updates.notes ?? null}, notes),
      website_url = COALESCE(${updates.websiteUrl ?? null}, website_url),
      opportunity_score = COALESCE(${updates.opportunityScore ?? null}, opportunity_score),
      first_impression = COALESCE(${updates.firstImpression ?? null}, first_impression),
      trust_issues = COALESCE(${updates.trustIssues ?? null}, trust_issues),
      conversion_issues = COALESCE(${updates.conversionIssues ?? null}, conversion_issues),
      ux_issues = COALESCE(${updates.uxIssues ?? null}, ux_issues),
      technical_issues = COALESCE(${updates.technicalIssues ?? null}, technical_issues),
      ai_search_issues = COALESCE(${updates.aiSearchIssues ?? null}, ai_search_issues),
      recommended_changes = COALESCE(${updates.recommendedChanges ?? null}, recommended_changes),
      outreach_angle = COALESCE(${updates.outreachAngle ?? null}, outreach_angle),
      updated_at = CURRENT_TIMESTAMP
    WHERE id = ${id}
  `
}
