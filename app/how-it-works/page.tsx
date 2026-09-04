import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import SiteFooter from '../../components/SiteFooter'
import SiteHeader from '../../components/SiteHeader'

const steps = [
  ['01', 'Understand the buyer', 'Clarify who is arriving, what they already know, what they are comparing and what would stop them trusting the business.'],
  ['02', 'Diagnose the current site', 'Review clarity, positioning, proof, mobile experience, page structure and the route from attention to action.'],
  ['03', 'Design the decision path', 'Decide what the buyer needs to see, in what order, and where different offers or audiences need different pages.'],
  ['04', 'Build for speed and trust', 'Create a fast, mobile-first site that communicates clearly and does not depend on effects or complexity to feel credible.'],
  ['05', 'Measure and improve', 'Use real behaviour and conversion data to refine the pages rather than treating launch day as the finish line.'],
]

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#090a0b] text-[#f4f4f3]">
      <SiteHeader />
      <section className="border-b border-white/[0.055] py-12 sm:py-16"><div className="mx-auto w-[min(1080px,calc(100%-28px))]"><p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#d8cbb7]">How It Works</p><h1 className="mt-4 max-w-[820px] text-[clamp(40px,9vw,62px)] font-semibold leading-[1.01] tracking-[-0.055em]">Build the decision path before building the pages.</h1><p className="mt-5 max-w-[720px] text-[15px] leading-7 text-[#929399]">The quickest way to waste a website budget is to redesign the interface before understanding what the buyer needs to believe.</p></div></section>
      <section className="border-b border-white/[0.055] bg-[#0b0d0e] py-10 sm:py-14"><div className="mx-auto w-[min(1080px,calc(100%-28px))]"><div className="overflow-hidden rounded-[18px] border border-white/[0.07] bg-white/[0.025]">{steps.map(([number,title,copy])=><div key={number} className="grid grid-cols-[42px_1fr] gap-3 border-b border-white/[0.07] p-5 last:border-b-0 sm:grid-cols-[60px_220px_1fr] sm:items-center"><span className="text-[9px] font-bold tracking-[0.16em] text-[#77787e]">{number}</span><div><p className="text-[16px] font-semibold text-[#e2e2e4]">{title}</p><p className="mt-1 text-[13px] leading-6 text-[#808187] sm:hidden">{copy}</p></div><p className="hidden text-[13px] leading-6 text-[#808187] sm:block">{copy}</p></div>)}</div></div></section>
      <section className="border-b border-white/[0.055] py-10 sm:py-14"><div className="mx-auto grid w-[min(1080px,calc(100%-28px))] gap-5 lg:grid-cols-2"><div className="rounded-[18px] border border-white/[0.07] bg-[#0d0f10] p-5"><p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#cfc2ae]">What we keep</p><div className="mt-4 space-y-3">{['Strong existing brand assets','Pages that already perform','Useful search equity','Content that still answers the buyer well'].map(item=><div key={item} className="flex items-start gap-2.5 text-[13px] leading-6 text-[#98999f]"><Check className="mt-1 h-3.5 w-3.5 shrink-0 text-[#d8cbb7]" />{item}</div>)}</div></div><div className="rounded-[18px] border border-[#d92f3c]/18 bg-[#190f11]/42 p-5"><p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#cfc2ae]">What we change</p><div className="mt-4 space-y-3">{['Vague positioning','Slow or confusing mobile journeys','Weak proof and trust signals','Pages that try to serve every intent at once'].map(item=><div key={item} className="flex items-start gap-2.5 text-[13px] leading-6 text-[#a49598]"><Check className="mt-1 h-3.5 w-3.5 shrink-0 text-[#d8cbb7]" />{item}</div>)}</div></div></div></section>
      <section className="py-12 text-center sm:py-16"><div className="mx-auto w-[min(760px,calc(100%-28px))]"><h2 className="text-[clamp(34px,7.5vw,50px)] font-semibold leading-[1.04] tracking-[-0.048em]">Start with the current site, not a redesign brief.</h2><p className="mt-4 text-[14px] leading-7 text-[#8d8e94]">We will show you what is helping the decision, what is hurting it and whether a rebuild is actually justified.</p><Link href="/website-audit" className="mt-6 inline-flex min-h-[50px] items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-5 text-[13px] font-semibold text-[#151515]">Request a Website Conversion Audit<ArrowRight className="ml-2.5 h-4 w-4" /></Link></div></section>
      <SiteFooter />
    </main>
  )
}
