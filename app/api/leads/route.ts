import { NextResponse } from 'next/server'
import { saveLead } from '@/lib/leads'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const required = ['name', 'email', 'company']
    const missing = required.filter((field) => !body[field])

    if (missing.length) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const lead = await saveLead({
      id: crypto.randomUUID(),
      name: body.name,
      email: body.email,
      company: body.company,
      industry: body.industry || '',
      teamSize: body.teamSize || '',
      challenge: body.challenge || '',
      websiteUrl: body.websiteUrl || '',
      status: 'NEW',
      createdAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true, lead })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 500 })
  }
}
