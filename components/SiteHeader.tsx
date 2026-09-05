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
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#090a0b] supports-[backdrop-filter]:bg-[#090a0b]/96 supports-[backdrop-filter]:backdrop-blur-xl">
      <div className="mx-auto flex min-h-[68px] w-[min(1160px,calc(100%-24px))] items-center justify-between gap-2 sm:gap-3">
        <Link href="/" aria-label="Booth Marketing home" className="flex h-[56px] w-[116px] items-center sm:w-[158px]">
          <img src="/booth-marketing-logo.svg" alt="Booth Marketing" className="block w-[116px] object-contain sm:w-[158px]" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-[13px] font-medium text-[#9a9ba1] transition hover:text-white">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/website-audit" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-3 text-[12px] font-semibold text-[#151515] shadow-[0_4px_18px_rgba(0,0,0,0.18)] transition hover:bg-[#f8edda] sm:px-4 sm:text-[13px]">
            <span className="sm:hidden">Audit</span>
            <span className="hidden sm:inline">Request Website Audit</span>
            <ArrowRight className="ml-1.5 h-4 w-4 sm:ml-2" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/[0.16] bg-[#151719] text-[#f4f4f3] shadow-[0_4px_18px_rgba(0,0,0,0.22)] lg:hidden"
          >
            <Menu className="h-5 w-5" strokeWidth={2.2} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
            className="absolute inset-0 z-0 bg-black/80"
          />

          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="absolute right-0 top-0 z-10 flex h-[100dvh] w-[86%] max-w-[370px] flex-col border-l border-white/[0.12] bg-[#0b0d0e] px-5 pb-[calc(20px+env(safe-area-inset-bottom))] pt-[calc(20px+env(safe-area-inset-top))] shadow-[-36px_0_90px_rgba(0,0,0,0.65)]"
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/[0.09] pb-5">
              <img src="/booth-marketing-logo.svg" alt="Booth Marketing" className="block w-[146px] object-contain" />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/[0.15] bg-[#17191b] text-white"
              >
                <X className="h-5 w-5" strokeWidth={2.2} />
              </button>
            </div>

            <nav className="mt-3" aria-label="Mobile navigation">
              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[58px] items-center justify-between border-b border-white/[0.09] text-[16px] font-semibold text-[#f0f0f1]"
                >
                  {label}
                  <ArrowRight className="h-4 w-4 text-[#9b9ca2]" />
                </Link>
              ))}
              <Link
                href="/website-audit"
                onClick={() => setOpen(false)}
                className="flex min-h-[58px] items-center justify-between border-b border-white/[0.09] text-[16px] font-semibold text-[#f0f0f1]"
              >
                Website Audit
                <ArrowRight className="h-4 w-4 text-[#9b9ca2]" />
              </Link>
            </nav>

            <div className="mt-auto pt-8">
              <div className="rounded-[14px] border border-white/[0.09] bg-[#111315] p-4">
                <p className="text-[12px] leading-6 text-[#9a9ba1]">Conversion-focused websites and automation systems for established businesses.</p>
              </div>
              <Link
                href="/website-audit"
                onClick={() => setOpen(false)}
                className="mt-4 flex min-h-[52px] w-full items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-5 text-[13px] font-semibold text-[#151515]"
              >
                Request Website Audit
                <ArrowRight className="ml-2.5 h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      )}
    </header>
  )
}
