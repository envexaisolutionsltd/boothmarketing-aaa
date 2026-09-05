import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import SiteFooter from '../../components/SiteFooter'
import SiteHeader from '../../components/SiteHeader'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#090a0b] text-[#f4f4f3]">
      <SiteHeader />
      <section className="border-b border-white/[0.055] py-12 sm:py-16">
        <div className="mx-auto w-[min(960px,calc(100%-28px))]">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#d8cbb7]">About Booth Marketing</p>
          <h1 className="mt-4 max-w-[820px] text-[clamp(40px,9vw,62px)] font-semibold leading-[1.01] tracking-[-0.055em]">Technology should make a business easier to choose and easier to run.</h1>
          <p className="mt-5 max-w-[730px] text-[15px] leading-7 text-[#929399]">Booth Marketing works with established businesses on two connected problems: how customers understand and choose the business, and how the operation handles what happens next.</p>
        </div>
      </section>

      <section className="border-b border-white/[0.055] bg-[#0b0d0e] py-10 sm:py-14">
        <div className="mx-auto grid w-[min(960px,calc(100%-28px))] gap-5 lg:grid-cols-2">
          <div className="rounded-[18px] border border-white/[0.07] bg-[#0d0f10] p-5 sm:p-6"><p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#cfc2ae]">Front end</p><h2 className="mt-3 text-[27px] font-semibold tracking-[-0.04em]">Conversion-focused websites</h2><p className="mt-3 text-[13px] leading-6 text-[#83848a]">Clear positioning, focused page journeys, stronger trust and mobile-first experiences designed around the decision a buyer needs to make.</p><Link href="/websites" className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold text-[#d8cbb7]">Explore Websites<ArrowRight className="h-3.5 w-3.5" /></Link></div>
          <div className="rounded-[18px] border border-[#d92f3c]/18 bg-[#190f11]/42 p-5 sm:p-6"><p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#cfc2ae]">Behind the scenes</p><h2 className="mt-3 text-[27px] font-semibold tracking-[-0.04em]">AI & workflow automation</h2><p className="mt-3 text-[13px] leading-6 text-[#91888b]">Reduce repetitive handling around the work where people still need to make the important decisions.</p><Link href="/automation" className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold text-[#d8cbb7]">Explore Automation<ArrowRight className="h-3.5 w-3.5" /></Link></div>
        </div>
      </section>

      <section className="border-b border-white/[0.055] py-10 sm:py-14">
        <div className="mx-auto w-[min(960px,calc(100%-28px))]">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#d8cbb7]">How we think</p>
          <h2 className="mt-4 max-w-[720px] text-[clamp(31px,7vw,46px)] font-semibold leading-[1.05] tracking-[-0.045em]">No technology for technology's sake.</h2>
          <div className="mt-7 grid gap-3 md:grid-cols-3">{[['Understand first','Start with the business, buyer and workflow before recommending technology.'],['Keep what works','Do not replace useful systems, pages or processes without a reason.'],['Make the next step obvious','Whether it is a website or workflow, reduce unnecessary effort between intent and action.']].map(([title,copy])=><div key={title} className="rounded-[16px] border border-white/[0.07] bg-[#0d0f10] p-5"><Check className="h-4 w-4 text-[#d8cbb7]"/><p className="mt-3 text-[14px] font-semibold text-[#e1e1e3]">{title}</p><p className="mt-2 text-[12px] leading-6 text-[#7f8086]">{copy}</p></div>)}</div>
        </div>
      </section>

      <section className="py-12 text-center sm:py-16"><div className="mx-auto w-[min(720px,calc(100%-28px))]"><h2 className="text-[clamp(32px,7vw,48px)] font-semibold leading-[1.04] tracking-[-0.048em]">Start with the current website, not a redesign brief.</h2><p className="mt-4 text-[14px] leading-7 text-[#8d8e94]">The Website Conversion Audit shows what is helping the buying decision, what is hurting it and whether a rebuild is actually justified.</p><Link href="/website-audit" className="mt-6 inline-flex min-h-[50px] items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-5 text-[13px] font-semibold text-[#151515]">Request Website Audit<ArrowRight className="ml-2.5 h-4 w-4" /></Link></div></section>
      <SiteFooter />
    </main>
  )
}
