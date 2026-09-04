'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Check, ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { FormEvent, ReactNode, useEffect, useMemo, useRef, useState } from 'react'

const CTA = 'Request an Automation Audit'
const CALENDAR_URL = 'https://cal.com/your-agency/audit'

const symptoms = [
  ['The same information gets entered more than once', 'People copy details between forms, inboxes and systems because the workflow does not carry the context forward.'],
  ['Someone has to chase the next step', 'Work keeps moving because a good employee remembers to ask, check or follow up.'],
  ['Reporting has to be assembled manually', 'The information exists, but somebody has to rebuild the picture before management can use it.'],
  ['One person seems to know how everything really works', 'When they are away, the process slows down because part of the operating system lives in their head.'],
]

const fitItems = [
  ['System-led', 'Predictable, repeatable handling.', 'Moving information, routine reminders, recurring documents and status updates.'],
  ['Human approval', 'The system prepares. A person decides.', 'Approvals, recommendations, sensitive actions and exceptions where review still matters.'],
  ['Human-led', 'Judgment, relationships and exceptions stay with people.', 'Negotiation, commercial decisions, unusual situations and relationship-heavy work.'],
]

const processOptions = [
  'Lead handling',
  'Client onboarding',
  'Reporting',
  'Internal admin',
  'Documents',
  'Approvals',
  'Customer updates',
  'Internal handoffs',
  'Not sure',
]

