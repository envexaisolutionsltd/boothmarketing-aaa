import { NextResponse } from 'next/server'
import { boothMarketingPublic } from '@/lib/public-company'

export const dynamic = 'force-static'

export function GET() {
  return NextResponse.json(boothMarketingPublic, {
    headers: {
      'Cache-Control': 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400',
      'X-Robots-Tag': 'index, follow',
    },
  })
}
