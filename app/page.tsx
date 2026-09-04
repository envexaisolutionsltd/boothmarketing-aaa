'use client'

import { ArrowRight, Check, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { FormEvent, useEffect, useRef, useState } from 'react'

const CTA = 'Request a Website Conversion Audit'

const friction = [
  ['The offer takes too long to understand', 'If the visitor has to work out who you help, what you do or why it matters, attention is already being spent.'],
  ['The site looks credible, but interchangeable', 'A polished site still loses when the buyer cannot see a reason to choose you over the next business.'],
  ['One homepage is trying to sell everything', 'Different offers and audiences arrive with different questions. One generic path rarely answers all of them well.'],
  ['Mobile feels like a smaller desktop site', 'High-intent visitors arriving from AI, social, referrals and campaigns should not have to fight the interface to trust you.'],
]

const conversionJobs = [
  ['Explain', 'Make the offer obvious without forcing the buyer to hunt.'],
  ['Position', 'Show why the business deserves consideration over alternatives.'],
  ['Prove', 'Remove the reasons a serious buyer has to doubt you.'],
  ['Direct', 'Make the next useful action obvious at every decision point.'],
  ['Convert', 'Turn decision-ready attention into an enquiry, booking or purchase.'],
]

const auditFocus = [
  'First-impression trust',
  'Offer clarity and positioning',
  'Mobile experience',
  'Calls to action and page flow',
  'Proof and credibility',
  'Speed and conversion friction',
  'Clarity for search and AI systems',
  'What is actually worth changing',
]

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#090a0b]/95 supports-[backdrop-filter]:bg-[#090a0b]/82 supports-[backdrop-filter]:backdrop-blur-xl">
      <div className="mx-auto flex min-h-[64px] w-[min(1160px,calc(100%-24px))] items-center justify-between gap-3">
        <Link href="/" aria-label="Booth Marketing home" className="flex h-[52px] w-[112px] items-center overflow-hidden sm:w-[148px]">
          <img src="/booth-marketing-logo.png" alt="Booth Marketing" className="w-[112px] object-contain sm:w-[148px]" />
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          <Link href="/websites" className="text-[13px] font-medium text-[#8d8e94] transition hover:text-white">Websites</Link>
          <Link href="/how-it-works" className="text-[13px] font-medium text-[#8d8e94] transition hover:text-white">How It Works</Link>
          <Link href="/automation" className="text-[13px] font-medium text-[#8d8e94] transition hover:text-white">Automation</Link>
          <Link href="/website-audit" className="text-[13px] font-medium text-[#8d8e94] transition hover:text-white">Audit</Link>
        </nav>
        <a href="#audit" className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-4 text-[12px] font-semibold text-[#151515] transition hover:bg-[#f8edda] sm:text-[13px]">
          <span className="sm:hidden">Request Audit</span><span className="hidden sm:inline">Website Audit</span><ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </header>
  )
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="max-w-[820px]">
      <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#d8cbb7]">{eyebrow}</p>
      <h2 className="mt-4 text-[clamp(32px,7.8vw,50px)] font-semibold leading-[1.04] tracking-[-0.048em]">{title}</h2>
      {copy && <p className="mt-4 max-w-[730px] text-[15px] leading-7 text-[#94959b] sm:text-[16px]">{copy}</p>}
    </div>
  )
}

