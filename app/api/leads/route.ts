import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()

  const required = ['name', 'email', 'company']
  const missing = required.filter((field) => !body[field])

  if (missing.length) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // Storage layer will be connected here.
  // This route intentionally validates server-side before persistence is added.
  return NextResponse.json({ success: true })
}
