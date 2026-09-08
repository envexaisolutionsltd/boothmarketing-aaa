import { NextResponse } from 'next/server'
import { clientIp, hasAllowedJsonSize, rateLimit, sameOrigin, safeText } from '@/lib/security'

const encoder = new TextEncoder()

async function signSession(secret: string, expiresAt: number) {
  const key = await crypto.subtle.importKey('raw',encoder.encode(secret),{ name: 'HMAC', hash: 'SHA-256' },false,['sign'])
  const payload = `authenticated.${expiresAt}`
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(payload))
  const hex = Array.from(new Uint8Array(signature), (byte) => byte.toString(16).padStart(2, '0')).join('')
  return `${payload}.${hex}`
}

export async function POST(request: Request) {
  try {
    if(!sameOrigin(request)) return NextResponse.json({error:'Invalid request'},{status:403})
    if(!hasAllowedJsonSize(request,4096)) return NextResponse.json({error:'Request too large'},{status:413})
    const ip=clientIp(request)
    const gate=rateLimit(`admin-login:${ip}`,8,15*60*1000)
    if(!gate.ok) return NextResponse.json({error:'Too many login attempts. Try again shortly.'},{status:429,headers:{'Retry-After':String(gate.retryAfter),'Cache-Control':'no-store'}})
    const { password } = await request.json()
    const adminPassword = process.env.ADMIN_PASSWORD
    if (!adminPassword) return NextResponse.json({ error: 'Admin login is not configured' }, { status: 503 })
    if (safeText(password,256) !== adminPassword) return NextResponse.json({ error: 'Invalid password' }, { status: 401,headers:{'Cache-Control':'no-store'} })
    const maxAge = 60 * 60 * 8
    const expiresAt = Math.floor(Date.now() / 1000) + maxAge
    const token = await signSession(adminPassword, expiresAt)
    const response = NextResponse.json({ success: true },{headers:{'Cache-Control':'no-store'}})
    response.cookies.set('booth_admin_session', token, {httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'strict',maxAge,path:'/admin'})
    return response
  } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400,headers:{'Cache-Control':'no-store'} }) }
}