export default function Page() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showSticky, setShowSticky] = useState(false)
  const heroCtaRef = useRef<HTMLDivElement>(null)
  const auditRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const updateSticky = () => {
      if (!heroCtaRef.current || !auditRef.current) return
      const heroBottom = heroCtaRef.current.getBoundingClientRect().bottom
      const auditTop = auditRef.current.getBoundingClientRect().top
      setShowSticky(heroBottom < 0 && auditTop > window.innerHeight * 0.72)
    }
    updateSticky()
    window.addEventListener('scroll', updateSticky, { passive: true })
    window.addEventListener('resize', updateSticky)
    return () => {
      window.removeEventListener('scroll', updateSticky)
      window.removeEventListener('resize', updateSticky)
    }
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const nextErrors: Record<string, string> = {}
    for (const field of ['name', 'email', 'company', 'website']) {
      if (!String(form.get(field) || '').trim()) nextErrors[field] = 'Required'
    }
    const email = String(form.get('email') || '')
    if (email && !/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = 'Enter a valid email'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) setSubmitted(true)
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#090a0b] pb-20 text-[#f4f4f3] selection:bg-[#efe3cf] selection:text-[#151515] md:pb-0">
      <Header />

      {/* Hero */}
      <section className="relative border-b border-white/[0.055]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(217,47,60,0.10),transparent_29%),radial-gradient(circle_at_20%_16%,rgba(239,227,207,0.025),transparent_32%)]" />
        <div className="relative mx-auto grid w-[min(1160px,calc(100%-28px))] gap-7 py-9 sm:py-11 lg:min-h-[540px] lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-14">
          <div>
            <div className="inline-flex min-h-8 items-center gap-2.5 rounded-full border border-white/[0.08] bg-[#0d0f10] px-3.5 text-[8.5px] font-extrabold uppercase tracking-[0.22em] text-[#d8cbb7] sm:text-[9.5px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d92f3c] shadow-[0_0_14px_rgba(217,47,60,0.7)]" />
              Conversion Infrastructure for Established Businesses
            </div>
            <h1 className="mt-5 max-w-[760px] text-[clamp(39px,10.2vw,64px)] font-semibold leading-[0.99] tracking-[-0.058em]">
              AI changed how your customers search. <span className="text-[#c8c8cc]">Your website now has seconds to earn the decision.</span>
            </h1>
            <p className="mt-5 max-w-[690px] text-[16px] leading-[1.62] text-[#a7a8ad]">People increasingly ask AI first, shortlist faster and arrive on fewer websites with higher intent. If yours is slow, vague, generic or difficult to trust, they leave just as quickly.</p>
            <p className="mt-3 max-w-[670px] text-[14px] leading-6 text-[#808187]">Booth Marketing builds websites designed for speed of decision, trust and action.</p>
            <div ref={heroCtaRef} className="mt-6"><a href="#audit" className="inline-flex min-h-[50px] items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-6 text-sm font-semibold text-[#151515] transition hover:bg-[#f8edda]">{CTA}<ArrowRight className="ml-2.5 h-4 w-4" /></a></div>
            <p className="mt-3 max-w-[620px] text-[12px] leading-5 text-[#73747a]">No redesign commitment. We start by showing you where the current site is helping or hurting the decision.</p>
          </div>

          <div className="relative overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#0d0f10] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.28)] sm:p-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_86%_8%,rgba(217,47,60,0.14),transparent_36%)]" />
            <div className="relative flex items-center justify-between border-b border-white/[0.07] pb-3"><span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#a8a9ae]">Current buying path</span><span className="text-[8px] uppercase tracking-[0.18em] text-[#77787e]">Decision-ready traffic</span></div>
            <div className="relative mt-4 grid grid-cols-5 gap-1.5 sm:gap-2">
              {['Ask AI', 'Shortlist', 'Website', 'Trust', 'Action'].map((label, index) => <div key={label} className={`flex min-h-[58px] items-center justify-center rounded-lg border px-1 text-center text-[9px] font-semibold leading-4 sm:min-h-[70px] sm:px-2 sm:text-[11px] ${index === 2 ? 'border-[#d92f3c]/34 bg-[#190f11] text-[#ead9dc]' : 'border-white/[0.07] bg-[#0b0d0e] text-[#9d9ea4]'}`}>{label}</div>)}
            </div>
            <div className="relative mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-white/[0.065] bg-[#0b0d0e]/72 p-3"><p className="text-[9px] uppercase tracking-[0.16em] text-[#6f7076]">Trust earned</p><p className="mt-1 text-[12px] font-semibold text-[#d9d9dc]">Enquiry / booking</p></div>
              <div className="rounded-lg border border-[#d92f3c]/16 bg-[#190f11]/52 p-3"><p className="text-[9px] uppercase tracking-[0.16em] text-[#8d666a]">Confusion</p><p className="mt-1 text-[12px] font-semibold text-[#c7aeb1]">Back button</p></div>
            </div>
            <p className="relative mt-3 text-[11px] leading-5 text-[#77787e]">AI can help someone find you. Your website still has to make them trust you.</p>
          </div>
        </div>
      </section>

      {/* Friction */}
      <section className="border-b border-white/[0.055] bg-[#0b0d0e] py-11 sm:py-14">
        <div className="mx-auto w-[min(1160px,calc(100%-28px))]">
          <SectionHeading eyebrow="Commercially ready?" title="Your website may still work technically while failing commercially." copy="The problem is no longer simply having a website. It is whether the website helps someone make the decision." />
          <div className="mt-7 grid border-t border-white/[0.07] md:grid-cols-2">
            {friction.map(([title, copy], index) => <article key={title} className={`grid grid-cols-[34px_1fr] gap-3 border-b border-white/[0.07] py-4 md:min-h-[124px] md:px-5 ${index % 2 === 0 ? 'md:border-r' : ''}`}><span className="pt-1 text-[8.5px] font-bold tracking-[0.16em] text-[#77787e]">0{index + 1}</span><div><h3 className="text-[15px] font-semibold leading-6 text-[#e3e3e5]">{title}</h3><p className="mt-1.5 text-[13px] leading-6 text-[#7f8086]">{copy}</p></div></article>)}
          </div>
          <div className="mt-6 rounded-[16px] border border-[#d92f3c]/18 bg-[#190f11]/48 p-5"><p className="text-[15px] font-semibold text-[#e1dcde]">Your website does not need to look broken to be losing business.</p><p className="mt-2 text-[13px] leading-6 text-[#91888b]">It can load, rank and contain the right information while still making the buyer work too hard to understand why they should choose you.</p></div>
        </div>
      </section>

      {/* Awareness cycle */}
      <section className="border-b border-white/[0.055] py-11 sm:py-14">
        <div className="mx-auto w-[min(1160px,calc(100%-28px))]">
          <SectionHeading eyebrow="The buying environment changed" title="Discovery is getting shorter. The decision still has to happen somewhere." />
          <div className="mt-7 grid gap-4 lg:grid-cols-2">
            <JourneyCard label="Before" nodes={['Google', 'Browse websites', 'Read reviews', 'Compare', 'Contact']} />
            <JourneyCard label="Now" nodes={['Ask AI', 'Shortlist', 'Visit 1–2 sites', 'Decide']} accent />
          </div>
          <p className="mt-5 rounded-[15px] border border-white/[0.07] bg-[#0d0f10] p-5 text-[14px] font-semibold leading-6 text-[#dddde0]">AI can help someone find you. Your website still has to make them trust you.</p>
        </div>
      </section>

      {/* Conversion jobs */}
      <section className="border-b border-white/[0.055] bg-[#0b0d0e] py-11 sm:py-14">
        <div className="mx-auto w-[min(1160px,calc(100%-28px))]">
          <SectionHeading eyebrow="Conversion infrastructure" title="A modern business website has five jobs." copy="Not more animation. Not more pages for the sake of pages. A clearer path from attention to confidence to action." />
          <div className="mt-7 overflow-hidden rounded-[18px] border border-white/[0.07] bg-white/[0.025]">
            {conversionJobs.map(([title, copy], index) => <div key={title} className="grid grid-cols-[34px_1fr] gap-3 border-b border-white/[0.07] p-4 last:border-b-0 sm:grid-cols-[50px_150px_1fr] sm:items-center sm:p-5"><span className="text-[9px] font-bold tracking-[0.16em] text-[#77787e]">0{index + 1}</span><p className="text-[15px] font-semibold text-[#e1e1e3]">{title}</p><p className="mt-1 text-[13px] leading-6 text-[#85868c] sm:mt-0">{copy}</p></div>)}
          </div>
          <div className="mt-5 rounded-[16px] border border-[#d92f3c]/18 bg-[#190f11]/50 p-5 sm:p-6"><p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#cfc2ae]">“AI can build a website now.”</p><h3 className="mt-3 text-[23px] font-semibold tracking-[-0.04em] sm:text-[28px]">AI made building pages easier. It did not make earning trust easier.</h3><p className="mt-3 text-[13px] leading-6 text-[#948a8d]">Templates and AI can generate pages. The harder problem is deciding what the page needs to communicate, which objections it must remove, what proof belongs where and what should happen next.</p></div>
        </div>
      </section>

      {/* Landing page economy */}
      <section className="border-b border-white/[0.055] py-11 sm:py-14">
        <div className="mx-auto grid w-[min(1160px,calc(100%-28px))] gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div><p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#d8cbb7]">Different intent needs different paths</p><h2 className="mt-4 text-[clamp(32px,7.5vw,48px)] font-semibold leading-[1.04] tracking-[-0.048em]">One homepage cannot sell every offer to every audience.</h2><p className="mt-4 text-[15px] leading-7 text-[#94959b]">A referral visitor, paid-campaign visitor, AI-search visitor and prospect considering one specific service do not arrive with the same question.</p><p className="mt-4 text-[13px] leading-6 text-[#7f8086]">That is why conversion infrastructure can include focused service pages, campaign landing pages and offer-specific journeys rather than forcing every buyer through the same generic homepage.</p></div>
          <div className="rounded-[18px] border border-white/[0.08] bg-[#0d0f10] p-5"><p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#cfc2ae]">Clear to humans. Clear to answer engines.</p><div className="mt-4 grid gap-2 sm:grid-cols-2">{['Clear services', 'Clear expertise', 'Clear proof', 'Clear next action'].map(item => <div key={item} className="flex items-center gap-2.5 rounded-lg border border-white/[0.065] bg-[#0b0d0e] p-3 text-[12px] text-[#a6a7ac]"><Check className="h-3.5 w-3.5 text-[#d8cbb7]" />{item}</div>)}</div><p className="mt-4 text-[12px] leading-6 text-[#7f8086]">The site should be easy to interpret whether the visitor arrives from search, AI, referral, social or an advert.</p></div>
        </div>
      </section>

      {/* Audit */}
      <section id="audit" ref={auditRef} className="scroll-mt-20 border-b border-white/[0.055] bg-[#0b0d0e] py-11 sm:py-14">
        <div className="mx-auto w-[min(1160px,calc(100%-28px))]">
          <div className="relative overflow-hidden rounded-[22px] border border-white/[0.09] bg-[#0d0f10] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.32)] sm:p-7 lg:p-9">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(217,47,60,0.15),transparent_30%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#d8cbb7]">Website Conversion Audit</p>
                <h2 className="mt-4 text-[clamp(34px,8.2vw,52px)] font-semibold leading-[1.03] tracking-[-0.05em]">Find out what your website is making harder than it needs to be.</h2>
                <p className="mt-4 text-[14px] leading-7 text-[#919298]">We assess how quickly the site earns trust, explains the offer and moves a serious buyer toward action. You leave knowing what should change, what should stay and which improvements are actually worth making.</p>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">{auditFocus.map(item => <div key={item} className="flex items-start gap-2.5 rounded-lg border border-white/[0.065] bg-[#0b0d0e]/75 px-3.5 py-3 text-[12px] text-[#a6a7ac]"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d8cbb7]" />{item}</div>)}</div>
                <p className="mt-5 text-[12px] leading-6 text-[#7f8086]">No redesign commitment. If the current site should stay, we will tell you.</p>
                <Link href="/website-audit" className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold text-[#d8cbb7] hover:text-white">See what the Audit covers<ArrowRight className="h-3.5 w-3.5" /></Link>
              </div>

              <div className="rounded-[17px] border border-white/[0.075] bg-[#0b0d0e]/72 p-4 sm:p-5">
                {submitted ? <div className="py-9 text-center"><div className="mx-auto grid h-11 w-11 place-items-center rounded-full border border-[#d92f3c]/24 bg-[#190f11]"><Check className="h-4 w-4 text-[#efe3cf]" /></div><h3 className="mt-4 text-[22px] font-semibold">Your audit details are ready.</h3><p className="mx-auto mt-2 max-w-md text-[13px] leading-6 text-[#898a90]">This prototype has not transmitted or stored the form. Once the lead-capture backend is connected, this is where the real submission flow will continue.</p></div> : <form onSubmit={handleSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
                  <FormField label="Full Name" name="name" error={errors.name} />
                  <FormField label="Business Email" name="email" type="email" error={errors.email} />
                  <FormField label="Company" name="company" error={errors.company} />
                  <FormField label="Current Website URL" name="website" type="url" placeholder="https://" error={errors.website} />
                  <SelectField label="What would you most like the website to improve?" name="priority" options={['More enquiries', 'Better credibility', 'Clearer positioning', 'Better mobile experience', 'New offer / landing page', 'Complete redesign', 'Not sure']} optional />
                  <div className="sm:col-span-2"><label htmlFor="notes" className="mb-2 block text-[13px] font-medium text-[#d8d8da]">Anything you already dislike about the current website? <span className="text-[#77787e]">Optional</span></label><textarea id="notes" name="notes" rows={3} placeholder="Tell us what feels slow, vague, dated or difficult to use." className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#090a0b] px-4 py-3 text-[16px] text-white outline-none placeholder:text-[#66676d] focus:border-[#d8cbb7]/45" /></div>
                  <div className="sm:col-span-2"><button type="submit" className="flex min-h-[50px] w-full items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-5 text-[13px] font-semibold text-[#151515] transition hover:bg-[#f8edda]">Request My Website Audit<ArrowRight className="ml-2.5 h-4 w-4" /></button><p className="mt-2.5 text-center text-[10.5px] leading-5 text-[#707177]">Frontend prototype only. Nothing is transmitted or stored when you submit this form.</p></div>
                </form>}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.055] py-10 text-center sm:py-12"><div className="mx-auto w-[min(780px,calc(100%-28px))]"><p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#d8cbb7]">More than the front end</p><h2 className="mt-4 text-[clamp(30px,7vw,44px)] font-semibold tracking-[-0.045em]">Once the customer arrives, the operation still has to handle what happens next.</h2><p className="mt-4 text-[14px] leading-7 text-[#898a90]">Booth Marketing also designs AI automation and workflow systems for established businesses that want to reduce repetitive handling behind the website.</p><Link href="/automation" className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#d8cbb7] hover:text-white">Explore Automation<ArrowRight className="h-4 w-4" /></Link></div></section>

      <footer className="bg-[#090a0b]"><div className="mx-auto flex w-[min(1160px,calc(100%-28px))] flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between"><div><img src="/booth-marketing-logo.png" alt="Booth Marketing" className="w-[138px] object-contain" /><p className="mt-1.5 max-w-md text-[11px] leading-5 text-[#707177]">Conversion infrastructure and automation systems built around established businesses.</p></div><p className="text-[10.5px] text-[#66676d]">© {new Date().getFullYear()} Booth Marketing. All rights reserved.</p></div></footer>

      <div aria-hidden={!showSticky} className={`pointer-events-none fixed inset-x-0 bottom-0 z-50 border-t border-white/[0.08] bg-[#090a0b]/96 p-2.5 pb-[calc(10px+env(safe-area-inset-bottom))] transition duration-200 md:hidden ${showSticky ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}><a href="#audit" tabIndex={showSticky ? 0 : -1} className="pointer-events-auto mx-auto flex min-h-[50px] w-full max-w-md items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-5 text-[13px] font-semibold text-[#151515]">Website Conversion Audit<ArrowRight className="ml-2.5 h-4 w-4" /></a></div>
    </main>
  )
}

function JourneyCard({ label, nodes, accent = false }: { label: string; nodes: string[]; accent?: boolean }) {
  return <div className={`rounded-[18px] border p-5 ${accent ? 'border-[#d92f3c]/18 bg-[#190f11]/42' : 'border-white/[0.07] bg-[#0d0f10]'}`}><p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#cfc2ae]">{label}</p><div className="mt-4 flex flex-wrap items-center gap-2">{nodes.map((node, index) => <div key={node} className="flex items-center gap-2"><span className="rounded-lg border border-white/[0.075] bg-[#090a0b] px-3 py-2 text-[11px] text-[#aaaab0]">{node}</span>{index < nodes.length - 1 && <ChevronRight className="h-3.5 w-3.5 text-[#66676d]" />}</div>)}</div></div>
}

function FormField({ label, name, type = 'text', placeholder, error }: { label: string; name: string; type?: string; placeholder?: string; error?: string }) {
  return <div><label htmlFor={name} className="mb-2 block text-[13px] font-medium text-[#d8d8da]">{label}</label><input id={name} name={name} type={type} placeholder={placeholder} className="w-full rounded-lg border border-white/[0.1] bg-[#090a0b] px-4 py-3 text-[16px] text-white outline-none placeholder:text-[#66676d] focus:border-[#d8cbb7]/45" />{error && <p className="mt-1.5 text-[11px] text-[#d1a3a8]">{error}</p>}</div>
}

function SelectField({ label, name, options, optional = false }: { label: string; name: string; options: string[]; optional?: boolean }) {
  return <div className="sm:col-span-2"><label htmlFor={name} className="mb-2 block text-[13px] font-medium text-[#d8d8da]">{label} {optional && <span className="text-[#77787e]">Optional</span>}</label><select id={name} name={name} defaultValue="" className="w-full rounded-lg border border-white/[0.1] bg-[#090a0b] px-4 py-3 text-[16px] text-white outline-none focus:border-[#d8cbb7]/45"><option value="" disabled>Select an option</option>{options.map(option => <option key={option} value={option}>{option}</option>)}</select></div>
}
