'use client'

import dynamic from 'next/dynamic'

const BoothRoseScene = dynamic(() => import('./BoothRoseScene'), { ssr: false, loading: () => <div className="h-full min-h-[390px] w-full lg:min-h-[560px]" /> })

export default function BoothRoseHero() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[540px] sm:h-[500px] lg:h-[600px] lg:max-w-none">
      <div className="pointer-events-none absolute left-[10%] top-[12%] h-[70%] w-[72%] rounded-full bg-[radial-gradient(circle,rgba(217,47,60,0.11),rgba(91,17,26,0.035)_42%,transparent_72%)] blur-2xl" />
      <BoothRoseScene />
    </div>
  )
}
