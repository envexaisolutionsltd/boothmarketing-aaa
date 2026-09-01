"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { NAVIGATION } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#08090b]/92 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[72px] sm:px-8 lg:px-10" aria-label="Primary navigation">
        <Link href="/" aria-label="Booth Marketing home" onClick={() => setOpen(false)} className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#be2e3d]">
          <BrandLogo priority className="w-[112px] sm:w-[150px]" />
        </Link>

        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition hover:text-zinc-100 focus:outline-none focus-visible:text-white ${pathname === item.href ? "text-[#f1e8d8]" : "text-zinc-500"}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/automation-audit#audit-form" className="rounded-md border border-[#f1e8d8]/20 bg-[#f1e8d8]/[0.06] px-5 py-2.5 text-sm font-semibold text-[#f1e8d8] transition hover:border-[#f1e8d8]/35 hover:bg-[#f1e8d8]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#be2e3d]">
            Request an Audit
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((current) => !current)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md border border-white/[0.09] text-zinc-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#be2e3d] md:hidden"
        >
          <span className={`h-px w-5 bg-current transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-current transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      <div id="mobile-navigation" hidden={!open} className="border-t border-white/[0.07] bg-[#0b0c0f] md:hidden">
          <div className="mx-auto max-w-6xl space-y-1 px-5 py-5 sm:px-8">
            {NAVIGATION.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={`block rounded-lg px-3 py-3.5 text-base font-medium transition hover:bg-white/[0.04] ${pathname === item.href ? "text-[#f1e8d8]" : "text-zinc-400"}`}>
                {item.label}
              </Link>
            ))}
            <Link href="/automation-audit#audit-form" onClick={() => setOpen(false)} className="mt-4 flex min-h-12 items-center justify-center rounded-lg bg-[#f1e8d8] px-5 text-sm font-semibold text-[#14110e]">
              Request an Audit
            </Link>
          </div>
      </div>
    </header>
  );
}
