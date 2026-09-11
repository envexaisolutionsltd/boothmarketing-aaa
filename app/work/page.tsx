import { ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import SiteHeader from '../../components/SiteHeader'
import SiteFooter from '../../components/SiteFooter'

const northsteadUrl = 'https://northstead-commercial-risk-l4776yxlv.vercel.app'

export default function WorkPage() {
  return <main className="min-h-screen bg-[#090a0b] text-[#f4f4f3]">
    <SiteHeader />
    <section className="border-b border-white/[0.055] py-14 sm:py-20">
      <div className="mx-auto w-[min(1160px,calc(100%-28px))]">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#d8cbb7]">Selected work</p>
        <h1 className="mt-5 max-w-[900px] text-[clamp(42px,8vw,72px)] font-semibold leading-[0.98] tracking-[-0.055em]">Websites built around the decision a buyer needs to make.</h1>
        <p className="mt-6 max-w-[700px] text-[15px] leading-7 text-[#94959b] sm:text-[17px]">Independent concepts let us demonstrate the strategy, structure and design thinking behind our work without presenting fictional brands as clients.</p>
      </div>
    </section>

    <section className="py-12 sm:py-16">
      <div className="mx-auto w-[min(1160px,calc(100%-28px))]">
        <div className="mb-5 flex items-center justify-between border-b border-white/[0.07] pb-4"><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#77787e]">Concepts</p><p className="text-[10px] uppercase tracking-[0.18em] text-[#66676d]">Independent concept work</p></div>
        <article className="overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#0d0f10]">
          <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-[9px] font-extrabold uppercase tracking-[0.24em] text-[#d8cbb7]">01 / Commercial Insurance</p>
              <h2 className="mt-5 text-[clamp(30px,5vw,46px)] font-semibold leading-[1.02] tracking-[-0.045em]">Northstead Commercial Risk</h2>
              <p className="mt-4 text-[14px] leading-7 text-[#929399]">Making a traditional commercial insurance proposition feel clearer, more credible and easier to act on.</p>
              <div className="mt-7 grid gap-4 border-t border-white/[0.07] pt-5 sm:grid-cols-3 lg:grid-cols-1">
                {[['Positioning','Commercial confidence'],['Focus','Established businesses'],['Primary action','Start a conversation']].map(([label,value])=><div key={label}><p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#66676d]">{label}</p><p className="mt-1.5 text-[12px] font-semibold text-[#d9d9db]">{value}</p></div>)}
              </div>
              <div className="mt-8 flex flex-wrap gap-3"><Link href="/work/northstead-commercial-risk" className="inline-flex min-h-11 items-center rounded-lg bg-[#efe3cf] px-4 text-[12px] font-semibold text-[#151515]">View case study<ArrowRight className="ml-2 h-4 w-4" /></Link><a href={northsteadUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-lg border border-white/[0.1] px-4 text-[12px] font-semibold text-[#c8c8cc]">Live concept<ExternalLink className="ml-2 h-3.5 w-3.5" /></a></div>
            </div>
            <a href={northsteadUrl} target="_blank" rel="noreferrer" aria-label="Open Northstead Commercial Risk live concept" className="group min-h-[360px] border-t border-white/[0.07] bg-[#111315] p-4 sm:p-6 lg:border-l lg:border-t-0">
              <div className="h-full min-h-[330px] overflow-hidden rounded-[14px] border border-white/[0.1] bg-[#f1eee8] shadow-2xl">
                <div className="flex h-9 items-center gap-1.5 border-b border-black/10 bg-[#e7e3dc] px-3"><span className="h-2 w-2 rounded-full bg-black/20"/><span className="h-2 w-2 rounded-full bg-black/20"/><span className="h-2 w-2 rounded-full bg-black/20"/><span className="ml-3 text-[8px] font-semibold uppercase tracking-[0.18em] text-black/40">Northstead / Live concept</span></div>
                <div className="flex min-h-[294px] flex-col justify-between bg-[#17201d] p-7 sm:p-10"><div><p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/50">Commercial risk / Yorkshire</p><p className="mt-5 max-w-[520px] text-[clamp(30px,5vw,56px)] font-semibold leading-[0.98] tracking-[-0.05em] text-white">Commercial insurance built around your business.</p><p className="mt-4 max-w-[440px] text-[12px] leading-6 text-white/55">A restrained concept for established businesses that need clarity before complexity.</p></div><span className="mt-8 inline-flex w-fit items-center border-b border-white/30 pb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">Open live prototype ↗</span></div>
              </div>
            </a>
          </div>
        </article>
        <div className="mt-5 rounded-[16px] border border-white/[0.07] bg-white/[0.02] p-5"><p className="text-[12px] leading-6 text-[#77787e]">Concept work is created independently by Booth Marketing to demonstrate our approach. It is not presented as commissioned client work, and no fictional performance results or testimonials are used.</p></div>
      </div>
    </section>

    <section className="border-t border-white/[0.055] bg-[#0b0d0e] py-12 text-center sm:py-16"><div className="mx-auto w-[min(760px,calc(100%-28px))]"><p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#d8cbb7]">Your website</p><h2 className="mt-4 text-[clamp(32px,7vw,48px)] font-semibold leading-[1.03] tracking-[-0.05em]">The goal is not to look like these concepts. It is to make your buyer's decision easier.</h2><Link href="/website-audit" className="mt-7 inline-flex min-h-[50px] items-center rounded-lg bg-[#efe3cf] px-5 text-[13px] font-semibold text-[#151515]">Request Website Audit<ArrowRight className="ml-2.5 h-4 w-4" /></Link></div></section>
    <SiteFooter />
  </main>
}
