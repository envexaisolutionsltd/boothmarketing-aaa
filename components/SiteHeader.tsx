'use client'

import { ArrowRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const links = [
  ['Websites', '/websites'],
  ['How It Works', '/how-it-works'],
  ['Automation', '/automation'],
  ['About', '/about'],
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#090a0b]/95 supports-[backdrop-filter]:bg-[#090a0b]/82 supports-[backdrop-filter]:backdrop-blur-xl">
      <div className="mx-auto flex min-h-[64px] w-[min(1160px,calc(100%-24px))] items-center justify-between gap-2 sm:gap-3">
        <Link href="/" aria-label="Booth Marketing home" className="flex h-[52px] w-[108px] items-center overflow-hidden sm:w-[148px]">
          <img src="/booth-marketing-logo.png" alt="Booth Marketing" className="w-[108px] object-contain sm:w-[148px]" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-[13px] font-medium text-[#8d8e94] transition hover:text-white">{label}</Link>)}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/website-audit" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-3 text-[12px] font-semibold text-[#151515] transition hover:bg-[#f8edda] sm:px-4 sm:text-[13px]"><span className="sm:hidden">Audit</span><span className="hidden sm:inline">Request Website Audit</span><ArrowRight className="ml-1.5 h-4 w-4 sm:ml-2" /></Link>
          <button type="button" onClick={() => setOpen(true)} aria-label="Open menu" className="grid h-11 w-11 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-[#d7d7da] lg:hidden"><Menu className="h-5 w-5" /></button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button type="button" aria-label="Close menu overlay" onClick={() => setOpen(false)} className="absolute inset-0 bg-black/70" />
          <aside role="dialog" aria-modal="true" aria-label="Site navigation" className="absolute right-0 top-0 flex h-full w-[80%] max-w-[360px] flex-col border-l border-white/[0.08] bg-[#0b0d0e] p-5 shadow-[-30px_0_80px_rgba(0,0,0,.45)]">
            <div className="flex items-center justify-between">
              <img src="/booth-marketing-logo.png" alt="Booth Marketing" className="w-[128px] object-contain" />
              <button ref={closeButtonRef} type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-11 w-11 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-[#d7d7da]"><X className="h-5 w-5" /></button>
            </div>
            <nav className="mt-8 border-t border-white/[0.07]" aria-label="Mobile navigation">
              {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="flex min-h-[56px] items-center justify-between border-b border-white/[0.07] text-[15px] font-semibold text-[#dddddf]">{label}<ArrowRight className="h-4 w-4 text-[#77787e]" /></Link>)}
              <Link href="/website-audit" onClick={() => setOpen(false)} className="flex min-h-[56px] items-center justify-between border-b border-white/[0.07] text-[15px] font-semibold text-[#dddddf]">Website Audit<ArrowRight className="h-4 w-4 text-[#77787e]" /></Link>
            </nav>
            <div className="mt-auto pt-7">
              <p className="mb-4 text-[12px] leading-6 text-[#7f8086]">Conversion-focused websites and automation systems for established businesses.</p>
              <Link href="/website-audit" onClick={() => setOpen(false)} className="flex min-h-[50px] w-full items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-5 text-[13px] font-semibold text-[#151515]">Request Website Audit<ArrowRight className="ml-2.5 h-4 w-4" /></Link>
            </div>
          </aside>
        </div>
      )}
    </header>
  )
}
