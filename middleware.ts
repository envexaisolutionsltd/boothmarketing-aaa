import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const session = request.cookies.get('booth_admin_session')

  if (!session && request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/login')) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
