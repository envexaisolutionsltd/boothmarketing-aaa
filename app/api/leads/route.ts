import { NextResponse } from 'next/server'
import { saveLead } from '@/lib/leads'

const clean = (value: unknown, max = 500) => String(value ?? '').trim().slice(0, max)

export async function POST(request: Request) {
  try {
    if (!request.headers.get('content-type')?.includes('application/json')) {
      return NextResponse.json({ error: 'Unsupported request' }, { status: 415 })
    }

    const body = await request.json()

    // Honeypot: genuine visitors never fill this hidden field.
    if (clean(body.websiteCompany)) {
      return NextResponse.json({ success: true })
    }

    const name = clean(body.name, 120)
    const email = clean(body.email, 200).toLowerCase()
    const company = clean(body.company, 160)
    const websiteUrl = clean(body.websiteUrl, 500)
    const industry = clean(body.industry, 120)
    const teamSize = clean(body.teamSize, 80)
    const challenge = clean(body.challenge, 1500)

    if (!name || !email || !company) {
      return NextResponse.json({ error: 'Name, email and company are required.' }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 })
    }

    if (websiteUrl) {
      try {
        const url = new URL(websiteUrl)
        if (!['http:', 'https:'].includes(url.protocol)) throw new Error('invalid')
      } catch {
        return NextResponse.json({ error: 'Enter a valid website URL including https://.' }, { status: 400 })
      }
    }

    const lead = await saveLead({
      id: crypto.randomUUID(),
      name,
      email,
      company,
      industry,
      teamSize,
      challenge,
      websiteUrl,
      status: 'NEW',
      createdAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true, id: lead.id }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Unable to submit your request.' }, { status: 500 })
  }
}
