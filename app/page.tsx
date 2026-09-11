import { ArrowRight, Check, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'

const friction = [
  ['The offer takes too long to understand', 'If a buyer has to work out who you help, what you do or why it matters, attention is already being spent.'],
  ['The site looks credible, but interchangeable', 'A polished site still loses when the buyer cannot see a reason to choose you over the next business.'],
  ['One homepage is trying to sell everything', 'Different offers and audiences arrive with different questions. One generic route rarely answers all of them well.'],
  ['Mobile feels like a smaller desktop site', 'High-intent visitors should not have to fight the interface to understand or trust the business.'],
]

const conversionJobs = [
  ['Explain', 'Make the offer obvious without forcing the buyer to hunt.'],
  ['Position', 'Show why the business deserves consideration over alternatives.'],
  ['Prove', 'Remove the reasons a serious buyer has to doubt you.'],
  ['Direct', 'Make the next useful action obvious at each decision point.'],
  ['Convert', 'Turn decision-ready attention into an enquiry, booking or purchase.'],
]

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="max-w-[820px]"><p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#d8cbb7]">{eyebrow}</p><h2 className="mt-4 text-[clamp(32px,7.8vw,50px)] font-semibold leading-[1.04] tracking-[-0.048em]">{title}</h2>{copy && <p className="mt-4 max-w-[730px] text-[15px] leading-7 text-[#94959b] sm:text-[16px]">{copy}</p>}</div>
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#090a0b] text-[#f4f4f3] selection:bg-[#efe3cf] selection:text-[#151515]">
      <SiteHeader />

      <section className="relative border-b border-white/[0.055]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(217,47,60,0.12),transparent_30%),radial-gradient(circle_at_20%_16%,rgba(239,227,207,0.025),transparent_32%)]" />
        <div className="relative mx-auto grid w-[min(1160px,calc(100%-28px))] gap-7 py-9 sm:py-12 lg:min-h-[540px] lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-14">
          <div>
            <div className="inline-flex min-h-8 items-center gap-2.5 rounded-full border border-white/[0.08] bg-[#0d0f10] px-3.5 text-[8.5px] font-extrabold uppercase tracking-[0.22em] text-[#d8cbb7] sm:text-[9.5px]"><span className="h-1.5 w-1.5 rounded-full bg-[#d92f3c] shadow-[0_0_14px_rgba(217,47,60,0.7)]" />Conversion-Focused Websites for Established Businesses</div>
            <h1 className="mt-5 max-w-[760px] text-[clamp(39px,10.2vw,64px)] font-semibold leading-[0.99] tracking-[-0.058em]">AI is changing how customers search. <span className="text-[#c8c8cc]">Your website still has to earn the decision.</span></h1>
            <p className="mt-5 max-w-[690px] text-[16px] leading-[1.62] text-[#a7a8ad]">AI-assisted search can shorten the research phase. When a serious buyer reaches your site, clarity, proof and speed matter more than ever.</p>
            <p className="mt-3 max-w-[670px] text-[14px] leading-6 text-[#808187]">Booth Marketing designs and builds websites around the decision a buyer needs to make, not around decoration for its own sake.</p>
            <div className="mt-6 flex flex-wrap gap-3"><Link href="/website-audit" className="inline-flex min-h-[50px] items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-6 text-sm font-semibold text-[#151515] transition hover:bg-[#f8edda]">Request Website Audit<ArrowRight className="ml-2.5 h-4 w-4" /></Link><Link href="/websites" className="inline-flex min-h-[50px] items-center justify-center rounded-lg border border-white/[0.09] bg-white/[0.025] px-5 text-[13px] font-semibold text-[#c8c8cc]">See What We Build</Link></div>
            <p className="mt-3 max-w-[620px] text-[12px] leading-5 text-[#73747a]">No redesign commitment. We start by showing you what the current site is helping, hurting and making harder than it needs to be.</p>
          </div>

          <div className="relative mx-auto flex w-full max-w-[470px] items-center justify-center pt-1 sm:max-w-[520px] lg:max-w-none lg:justify-end lg:pt-0">
            <div className="pointer-events-none absolute left-1/2 top-[44%] h-[64%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d92f3c]/[0.055] blur-[70px] lg:left-[56%]" />
            <Image
              src="/booth-rose-hero.webp"
              alt="Red rose with butterfly"
              width={180}
              height={150}
              priority
              sizes="(max-width: 639px) 82vw, (max-width: 1023px) 520px, 470px"
              className="relative h-auto w-[82%] max-w-[430px] object-contain drop-shadow-[0_28px_60px_rgba(0,0,0,0.36)] sm:w-[76%] lg:w-full lg:max-w-[470px]"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.055] bg-[#0b0d0e] py-11 sm:py-14"><div className="mx-auto w-[min(1160px,calc(100%-28px))]"><SectionHeading eyebrow="Commercially ready?" title="Your website can work technically while failing commercially." copy="A site does not need to look broken to make the buying decision harder than it should be." /><div className="mt-7 grid border-t border-white/[0.07] md:grid-cols-2">{friction.map(([title,copy],index)=><article key={title} className={`grid grid-cols-[34px_1fr] gap-3 border-b border-white/[0.07] py-4 md:min-h-[124px] md:px-5 ${index%2===0?'md:border-r':''}`}><span className="pt-1 text-[8.5px] font-bold tracking-[0.16em] text-[#77787e]">0{index+1}</span><div><h3 className="text-[15px] font-semibold leading-6 text-[#e3e3e5]">{title}</h3><p className="mt-1.5 text-[13px] leading-6 text-[#7f8086]">{copy}</p></div></article>)}</div></div></section>

      <section className="border-b border-white/[0.055] py-11 sm:py-14"><div className="mx-auto w-[min(1160px,calc(100%-28px))]"><SectionHeading eyebrow="The buying environment is changing" title="Less browsing means the pages buyers do visit have more work to do." copy="A referral, campaign visitor and AI-assisted search visitor may all arrive with different context. The site should make the next decision clear without forcing each of them through the same generic path." /><div className="mt-7 grid gap-4 lg:grid-cols-2"><JourneyCard label="Longer research journey" nodes={['Search', 'Browse', 'Reviews', 'Compare', 'Contact']} /><JourneyCard label="Shorter AI-assisted journey" nodes={['Ask AI', 'Shortlist', 'Visit', 'Decide']} accent /></div><div className="mt-5 rounded-[15px] border border-white/[0.07] bg-[#0d0f10] p-5"><p className="text-[13px] font-semibold text-[#dddddf]">One homepage cannot sell every offer to every audience.</p><p className="mt-2 text-[12px] leading-6 text-[#7f8086]">Focused service pages and landing pages give different buyers a clearer route to the answer they actually came for.</p></div></div></section>

      <section className="border-b border-white/[0.055] bg-[#0b0d0e] py-11 sm:py-14"><div className="mx-auto w-[min(1160px,calc(100%-28px))]"><SectionHeading eyebrow="Conversion infrastructure" title="A modern business website has five jobs." copy="Not more animation. Not more pages for the sake of pages. A clearer path from attention to confidence to action." /><div className="mt-7 overflow-hidden rounded-[18px] border border-white/[0.07] bg-white/[0.025]">{conversionJobs.map(([title,copy],index)=><div key={title} className="grid grid-cols-[34px_1fr] gap-3 border-b border-white/[0.07] p-4 last:border-b-0 sm:grid-cols-[50px_150px_1fr] sm:items-center sm:p-5"><span className="text-[9px] font-bold tracking-[0.16em] text-[#77787e]">0{index+1}</span><p className="text-[15px] font-semibold text-[#e1e1e3]">{title}</p><p className="mt-1 text-[13px] leading-6 text-[#85868c] sm:mt-0">{copy}</p></div>)}</div><div className="mt-5 rounded-[16px] border border-[#d92f3c]/18 bg-[#190f11]/50 p-5 sm:p-6"><p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#cfc2ae]">“AI can build a website now.”</p><h3 className="mt-3 text-[23px] font-semibold tracking-[-0.04em] sm:text-[28px]">AI made building pages easier. It did not make earning trust easier.</h3><p className="mt-3 text-[13px] leading-6 text-[#948a8d]">The harder problem is deciding what the page must communicate, which objections it needs to remove, what proof belongs where and what should happen next.</p></div></div></section>

      <section className="border-b border-white/[0.055] py-11 sm:py-14"><div className="mx-auto grid w-[min(1160px,calc(100%-28px))] gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#d8cbb7]">Why Booth Marketing</p><h2 className="mt-4 text-[clamp(31px,7vw,46px)] font-semibold leading-[1.04] tracking-[-0.045em]">Start with the decision. Then build the website around it.</h2><p className="mt-4 text-[14px] leading-7 text-[#8d8e94]">We do not start by asking what style of website you want. We start by understanding what a serious buyer needs to believe before they act.</p></div><div className="grid gap-2 sm:grid-cols-3">{[['Strategy before design','Understand the buying decision first.'],['Clarity before decoration','Make the offer easy to understand.'],['Conversion before complexity','Every element needs a job.']].map(([title,copy])=><div key={title} className="rounded-[15px] border border-white/[0.07] bg-[#0d0f10] p-4"><p className="text-[13px] font-semibold text-[#e1e1e3]">{title}</p><p className="mt-2 text-[12px] leading-6 text-[#7f8086]">{copy}</p></div>)}</div></div></section>

      <section className="border-b border-white/[0.055] bg-[#0b0d0e] py-11 sm:py-14"><div className="mx-auto grid w-[min(1160px,calc(100%-28px))] gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#d8cbb7]">Website Conversion Audit</p><h2 className="mt-4 text-[clamp(34px,8vw,50px)] font-semibold leading-[1.03] tracking-[-0.05em]">Find out what the current site is making harder than it needs to be.</h2><p className="mt-4 text-[14px] leading-7 text-[#919298]">You leave knowing what is hurting trust, what is unclear, where buyers may hesitate, what should change first and whether the site actually needs rebuilding.</p><Link href="/website-audit" className="mt-6 inline-flex min-h-[50px] items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-5 text-[13px] font-semibold text-[#151515]">Request Website Audit<ArrowRight className="ml-2.5 h-4 w-4" /></Link></div><div className="grid gap-3">{[['Keep it','The current site is fundamentally sound. We identify the smaller improvements worth making.'],['Improve it','The foundations are usable, but messaging, pages, proof or mobile UX need targeted work.'],['Rebuild it','The structure itself is holding the buying journey back and a rebuild is justified.']].map(([title,copy],index)=><div key={title} className={`rounded-[16px] border p-4 ${index===1?'border-[#d92f3c]/18 bg-[#190f11]/42':'border-white/[0.07] bg-[#0d0f10]'}`}><div className="flex items-start gap-3"><span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/[0.08] text-[9px] font-bold text-[#cfc2ae]">0{index+1}</span><div><p className="text-[14px] font-semibold text-[#e0e0e2]">{title}</p><p className="mt-1 text-[12px] leading-6 text-[#7f8086]">{copy}</p></div></div></div>)}</div></div></section>

      <section className="border-b border-white/[0.055] py-10 text-center sm:py-12"><div className="mx-auto w-[min(780px,calc(100%-28px))]"><p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#d8cbb7]">More than the front end</p><h2 className="mt-4 text-[clamp(30px,7vw,44px)] font-semibold tracking-[-0.045em]">Once the customer arrives, the operation still has to handle what happens next.</h2><p className="mt-4 text-[14px] leading-7 text-[#898a90]">Booth Marketing also designs AI automation and workflow systems for established businesses that want to reduce repetitive handling behind the website.</p><Link href="/automation" className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#d8cbb7] hover:text-white">Explore Automation<ArrowRight className="h-4 w-4" /></Link></div></section>

      <SiteFooter />
    </main>
  )
}

function JourneyCard({ label, nodes, accent = false }: { label: string; nodes: string[]; accent?: boolean }) {
  return <div className={`rounded-[18px] border p-5 ${accent?'border-[#d92f3c]/18 bg-[#190f11]/42':'border-white/[0.07] bg-[#0d0f10]'}`}><p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#cfc2ae]">{label}</p><div className="mt-4 flex flex-wrap items-center gap-2">{nodes.map((node,index)=><div key={node} className="flex items-center gap-2"><span className="rounded-lg border border-white/[0.075] bg-[#090a0b] px-3 py-2 text-[11px] text-[#aaaab0]">{node}</span>{index<nodes.length-1&&<ChevronRight className="h-3.5 w-3.5 text-[#66676d]" />}</div>)}</div></div>
}