function FadeIn({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function PrimaryLink({ href, children, compact = false, className = '' }: { href: string; children: ReactNode; compact?: boolean; className?: string }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] font-semibold text-[#151515] transition duration-200 hover:-translate-y-px hover:bg-[#f8edda] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#efe3cf]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0b] ${compact ? 'min-h-11 px-4 text-[13px]' : 'min-h-[50px] px-6 text-sm'} ${className}`}
    >
      {children}
      <ArrowRight className="ml-2.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  )
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="max-w-[790px]">
      <p className="text-[10px] font-extrabold uppercase tracking-[0.26em] text-[#d8cbb7]">{eyebrow}</p>
      <h2 className="mt-4 text-[clamp(33px,7.8vw,50px)] font-semibold leading-[1.04] tracking-[-0.048em] text-[#f4f4f3]">{title}</h2>
      {copy && <p className="mt-4 max-w-[720px] text-[15px] leading-7 text-[#94959b] sm:text-[16px]">{copy}</p>}
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#090a0b]/80 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[64px] w-[min(1160px,calc(100%-24px))] items-center justify-between gap-3">
        <Link href="/" aria-label="Booth Marketing home" className="flex h-[52px] w-[112px] items-center overflow-hidden sm:w-[148px]">
          <img src="/booth-marketing-logo.png" alt="Booth Marketing" className="w-[112px] object-contain sm:w-[148px]" />
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          <Link href="/how-it-works" className="text-[13px] font-medium text-[#8d8e94] transition hover:text-white">How It Works</Link>
          <Link href="/calculator" className="text-[13px] font-medium text-[#8d8e94] transition hover:text-white">Calculator</Link>
          <Link href="/automation-audit" className="text-[13px] font-medium text-[#8d8e94] transition hover:text-white">The Audit</Link>
        </nav>
        <PrimaryLink href="#audit-form" compact className="shrink-0"><span className="sm:hidden">Request Audit</span><span className="hidden sm:inline">{CTA}</span></PrimaryLink>
      </div>
    </header>
  )
}

export default function Page() {
  const [teamMembers, setTeamMembers] = useState(5)
  const [hoursPerWeek, setHoursPerWeek] = useState(4)
  const [hourlyCost, setHourlyCost] = useState(24)
  const [openFit, setOpenFit] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showSticky, setShowSticky] = useState(false)
  const heroCtaRef = useRef<HTMLDivElement>(null)
  const auditRef = useRef<HTMLElement>(null)

  const annualHours = teamMembers * hoursPerWeek * 48
  const annualCapacity = annualHours * hourlyCost
  const currency = (value: number) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(value)

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
    for (const field of ['name', 'email', 'company', 'teamSize']) {
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(217,47,60,0.09),transparent_28%),radial-gradient(circle_at_22%_12%,rgba(239,227,207,0.025),transparent_30%)]" />
        <div className="relative mx-auto grid w-[min(1160px,calc(100%-28px))] gap-7 py-9 sm:py-11 lg:min-h-[520px] lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-14">
          <FadeIn>
            <div className="inline-flex min-h-8 items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 text-[8.5px] font-extrabold uppercase tracking-[0.22em] text-[#d8cbb7] backdrop-blur-md sm:text-[9.5px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d92f3c] shadow-[0_0_14px_rgba(217,47,60,0.7)]" />
              For established businesses with real operations
            </div>
            <h1 className="mt-5 max-w-[720px] text-[clamp(39px,10.4vw,64px)] font-semibold leading-[0.99] tracking-[-0.058em]">
              Your business has grown. <span className="text-[#c8c8cc]">Your processes may not have grown with it.</span>
            </h1>
            <p className="mt-5 max-w-[670px] text-[16px] leading-[1.62] text-[#a7a8ad]">
              If your team still spends time copying information, chasing updates, rebuilding reports and remembering what happens next, there may be a better way to run it.
            </p>
            <p className="mt-3 max-w-[670px] text-[14px] leading-6 text-[#808187]">Booth Marketing helps you identify what should be automated, what should stay human and whether changing it is actually worthwhile.</p>
            <div ref={heroCtaRef} className="mt-6"><PrimaryLink href="#audit-form">{CTA}</PrimaryLink></div>
            <p className="mt-3 text-[12px] leading-5 text-[#73747a]">No technical brief needed. Start with one process that feels harder to run than it should.</p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="relative overflow-hidden rounded-[18px] border border-white/[0.08] bg-white/[0.035] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-5">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(217,47,60,0.13),transparent_35%)]" />
              <div className="relative flex items-center justify-between border-b border-white/[0.07] pb-3">
                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#a8a9ae]">Operational flow</span>
                <span className="text-[8px] uppercase tracking-[0.18em] text-[#77787e]">Human control preserved</span>
              </div>
              <div className="relative mt-4 flex items-stretch gap-1.5 sm:gap-2">
                {['Enquiry', 'System', 'Human decision', 'Action'].map((label, index) => (
                  <div key={label} className="flex min-w-0 flex-1 items-center gap-1.5 sm:gap-2">
                    <div className={`flex min-h-[54px] min-w-0 flex-1 items-center justify-center rounded-lg border px-1.5 text-center text-[9px] font-semibold leading-4 sm:min-h-[64px] sm:px-3 sm:text-[11px] ${index === 2 ? 'border-[#d92f3c]/32 bg-[#190f11]/85 text-[#ead9dc]' : 'border-white/[0.07] bg-[#0b0d0e]/80 text-[#9d9ea4]'}`}>{label}</div>
                    {index < 3 && <ChevronRight className="h-3 w-3 shrink-0 text-[#5f6066]" />}
                  </div>
                ))}
              </div>
              <p className="relative mt-3 text-[11px] leading-5 text-[#73747a]">People handle judgment. Systems handle more of the predictable work around it.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Recognition + fit */}
      <section className="border-b border-white/[0.055] bg-[#0b0d0e] py-11 sm:py-14">
        <div className="mx-auto w-[min(1160px,calc(100%-28px))]">
          <FadeIn><SectionHeading eyebrow="Recognise the friction" title="If this feels normal inside your business, the process may be doing too much manually." copy="You are probably not looking for AI. You are looking for a business that needs less manual intervention to operate." /></FadeIn>

          <div className="mt-7 grid border-t border-white/[0.07] md:grid-cols-2">
            {symptoms.map(([title, copy], index) => (
              <FadeIn key={title} delay={(index % 2) * 0.03}>
                <article className={`grid grid-cols-[34px_1fr] gap-3 border-b border-white/[0.07] py-4 md:min-h-[124px] md:px-5 ${index % 2 === 0 ? 'md:border-r' : ''}`}>
                  <span className="pt-1 text-[8.5px] font-bold tracking-[0.16em] text-[#77787e]">0{index + 1}</span>
                  <div><h3 className="text-[15px] font-semibold leading-6 text-[#e3e3e5]">{title}</h3><p className="mt-1.5 text-[13px] leading-6 text-[#7f8086]">{copy}</p></div>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-7 rounded-[18px] border border-[#d92f3c]/18 bg-[#190f11]/52 p-5 sm:p-6">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#cfc2ae]">“Our business is too bespoke for automation.”</p>
              <h3 className="mt-3 text-[24px] font-semibold tracking-[-0.04em] sm:text-[30px]">The decisions may be bespoke. The repetitive handling around those decisions often is not.</h3>

              <div className="mt-5 md:hidden">
                {fitItems.map(([label, summary, detail], index) => {
                  const open = openFit === index
                  return (
                    <div key={label} className="border-t border-white/[0.07] first:border-t-0">
                      <button type="button" onClick={() => setOpenFit(open ? -1 : index)} className="flex min-h-[52px] w-full items-center justify-between gap-3 py-3 text-left" aria-expanded={open}>
                        <div><p className="text-[13px] font-semibold text-[#e1e1e3]">{label}</p><p className="mt-0.5 text-[12px] text-[#929399]">{summary}</p></div>
                        <ChevronDown className={`h-4 w-4 shrink-0 text-[#77787e] transition-transform ${open ? 'rotate-180' : ''}`} />
                      </button>
                      {open && <p className="pb-4 text-[12px] leading-6 text-[#77787e]">{detail}</p>}
                    </div>
                  )
                })}
              </div>

              <div className="mt-5 hidden gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.06] md:grid md:grid-cols-3">
                {fitItems.map(([label, summary, detail], index) => (
                  <div key={label} className={`p-5 ${index === 1 ? 'bg-[#190f11]' : 'bg-[#0d0f10]'}`}><p className="text-[12px] font-semibold text-[#e1e1e3]">{label}</p><p className="mt-2 text-[13px] text-[#a2a3a8]">{summary}</p><p className="mt-2 text-[12px] leading-6 text-[#717278]">{detail}</p></div>
                ))}
              </div>
              <p className="mt-5 text-[15px] font-semibold leading-6 text-[#e0dcdd]">Do not automate the judgment. Remove unnecessary handling around it.</p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-5 rounded-[15px] border border-white/[0.07] bg-white/[0.025] p-5">
              <p className="text-[15px] font-semibold text-[#e1e1e3]">Keep what already works.</p>
              <p className="mt-2 text-[13px] leading-6 text-[#85868c]">We start with your current workflow and existing systems before recommending anything new.</p>
              <div className="mt-4 flex flex-wrap gap-2">{['Keep useful systems', 'Reduce unnecessary employee actions', 'Avoid unnecessary new dashboards'].map(item => <span key={item} className="rounded-full border border-white/[0.07] bg-[#0b0d0e] px-3 py-2 text-[11px] text-[#97989e]">{item}</span>)}</div>
              <Link href="/how-it-works" className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold text-[#d8cbb7] hover:text-white">See how the full process works<ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Capacity snapshot */}
      <section className="border-b border-white/[0.055] py-11 sm:py-14">
        <div className="mx-auto w-[min(1160px,calc(100%-28px))]">
          <FadeIn><SectionHeading eyebrow="Operational Capacity Snapshot" title="See what repetitive work may already be costing the business." copy="Use three simple inputs for a quick estimate. The full calculator lets you model working weeks and different reduction scenarios." /></FadeIn>

          <FadeIn delay={0.05}>
            <div className="relative mt-7 overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.035] shadow-[0_22px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_15%,rgba(217,47,60,0.11),transparent_30%)]" />
              <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="border-b border-white/[0.07] p-5 sm:p-6 lg:border-b-0 lg:border-r">
                  <div className="space-y-5">
                    <RangeInput label="People involved" value={teamMembers} min={1} max={30} suffix="people" onChange={setTeamMembers} />
                    <RangeInput label="Repetitive hours each week per person" value={hoursPerWeek} min={1} max={20} suffix="hrs" onChange={setHoursPerWeek} />
                    <RangeInput label="Average hourly staff cost" value={hourlyCost} min={10} max={80} prefix="£" suffix="/ hr" onChange={setHourlyCost} />
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-[11px] leading-5 text-[#898a90]">Estimated annual staff capacity tied to repetitive work</p>
                  <motion.p key={annualCapacity} initial={{ opacity: 0.7, y: 3 }} animate={{ opacity: 1, y: 0 }} className="mt-3 text-[clamp(42px,11vw,66px)] font-semibold leading-none tracking-[-0.06em] text-[#efe3cf]">{currency(annualCapacity)}</motion.p>
                  <p className="mt-3 text-[13px] text-[#85868c]">{annualHours.toLocaleString('en-GB')} working hours across 48 weeks</p>
                  <div className="mt-5 rounded-xl border border-white/[0.07] bg-[#0b0d0e]/72 p-4"><p className="text-[12px] font-semibold text-[#d9d9dc]">This is not guaranteed savings.</p><p className="mt-1.5 text-[12px] leading-6 text-[#7f8086]">It is an estimate of the staff capacity currently being consumed by the process.</p></div>
                  <Link href="/calculator" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-4 text-[13px] font-semibold text-[#151515] transition hover:bg-[#f8edda]">Explore the Full Calculator<ArrowRight className="ml-2.5 h-4 w-4" /></Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How Booth works */}
      <section className="border-b border-white/[0.055] bg-[#0b0d0e] py-11 sm:py-14">
        <div className="mx-auto w-[min(1160px,calc(100%-28px))]">
          <FadeIn><SectionHeading eyebrow="How Booth Marketing works" title="Understand the operation before touching the technology." /></FadeIn>
          <div className="mt-7 overflow-hidden rounded-[17px] border border-white/[0.07] bg-white/[0.025]">
            {[
              ['01', 'Understand', 'See how the workflow actually operates today.'],
              ['02', 'Diagnose', 'Find repetitive handling, delays and broken handoffs.'],
              ['03', 'Design', 'Decide what should change, what should stay human and whether automation is worthwhile.'],
            ].map(([number, title, copy], index) => (
              <FadeIn key={number} delay={index * 0.03}>
                <div className="grid grid-cols-[36px_1fr] gap-3 border-b border-white/[0.07] p-4 last:border-b-0 sm:grid-cols-[52px_170px_1fr] sm:items-center sm:p-5">
                  <span className="text-[9px] font-bold tracking-[0.17em] text-[#77787e]">{number}</span>
                  <div><p className="text-[15px] font-semibold text-[#e0e0e2]">{title}</p><p className="mt-1 text-[13px] leading-6 text-[#808187] sm:hidden">{copy}</p></div>
                  <p className="hidden text-[13px] leading-6 text-[#808187] sm:block">{copy}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-5 rounded-[15px] border border-white/[0.07] bg-[#0d0f10] p-5">
              <p className="text-[9.5px] font-extrabold uppercase tracking-[0.2em] text-[#cfc2ae]">Example workflow we can assess</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">{['Enquiry', 'Qualification', 'Assignment', 'Follow-up', 'Reporting'].map((step, index, all) => <div key={step} className="flex items-center gap-2"><span className="rounded-md border border-white/[0.075] bg-white/[0.025] px-2.5 py-1.5 text-[11px] text-[#aaaab0]">{step}</span>{index < all.length - 1 && <ChevronRight className="h-3 w-3 text-[#5f6066]" />}</div>)}</div>
              <p className="mt-4 text-[12px] leading-6 text-[#7f8086]"><span className="font-semibold text-[#d7d7da]">You decide what happens next.</span> Recommendations do not commit you to a build.</p>
              <Link href="/how-it-works" className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold text-[#d8cbb7] hover:text-white">Explore the full approach<ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Audit + form */}
      <section id="audit-form" ref={auditRef} className="scroll-mt-20 border-b border-white/[0.055] py-11 sm:py-14">
        <div className="mx-auto w-[min(1160px,calc(100%-28px))]">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[22px] border border-white/[0.09] bg-white/[0.045] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.32)] backdrop-blur-2xl sm:p-7 lg:p-9">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(217,47,60,0.15),transparent_30%)]" />
              <div className="relative grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#d8cbb7]">Free Automation Audit</p>
                  <h2 className="mt-4 text-[clamp(34px,8.2vw,52px)] font-semibold leading-[1.03] tracking-[-0.05em]">Leave knowing what is worth automating, what is not, and where to start.</h2>
                  <p className="mt-4 text-[14px] leading-7 text-[#919298]">In a focused 45-minute session, we review one meaningful workflow, identify where unnecessary manual work is happening and show you what could realistically change.</p>
                  <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">{['Where time is being lost', 'What should stay human', 'What could be improved', 'Whether the opportunity is worth pursuing'].map(item => <div key={item} className="flex items-start gap-2.5 rounded-lg border border-white/[0.065] bg-[#0b0d0e]/68 px-3.5 py-3 text-[12px] text-[#a6a7ac]"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d8cbb7]" />{item}</div>)}</div>
                  <p className="mt-5 text-[13px] font-semibold text-[#e2dfe0]">45 minutes · No cost · No commitment</p>
                  <p className="mt-2 text-[12px] leading-6 text-[#7f8086]">If the right answer is not to automate something, we will tell you.</p>
                  <Link href="/automation-audit" className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold text-[#d8cbb7] hover:text-white">Read more about the Audit<ArrowRight className="h-3.5 w-3.5" /></Link>
                </div>

                <div>
                  <div className="mb-5 grid gap-2 sm:grid-cols-4">{[
                    ['1', 'Tell us what feels manual'],
                    ['2', 'Book a short intro call'],
                    ['3', 'Complete the Audit'],
                    ['4', 'Decide what happens next'],
                  ].map(([step, text]) => <div key={step} className="rounded-lg border border-white/[0.065] bg-[#0b0d0e]/68 p-3"><span className="text-[8px] font-bold tracking-[0.16em] text-[#77787e]">0{step}</span><p className="mt-1.5 text-[11px] leading-5 text-[#a7a8ad]">{text}</p></div>)}</div>

                  <div className="rounded-[17px] border border-white/[0.075] bg-[#0b0d0e]/68 p-4 sm:p-5">
                    {submitted ? (
                      <div className="py-8 text-center">
                        <div className="mx-auto grid h-11 w-11 place-items-center rounded-full border border-[#d92f3c]/24 bg-[#190f11]"><Check className="h-4 w-4 text-[#efe3cf]" /></div>
                        <h3 className="mt-4 text-[22px] font-semibold tracking-[-0.035em]">Your audit details are ready.</h3>
                        <p className="mx-auto mt-2 max-w-md text-[13px] leading-6 text-[#898a90]">The next step is to book a short intro call. This prototype has not sent or stored your form data.</p>
                        <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-12 items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-5 text-[13px] font-semibold text-[#151515]">Book Your Intro Call<ArrowRight className="ml-2.5 h-4 w-4" /></a>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
                        <FormField label="Full Name" name="name" error={errors.name} />
                        <FormField label="Business Email" name="email" type="email" error={errors.email} />
                        <FormField label="Company" name="company" error={errors.company} />
                        <SelectField label="Team Size" name="teamSize" options={['Just me', '2 to 10', '11 to 50', '51 to 200', '200+']} error={errors.teamSize} />
                        <SelectField label="Which part feels most manual?" name="processType" options={processOptions} optional />
                        <div className="sm:col-span-2">
                          <label htmlFor="challenge" className="mb-2 block text-[13px] font-medium text-[#d8d8da]">What keeps happening that you wish your team did not have to manage manually? <span className="text-[#77787e]">Optional</span></label>
                          <textarea id="challenge" name="challenge" rows={3} placeholder="Tell us what gets copied, chased, repeated, delayed or forgotten." className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#090a0b] px-4 py-3 text-[16px] text-white outline-none placeholder:text-[#66676d] focus:border-[#d8cbb7]/45 focus:ring-1 focus:ring-[#d8cbb7]/20" />
                        </div>
                        <div className="sm:col-span-2">
                          <button type="submit" className="flex min-h-[50px] w-full items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-5 text-[13px] font-semibold text-[#151515] transition hover:bg-[#f8edda]">{CTA}<ArrowRight className="ml-2.5 h-4 w-4" /></button>
                          <p className="mt-2.5 text-center text-[10.5px] leading-5 text-[#707177]">Frontend prototype only. Nothing is transmitted or stored when you submit this form.</p>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="bg-[#090a0b]">
        <div className="mx-auto flex w-[min(1160px,calc(100%-28px))] flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div><img src="/booth-marketing-logo.png" alt="Booth Marketing" className="w-[138px] object-contain" /><p className="mt-1.5 text-[11px] text-[#707177]">Automation systems built around real businesses.</p></div>
          <p className="text-[10.5px] text-[#66676d]">© {new Date().getFullYear()} Booth Marketing. All rights reserved.</p>
        </div>
      </footer>

      <motion.div initial={false} animate={{ y: showSticky ? 0 : 90, opacity: showSticky ? 1 : 0 }} transition={{ duration: 0.22 }} className="fixed inset-x-0 bottom-0 z-50 border-t border-white/[0.08] bg-[#090a0b]/90 p-2.5 pb-[calc(10px+env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden pointer-events-none">
        <a href="#audit-form" className="pointer-events-auto mx-auto flex min-h-[50px] w-full max-w-md items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-5 text-[13px] font-semibold text-[#151515]">Free Automation Audit<ArrowRight className="ml-2.5 h-4 w-4" /></a>
      </motion.div>
    </main>
  )
}

function RangeInput({ label, value, min, max, prefix, suffix, onChange }: { label: string; value: number; min: number; max: number; prefix?: string; suffix?: string; onChange: (value: number) => void }) {
  return (
    <div>
      <div className="flex items-end justify-between gap-4"><label className="max-w-[68%] text-[12px] font-medium leading-5 text-[#c7c7ca]">{label}</label><span className="shrink-0 text-[12px] font-semibold text-[#f4f4f3]">{prefix}{value}{suffix ? ` ${suffix}` : ''}</span></div>
      <input aria-label={label} type="range" min={min} max={max} value={value} onChange={event => onChange(Number(event.target.value))} className="mt-3 h-2 w-full cursor-pointer accent-[#d92f3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d92f3c]/40" />
    </div>
  )
}

function FormField({ label, name, type = 'text', error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[13px] font-medium text-[#d8d8da]">{label}</label>
      <input id={name} name={name} type={type} className="w-full rounded-lg border border-white/[0.1] bg-[#090a0b] px-4 py-3 text-[16px] text-white outline-none focus:border-[#d8cbb7]/45 focus:ring-1 focus:ring-[#d8cbb7]/20" />
      {error && <p className="mt-1.5 text-[11px] text-[#d1a3a8]">{error}</p>}
    </div>
  )
}

function SelectField({ label, name, options, error, optional = false }: { label: string; name: string; options: string[]; error?: string; optional?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[13px] font-medium text-[#d8d8da]">{label} {optional && <span className="text-[#77787e]">Optional</span>}</label>
      <select id={name} name={name} defaultValue="" className="w-full rounded-lg border border-white/[0.1] bg-[#090a0b] px-4 py-3 text-[16px] text-white outline-none focus:border-[#d8cbb7]/45 focus:ring-1 focus:ring-[#d8cbb7]/20">
        <option value="" disabled>Select an option</option>
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
      {error && <p className="mt-1.5 text-[11px] text-[#d1a3a8]">{error}</p>}
    </div>
  )
}
