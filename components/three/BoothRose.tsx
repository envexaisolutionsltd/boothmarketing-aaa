'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type Pointer = { x: number; y: number }

const petals = Array.from({ length: 34 }, (_, index) => {
  const ring = Math.floor(index / 7)
  const position = index % 7
  const angle = (position / 7) * 360 + ring * 23
  const radius = 24 + ring * 20
  const scale = 0.72 + ring * 0.13
  const lift = ring * 4
  return { index, ring, angle, radius, scale, lift }
})

export default function BoothRose({ className = '' }: { className?: string }) {
  const reducedMotion = useReducedMotion()
  const frame = useRef<number | null>(null)
  const pointer = useRef<Pointer>({ x: 0, y: 0 })
  const current = useRef<Pointer>({ x: 0, y: 0 })
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)')

  useEffect(() => {
    if (reducedMotion) return
    const tick = () => {
      current.current.x += (pointer.current.x - current.current.x) * 0.045
      current.current.y += (pointer.current.y - current.current.y) * 0.045
      setTransform(`rotateX(${current.current.y * -5}deg) rotateY(${current.current.x * 7}deg)`)
      frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
    return () => { if (frame.current) cancelAnimationFrame(frame.current) }
  }, [reducedMotion])

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reducedMotion) return
    const rect = event.currentTarget.getBoundingClientRect()
    pointer.current = {
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
    }
  }

  function resetPointer() { pointer.current = { x: 0, y: 0 } }

  return (
    <div
      className={`relative isolate min-h-[330px] w-full overflow-visible sm:min-h-[390px] lg:min-h-[500px] ${className}`}
      onPointerMove={onPointerMove}
      onPointerLeave={resetPointer}
      aria-hidden="true"
    >
      <div className="absolute inset-[7%] rounded-full bg-[radial-gradient(circle,rgba(217,47,60,0.20)_0%,rgba(217,47,60,0.07)_34%,transparent_70%)] blur-3xl" />
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, scale: 0.9, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.05, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 grid place-items-center [perspective:900px]"
      >
        <motion.div
          animate={reducedMotion ? undefined : { y: [0, -4, 0], rotate: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="relative aspect-square w-[min(88vw,470px)] sm:w-[430px] lg:w-[500px]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-[12%] transition-transform duration-100 ease-out" style={{ transform, transformStyle: 'preserve-3d' }}>
            <div className="absolute inset-[28%] rounded-[46%_54%_48%_52%] bg-[radial-gradient(circle_at_38%_30%,#5b3035_0%,#241417_22%,#0c0d0f_62%,#050506_100%)] shadow-[inset_-18px_-20px_35px_rgba(0,0,0,0.72),inset_8px_8px_24px_rgba(239,227,207,0.08),0_0_50px_rgba(217,47,60,0.10)]" />
            {petals.map(({ index, ring, angle, radius, scale, lift }) => (
              <span
                key={index}
                className="absolute left-1/2 top-1/2 block h-[42%] w-[29%] origin-[50%_92%] rounded-[54%_46%_48%_52%/64%_60%_40%_36%] border border-white/[0.035] bg-[radial-gradient(ellipse_at_32%_20%,rgba(239,227,207,0.13)_0%,rgba(70,40,44,0.22)_18%,rgba(18,18,21,0.98)_52%,rgba(5,6,7,1)_100%)] shadow-[inset_8px_7px_16px_rgba(255,255,255,0.025),inset_-12px_-18px_24px_rgba(0,0,0,0.72),0_2px_12px_rgba(0,0,0,0.48)]"
                style={{
                  transform: `translate(-50%,-88%) rotate(${angle}deg) translateY(-${radius}px) rotateX(${58 - ring * 7}deg) scale(${scale}) translateZ(${lift}px)`,
                  filter: ring < 2 ? 'brightness(.78)' : 'brightness(.92)',
                }}
              />
            ))}
            <div className="absolute inset-[19%] rounded-full bg-[radial-gradient(circle_at_52%_46%,rgba(217,47,60,0.16),transparent_58%)] blur-xl mix-blend-screen" />
          </div>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-[9%] left-1/2 h-px w-[54%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/[0.10] to-transparent blur-[0.3px]" />
      <div className="absolute bottom-[5%] left-1/2 h-10 w-[44%] -translate-x-1/2 rounded-full bg-black/60 blur-xl" />
    </div>
  )
}
