'use client'

import { useEffect, useState } from 'react'

const ROSE_SRC = '/booth-rose-hero.webp'

export default function BoothRoseHero() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReducedMotion(media.matches)
    sync()
    media.addEventListener?.('change', sync)
    return () => media.removeEventListener?.('change', sync)
  }, [])

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[540px] overflow-visible sm:h-[500px] lg:h-[600px] lg:max-w-none" aria-label="Booth Marketing signature black and crimson rose with butterfly">
      <div className="pointer-events-none absolute left-[5%] top-[4%] h-[82%] w-[88%] rounded-full bg-[radial-gradient(circle,rgba(217,47,60,0.14),rgba(91,17,26,0.05)_44%,transparent_72%)] blur-3xl" />
      <div className={`absolute inset-0 flex items-center justify-center ${reducedMotion ? '' : 'animate-[boothRoseFloat_8s_ease-in-out_infinite]'}`}>
        <img
          src={ROSE_SRC}
          alt="Black and crimson rose with a red and black butterfly"
          className="h-full w-full scale-[1.06] object-contain object-center drop-shadow-[0_0_34px_rgba(217,47,60,0.16)] sm:scale-[1.1] lg:scale-[1.16]"
          draggable={false}
        />
      </div>
      <style jsx>{`
        @keyframes boothRoseFloat {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(-0.35deg); }
          50% { transform: translate3d(0, -4px, 0) rotate(0.35deg); }
        }
      `}</style>
    </div>
  )
}
