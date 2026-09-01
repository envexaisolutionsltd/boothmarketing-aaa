import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";
import { NAVIGATION } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#08090b] py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <BrandLogo className="w-[170px] sm:w-[195px]" />
            <p className="mt-4 text-sm text-zinc-600">Automation systems built around real businesses.</p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            {NAVIGATION.map((item) => <Link key={item.href} href={item.href} className="text-xs text-zinc-600 transition hover:text-zinc-300">{item.label}</Link>)}
          </div>
        </div>
        <p className="mt-8 border-t border-white/[0.06] pt-6 text-xs text-zinc-700">© {new Date().getFullYear()} Booth Marketing</p>
      </div>
    </footer>
  );
}
