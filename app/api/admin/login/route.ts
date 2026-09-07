import { NextResponse } from 'next/server'

const encoder = new TextEncoder()

async function signSession(secret: string, expiresAt: number) {
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const payload = `authenticated.${expiresAt}`
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(payload))
  const hex = Array.from(new Uint8Array(signature), (byte) => byte.toString(16).padStart(2, '0')).join('')
  return `${payload}.${hex}`
}

export async function POST(request: Request) {
  try {
    const { password } = await request.json()
    const adminPassword = process.env.ADMIN_PASSWORD

    if (!adminPassword) {
      return NextResponse.json({ error: 'Admin login is not configured' }, { status: 503 })
    }

    if (typeof password !== 'string' || password !== adminPassword) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    const maxAge = 60 * 60 * 8
    const expiresAt = Math.floor(Date.now() / 1000) + maxAge
    const token = await signSession(adminPassword, expiresAt)

    const response = NextResponse.json({ success: true })
    response.cookies.set('booth_admin_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge,
      path: '/',
    })

    return response
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
