import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

const requiredLeadColumns = [
  'id','name','email','company','industry','team_size','challenge','status','notes',
  'website_url','opportunity_score','first_impression','trust_issues','conversion_issues',
  'ux_issues','technical_issues','ai_search_issues','recommended_changes','outreach_angle',
  'created_at','updated_at',
]

export async function GET() {
  const adminConfigured = Boolean(process.env.ADMIN_PASSWORD)
  try {
    await db()`SELECT 1`
    const rows = await db()`
      SELECT column_name
      FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = 'leads'
    `
    const columns = new Set(rows.map((row: any) => String(row.column_name)))
    const missingColumns = requiredLeadColumns.filter((column) => !columns.has(column))
    const leadsTableReady = rows.length > 0 && missingColumns.length === 0
    const ready = adminConfigured && leadsTableReady
    return NextResponse.json(
      { ready, checks: { adminConfigured, databaseConnected: true, leadsTableReady }, ...(missingColumns.length ? { missingLeadColumns: missingColumns } : {}) },
      { status: ready ? 200 : 503, headers: { 'Cache-Control': 'no-store' } }
    )
  } catch {
    return NextResponse.json(
      { ready: false, checks: { adminConfigured, databaseConnected: false, leadsTableReady: false } },
      { status: 503, headers: { 'Cache-Control': 'no-store' } }
    )
  }
}
