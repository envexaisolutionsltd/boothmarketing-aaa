import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'

export default function WebsitesPage() {
  return (
    <main className="min-h-screen bg-[#090a0b] text-[#f4f4f3]">
      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#090a0b]/95 supports-[backdrop-filter]:bg-[#090a0b]/85 supports-[backdrop-filter]:backdrop-blur-xl">
        <div className="mx-auto flex min-h-[64px] w-[min(1080px,calc(100%-28px))] items-center justify-between gap-3">
          <Link href="/" className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#d8cbb7]"><ArrowLeft className="h-4 w-4" />Home</Link>
          <img src="/booth-marketing-logo.png" alt="Booth Marketing" className="w-[118px] sm:w-[145px]" />
          <Link href="/website-audit" className="inline-flex min-h-11 items-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-4 text-[12px] font-semibold text-[#151515]">Request Audit</Link>
        </div>
      </header>

      <section className="border-b border-white/[0.055] py-12 sm:py-16">
        <div className="mx-auto w-[min(1080px,calc(100%-28px))]">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#d8cbb7]">Websites</p>
          <h1 className="mt-4 max-w-[820px] text-[clamp(40px,9vw,62px)] font-semibold leading-[1.01] tracking-[-0.055em]">Conversion infrastructure for an AI-first buying environment.</h1>
          <p className="mt-5 max-w-[730px] text-[15px] leading-7 text-[#929399]">AI is shortening discovery. Your website now carries more of the trust, positioning and conversion work once the buyer arrives.</p>
        </div>
      </section>

      <section className="border-b border-white/[0.055] bg-[#0b0d0e] py-10 sm:py-14">
        <div className="mx-auto w-[min(1080px,calc(100%-28px))]">
          <h2 className="max-w-[760px] text-[clamp(32px,7vw,48px)] font-semibold leading-[1.05] tracking-[-0.045em]">What we actually build around</h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{[
            ['Offer clarity', 'The buyer should understand what you do without decoding vague marketing language.'],
            ['Positioning', 'The site should make a clear case for why your business deserves consideration.'],
            ['Proof', 'Credibility should appear where doubt appears, not buried on a generic testimonials page.'],
            ['Mobile-first UX', 'High-intent traffic should get a purpose-built mobile journey, not a shrunken desktop one.'],
            ['Landing pages', 'Specific offers, campaigns and audiences need specific conversion paths.'],
            ['Answer-engine clarity', 'Services, expertise, proof and intent should be easy for both people and AI systems to interpret.'],
          ].map(([title, copy]) => <div key={title} className="rounded-[16px] border border-white/[0.07] bg-[#0d0f10] p-5"><p className="text-[15px] font-semibold text-[#e2e2e4]">{title}</p><p className="mt-2 text-[13px] leading-6 text-[#808187]">{copy}</p></div>)}</div>
        </div>
      </section>

      <section className="border-b border-white/[0.055] py-10 sm:py-14">
        <div className="mx-auto grid w-[min(1080px,calc(100%-28px))] gap-5 lg:grid-cols-2">
          <div><p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#cfc2ae]">One homepage is rarely enough</p><h2 className="mt-4 text-[clamp(30px,7vw,44px)] font-semibold tracking-[-0.045em]">Different intent needs different pages.</h2><p className="mt-4 text-[14px] leading-7 text-[#8d8e94]">A referral visitor, paid campaign visitor and AI-search visitor may all know different things before they land. We design the page around that starting point.</p></div>
          <div className="rounded-[17px] border border-[#d92f3c]/18 bg-[#190f11]/42 p-5"><p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#cfc2ae]">The result</p><div className="mt-4 space-y-3">{['Faster understanding', 'Stronger first-impression trust', 'Clearer differentiation', 'Less friction to the next action', 'A structure that can support new offers and campaigns'].map(item => <div key={item} className="flex items-start gap-2.5 text-[13px] leading-6 text-[#a49598]"><Check className="mt-1 h-3.5 w-3.5 shrink-0 text-[#d8cbb7]" />{item}</div>)}</div></div>
        </div>
      </section>

      <section className="py-12 text-center sm:py-16"><div className="mx-auto w-[min(760px,calc(100%-28px))]"><h2 className="text-[clamp(34px,7.5vw,50px)] font-semibold leading-[1.04] tracking-[-0.048em]">Before rebuilding anything, find out what the current site is doing wrong.</h2><Link href="/website-audit" className="mt-6 inline-flex min-h-[50px] items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-5 text-[13px] font-semibold text-[#151515]">Request a Website Conversion Audit<ArrowRight className="ml-2.5 h-4 w-4" /></Link></div></section>
    </main>
  )
}
