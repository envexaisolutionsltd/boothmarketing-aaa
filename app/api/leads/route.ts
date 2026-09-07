import { NextResponse } from 'next/server'
import { saveLead } from '@/lib/leads'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const required = ['name', 'email', 'company', 'industry', 'teamSize']
    const missing = required.filter((field) => !body[field])

    if (missing.length) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const lead = await saveLead({
      id: crypto.randomUUID(),
      name: body.name,
      email: body.email,
      company: body.company,
      challenge: body.challenge || '',
      status: 'NEW',
      createdAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true, lead })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 500 })
  }
}
