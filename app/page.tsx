'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleDot,
  Gauge,
  GitBranch,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { FormEvent, MouseEvent, ReactNode, useMemo, useState } from 'react'

const CTA = 'Request an Automation Audit'
const CALENDAR_URL = 'https://cal.com/your-agency/audit'

const frictionPoints = [
  ['Someone enters the same information twice', 'Details move between forms, inboxes, records and internal systems because nothing carries the context forward.'],
  ['A manager has to chase a status', 'Work moves because somebody remembers to ask, check, remind or follow up.'],
  ['A client asks for information the business has to assemble', 'The answer exists, but someone has to gather it before the business can respond confidently.'],
  ['Onboarding recreates the same setup every time', 'The same emails, folders, tasks, documents and internal updates repeat for each new client.'],
  ['Reporting requires somebody to build the picture manually', 'Management visibility depends on staff collecting and reconciling information first.'],
  ['One employee seems to know how the process really works', 'When that person is away, the workflow slows down because part of the operating system lives in their head.'],
]

const automationZones = [
  {
    label: 'System-led',
    title: 'Predictable work',
    copy: 'Repeatable steps where the rules are clear and the same handling happens again and again.',
    items: ['Moving information', 'Routine notifications', 'Document preparation', 'Recurring reporting'],
  },
  {
    label: 'Human approval',
    title: 'Prepared by the system, decided by a person',
    copy: 'Automation can gather context and prepare the next action without taking the final decision away from the team.',
    items: ['Approvals', 'Recommendations', 'Exception handling', 'Sensitive outbound actions'],
  },
  {
    label: 'Human-led',
    title: 'Judgment stays human',
    copy: 'Commercial, relationship-heavy and unusual situations remain with people who understand the context.',
    items: ['Negotiation', 'Client relationships', 'Strategic decisions', 'Unusual situations'],
  },
]

const industries = [
  'Professional Services',
  'E-commerce',
  'Healthcare',
  'Logistics',
  'Financial Services',
  'SaaS / Tech',
  'Real Estate',
  'Agency / Consulting',
  'Other',
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
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function ScrollLink({ href, children, compact = false, className = '' }: { href: string; children: ReactNode; compact?: boolean; className?: string }) {
  const reduceMotion = useReducedMotion()
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = document.querySelector(href)
    if (!target) return
    event.preventDefault()
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`group inline-flex items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] font-semibold text-[#151515] transition duration-200 hover:-translate-y-px hover:border-[#f8edda] hover:bg-[#f8edda] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#efe3cf]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0b] ${compact ? 'min-h-10 px-4 text-[13px]' : 'min-h-[50px] px-6 text-sm'} ${className}`}
    >
      {children}
      <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  )
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const reduceMotion = useReducedMotion()
  return (
    <a
      href={href}
      onClick={event => {
        const target = document.querySelector(href)
        if (!target) return
        event.preventDefault()
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
      }}
      className="text-[13px] font-medium text-[#8b8c92] transition hover:text-[#e8e8e8] focus-visible:outline-none focus-visible:text-white"
    >
      {children}
    </a>
  )
}

function SectionHeading({ eyebrow, title, copy, centered = false }: { eyebrow: string; title: string; copy?: string; centered?: boolean }) {
  return (
    <div className={centered ? 'mx-auto max-w-[860px] text-center' : 'max-w-[860px]'}>
      <p className="text-[10.5px] font-extrabold uppercase tracking-[0.28em] text-[#d8cbb7]">{eyebrow}</p>
      <h2 className="mt-5 text-[clamp(34px,4vw,50px)] font-semibold leading-[1.06] tracking-[-0.047em] text-[#f4f4f3]">{title}</h2>
      {copy && <p className={`mt-5 text-[16px] leading-[1.72] text-[#97989e] ${centered ? 'mx-auto max-w-[760px]' : 'max-w-[760px]'}`}>{copy}</p>}
    </div>
  )
}

function OperationsFlow() {
  const reduceMotion = useReducedMotion()
  const nodes = [
    ['01', 'Enquiry', 'Information enters the business'],
    ['02', 'Capture', 'Context is structured once'],
    ['03', 'Human decision', 'Judgment stays with the team'],
    ['04', 'Action + update', 'The next step and records move forward'],
  ]

  return (
    <div className="relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-white/[0.04] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(217,47,60,0.13),transparent_34%),radial-gradient(circle_at_10%_90%,rgba(239,227,207,0.04),transparent_30%)]" />
      <div className="relative flex items-center justify-between border-b border-white/[0.075] pb-4">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#aaaab0]"><span className="h-1.5 w-1.5 rounded-full bg-[#d92f3c] shadow-[0_0_18px_rgba(217,47,60,0.75)]" />Operational flow</div>
        <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[9px] uppercase tracking-[0.22em] text-[#77787e]">System ready</span>
      </div>

      <div className="relative mt-4 sm:hidden">
        <div className="grid grid-cols-2 gap-2">
          {nodes.map(([id, title], index) => (
            <div key={id} className={`rounded-xl border px-3 py-3 ${index === 2 ? 'border-[#d92f3c]/28 bg-[#190f11]/85' : 'border-white/[0.07] bg-[#0b0d0e]/80'}`}>
              <div className="flex items-center justify-between"><span className="text-[8px] font-bold tracking-[0.16em] text-[#77787e]">{id}</span><span className={`h-1.5 w-1.5 rounded-full ${index === 2 ? 'bg-[#d92f3c]' : 'bg-[#66686d]'}`} /></div>
              <p className="mt-2 text-[12px] font-semibold text-[#ededed]">{title}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[11px] leading-5 text-[#73747a]">Systems move the predictable steps. People keep control of the decisions.</p>
      </div>

      <div className="relative mt-5 hidden space-y-3 sm:block">
        <div className="absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-[#d92f3c]/55 via-white/10 to-[#efe3cf]/25" />
        {!reduceMotion && (
          <motion.span
            aria-hidden="true"
            initial={{ y: 0, opacity: 0.25 }}
            whileInView={{ y: 178, opacity: [0.25, 1, 0.35] }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 2.6, ease: 'easeInOut', delay: 0.3 }}
            className="absolute left-[15px] top-7 z-10 h-2 w-2 rounded-full bg-[#efe3cf] shadow-[0_0_16px_rgba(239,227,207,0.65)]"
          />
        )}
        {nodes.map(([id, title, copy], index) => (
          <div
            key={id}
            className={`relative z-20 grid grid-cols-[40px_1fr_auto] items-center gap-3 rounded-xl border px-3.5 py-3 ${index === 2 ? 'border-[#d92f3c]/28 bg-[#190f11]/82' : 'border-white/[0.065] bg-[#0b0d0e]/78'}`}
          >
            <span className={`grid h-9 w-9 place-items-center rounded-lg border text-[9px] font-bold tracking-[0.12em] ${index === 2 ? 'border-[#d92f3c]/32 text-[#e7b8bc]' : 'border-white/[0.085] text-[#85868c]'}`}>{id}</span>
            <div>
              <p className="text-[13px] font-semibold text-[#ededed]">{title}</p>
              <p className="mt-0.5 text-[11px] leading-5 text-[#77787e]">{copy}</p>
            </div>
            <span className={`h-2 w-2 rounded-full ${index === 2 ? 'bg-[#d92f3c] shadow-[0_0_12px_rgba(217,47,60,0.55)]' : 'bg-[#66686d]'}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

function MetricValue({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.p key={String(children)} initial={{ opacity: 0.72, y: 3 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className={className}>
      {children}
    </motion.p>
  )
}

export default function Page() {
  const [teamMembers, setTeamMembers] = useState(5)
  const [hourlyCost, setHourlyCost] = useState(24)
  const [hoursPerWeek, setHoursPerWeek] = useState(4)
  const [weeksPerYear, setWeeksPerYear] = useState(48)
  const [reduction, setReduction] = useState(40)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const calculator = useMemo(() => {
    const weeklyHours = teamMembers * hoursPerWeek
    const annualHours = weeklyHours * weeksPerYear
    const annualCost = annualHours * hourlyCost
    const monthlyCost = annualCost / 12
    const recoveredHours = annualHours * (reduction / 100)
    const recoveredCapacity = annualCost * (reduction / 100)
    return { weeklyHours, annualHours, annualCost, monthlyCost, recoveredHours, recoveredCapacity }
  }, [teamMembers, hourlyCost, hoursPerWeek, weeksPerYear, reduction])

  const currency = (value: number) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(value)
  const number = (value: number) => new Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 }).format(value)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const nextErrors: Record<string, string> = {}
    for (const field of ['name', 'email', 'company', 'industry', 'teamSize']) {
      if (!String(form.get(field) || '').trim()) nextErrors[field] = 'Required'
    }
    const email = String(form.get('email') || '')
    if (email && !/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = 'Enter a valid email'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) setSubmitted(true)
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#090a0b] text-[#f4f4f3] selection:bg-[#efe3cf] selection:text-[#151515]">
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#090a0b]/78 backdrop-blur-xl supports-[backdrop-filter]:bg-[#090a0b]/70">
        <div className="mx-auto flex min-h-[66px] w-[min(1160px,calc(100%-28px))] items-center justify-between gap-3 sm:gap-6">
          <a href="#top" className="flex h-[54px] w-[118px] items-center overflow-hidden sm:w-[150px]" aria-label="Booth Marketing home">
            <img src="/booth-marketing-logo.png" alt="Booth Marketing" className="block w-[118px] object-contain sm:w-[150px]" />
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#calculator">Calculator</NavLink>
            <NavLink href="#audit">The Audit</NavLink>
          </nav>
          <ScrollLink href="#audit-form" compact className="shrink-0"><span className="sm:hidden">Request Audit</span><span className="hidden sm:inline">{CTA}</span></ScrollLink>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative border-b border-white/[0.055]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(217,47,60,0.09),transparent_28%),radial-gradient(circle_at_24%_12%,rgba(239,227,207,0.025),transparent_30%)]" />
        <div className="relative mx-auto grid w-[min(1160px,calc(100%-32px))] items-center gap-8 py-10 sm:py-12 lg:min-h-[540px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:py-12">
          <FadeIn>
            <div className="inline-flex min-h-[34px] items-center gap-3 rounded-full border border-white/[0.085] bg-white/[0.03] px-4 text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#d8cbb7] backdrop-blur-md sm:text-[9.5px] sm:tracking-[0.28em]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d92f3c] shadow-[0_0_16px_rgba(217,47,60,0.7)]" />
              For established businesses with real operations
            </div>
            <h1 className="mt-6 max-w-[720px] text-[clamp(40px,5.1vw,64px)] font-semibold leading-[0.99] tracking-[-0.058em] text-[#f4f4f3]">
              Your business has grown. <span className="text-[#c8c8cc]">Your processes may not have grown with it.</span>
            </h1>
            <p className="mt-5 max-w-[670px] text-[16px] leading-[1.65] text-[#aaaab0] sm:text-[17px]">
              Too much still depends on people copying, chasing, checking and remembering. Booth Marketing identifies what can be reduced, what should stay human and whether changing it is worthwhile.
            </p>
            <div className="mt-6"><ScrollLink href="#audit-form">{CTA}</ScrollLink></div>
            <p className="mt-3 text-[13px] text-[#727379]">No technical brief needed. Start with one process that feels harder to run than it should.</p>
          </FadeIn>
          <FadeIn delay={0.1}><OperationsFlow /></FadeIn>
        </div>
      </section>

      {/* Future operations positioning */}
      <section className="border-b border-white/[0.055] py-14 sm:py-[72px]">
        <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
          <FadeIn>
            <p className="text-[10.5px] font-extrabold uppercase tracking-[0.28em] text-[#d8cbb7]">The operating model is changing</p>
            <div className="mt-5 grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <h2 className="max-w-[800px] text-[clamp(36px,4.6vw,56px)] font-semibold leading-[1.03] tracking-[-0.052em]">You are probably not looking for AI. <span className="text-[#9d9ea4]">You are looking for a business that needs less manual intervention to operate.</span></h2>
              <p className="max-w-[460px] text-[15px] leading-7 text-[#898a90] lg:pb-1">People should handle judgment. Systems should handle more of the predictable movement around it.</p>
            </div>
          </FadeIn>
          <div className="mt-9 grid border-y border-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
            {['Less repetitive admin', 'Fewer internal handoffs', 'Better operational visibility', 'Less dependence on memory'].map((item, index) => (
              <FadeIn key={item} delay={index * 0.04} className="border-white/[0.07] sm:border-r sm:last:border-r-0">
                <div className="min-h-[104px] px-1 py-5 sm:px-6 lg:px-5">
                  <span className="text-[9px] font-bold tracking-[0.18em] text-[#707177]">0{index + 1}</span>
                  <p className="mt-4 text-[15px] font-medium text-[#d9d9dc]">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Friction recognition */}
      <section className="border-b border-white/[0.055] bg-[#0b0d0e] py-14 sm:py-[72px]">
        <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
          <FadeIn><SectionHeading eyebrow="Recognise the friction" title="The warning signs rarely look dramatic. They happen dozens of times every week." copy="Each extra step looks small. Across every lead, client, handoff and reporting cycle, the same friction compounds." /></FadeIn>
          <div className="mt-9 grid border-t border-white/[0.07] md:grid-cols-2">
            {frictionPoints.map(([title, copy], index) => (
              <FadeIn key={title} delay={(index % 2) * 0.035}>
                <article className={`grid min-h-[140px] grid-cols-[40px_1fr] gap-4 border-b border-white/[0.07] py-5 md:px-6 ${index % 2 === 0 ? 'md:border-r' : ''}`}>
                  <span className="pt-1 text-[9px] font-bold tracking-[0.18em] text-[#77787e]">0{index + 1}</span>
                  <div><h3 className="text-[17px] font-semibold tracking-[-0.02em] text-[#e8e8ea]">{title}</h3><p className="mt-2.5 max-w-[480px] text-sm leading-7 text-[#7f8086]">{copy}</p></div>
                </article>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-6 rounded-[15px] border border-[#d92f3c]/20 bg-[#190f11]/80 px-6 py-5 text-[15px] leading-7 text-[#c2bdbf] backdrop-blur-md">
              <span className="font-semibold text-[#e5dfe0]">If the business runs smoothly because good people remember what happens next,</span> those people are carrying part of the operating system in their heads.
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Where automation fits */}
      <section id="how-it-works" className="scroll-mt-24 border-b border-white/[0.055] py-14 sm:py-[72px]">
        <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
          <FadeIn><SectionHeading eyebrow="Where automation actually fits" title="Your business can be bespoke without every step needing to stay manual." copy="The decisions may be unique. The repetitive handling around those decisions often is not. The goal is control, not maximum automation." /></FadeIn>
          <div className="mt-9 grid gap-4 lg:grid-cols-3">
            {automationZones.map((zone, index) => (
              <FadeIn key={zone.label} delay={index * 0.05}>
                <article className={`h-full rounded-[18px] border p-6 backdrop-blur-lg ${index === 1 ? 'border-[#d92f3c]/24 bg-[#190f11]/58' : 'border-white/[0.075] bg-white/[0.03]'}`}>
                  <div className="flex items-center justify-between"><span className="text-[9.5px] font-extrabold uppercase tracking-[0.22em] text-[#cfc2ae]">{zone.label}</span><span className={`h-2 w-2 rounded-full ${index === 0 ? 'bg-[#73757a]' : index === 1 ? 'bg-[#d92f3c] shadow-[0_0_14px_rgba(217,47,60,0.65)]' : 'bg-[#efe3cf]'}`} /></div>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.035em]">{zone.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#808187]">{zone.copy}</p>
                  <div className="mt-5 space-y-2.5 border-t border-white/[0.065] pt-5">
                    {zone.items.map(item => <div key={item} className="flex items-center gap-2.5 text-[13px] text-[#a3a4aa]"><span className="h-1 w-1 rounded-full bg-[#74767b]" />{item}</div>)}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-5 flex flex-col gap-4 rounded-[16px] border border-white/[0.075] bg-white/[0.03] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[17px] font-semibold tracking-[-0.025em] text-[#dedee0]">Do not automate the judgment. Remove unnecessary handling around it.</p>
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#77787e]"><ShieldCheck className="h-4 w-4 text-[#d8cbb7]" />Human control preserved</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Existing systems and staff adoption */}
      <section className="border-b border-white/[0.055] bg-[#0b0d0e] py-14 sm:py-[72px]">
        <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
          <FadeIn><SectionHeading eyebrow="Upgrade without replacing everything" title="A better operation should not require tearing apart everything that already works." copy="Before adding anything new, we look at why employees are still manually connecting the systems the business already pays for." /></FadeIn>
          <div className="mt-9 grid gap-5 lg:grid-cols-2">
            <FadeIn><ProcessState label="Current state" title="People move the work" items={['Enquiry arrives', 'Employee copies information', 'Record is updated', 'Colleague is messaged', 'Another system is updated', 'Report is assembled']} manual /></FadeIn>
            <FadeIn delay={0.07}><ProcessState label="Improved state" title="Systems move the predictable parts" items={['Enquiry captured', 'Correct record updated', 'Task triggered', 'Human handles the decision', 'Next action follows', 'Reporting stays current']} /></FadeIn>
          </div>
          <div className="mt-5 grid gap-px overflow-hidden rounded-[16px] border border-white/[0.075] bg-white/[0.075] sm:grid-cols-3">
            {[
              ['Keep what works', 'Existing systems stay where they still support the process.'],
              ['Remove unnecessary actions', 'Automation should reduce steps from the employee day, not create more.'],
              ['Avoid another dashboard', 'New interfaces only make sense when they solve a real operating problem.'],
            ].map(([title, copy], index) => (
              <FadeIn key={title} delay={index * 0.04} className="bg-[#0d0f10]">
                <div className="h-full p-5 sm:p-6"><p className="text-[15px] font-semibold text-[#e1e1e3]">{title}</p><p className="mt-2.5 text-sm leading-6 text-[#7f8086]">{copy}</p></div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Capacity Calculator */}
      <section id="calculator" className="scroll-mt-24 border-b border-white/[0.055] py-14 sm:py-[72px]">
        <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
          <FadeIn><SectionHeading eyebrow="Operational Capacity Calculator" title="See what repetitive work may already be costing the business." copy="Use your own numbers to estimate how much staff capacity is tied up in repetitive operational work. This is a scenario tool, not a promise of savings." /></FadeIn>

          <div className="relative mt-9 overflow-hidden rounded-[22px] border border-white/[0.085] bg-white/[0.04] shadow-[0_28px_90px_rgba(0,0,0,0.32)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_18%,rgba(217,47,60,0.10),transparent_30%)]" />
            <div className="relative grid lg:grid-cols-[0.86fr_1.14fr]">
              <FadeIn className="border-b border-white/[0.075] p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <div className="flex items-center justify-between"><p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#cfc2ae]">Your operation</p><span className="text-[9px] uppercase tracking-[0.2em] text-[#73747a]">Live scenario</span></div>
                <div className="mt-7 space-y-6">
                  <CalculatorInput label="Employees involved" value={teamMembers} min={1} max={50} suffix="people" onChange={setTeamMembers} />
                  <CalculatorInput label="Loaded hourly staff cost" value={hourlyCost} min={10} max={100} prefix="£" suffix="/ hr" onChange={setHourlyCost} />
                  <CalculatorInput label="Repetitive hours per employee each week" value={hoursPerWeek} min={1} max={30} suffix="hrs" onChange={setHoursPerWeek} />
                  <CalculatorInput label="Working weeks per year" value={weeksPerYear} min={40} max={52} suffix="weeks" onChange={setWeeksPerYear} />
                  <CalculatorInput label="Potential reduction scenario" value={reduction} min={10} max={80} suffix="%" onChange={setReduction} />
                </div>
              </FadeIn>

              <FadeIn delay={0.07} className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#cfc2ae]"><Gauge className="h-4 w-4 text-[#d92f3c]" />Capacity scenario</div>
                <div className="mt-6 rounded-[17px] border border-white/[0.075] bg-[#0b0d0e]/78 p-6">
                  <p className="text-[12px] leading-5 text-[#85868c]">Estimated staff capacity currently tied to repetitive work</p>
                  <MetricValue className="mt-3 text-[clamp(43px,5.5vw,67px)] font-semibold leading-none tracking-[-0.06em] text-[#efe3cf]">{currency(calculator.annualCost)}</MetricValue>
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/[0.065] pt-4 text-[12px] text-[#77787e]"><span>{number(calculator.annualHours)} working hours / year</span><span>{currency(calculator.monthlyCost)} / month</span></div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[15px] border border-[#d92f3c]/22 bg-[#190f11]/72 p-5"><p className="text-[11px] text-[#a08c90]">At a {reduction}% reduction scenario</p><MetricValue className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{number(calculator.recoveredHours)} hrs</MetricValue><p className="mt-1 text-xs text-[#77787e]">potentially returned to the team</p></div>
                  <div className="rounded-[15px] border border-white/[0.075] bg-[#0b0d0e]/72 p-5"><p className="text-[11px] text-[#85868c]">Staff capacity potentially released</p><MetricValue className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{currency(calculator.recoveredCapacity)}</MetricValue><p className="mt-1 text-xs text-[#77787e]">not a guaranteed saving or profit figure</p></div>
                </div>

                <div className="mt-5 rounded-[15px] border border-white/[0.075] bg-white/[0.03] p-5">
                  <p className="text-sm font-semibold text-[#dedee0]">Released capacity is not the same as profit.</p>
                  <p className="mt-2 text-[13px] leading-6 text-[#808187]">It could mean more client-facing time, faster response, less overtime, lower pressure on staff, more operating capacity or delaying an additional hire.</p>
                </div>
                <div className="mt-5 flex flex-col gap-4 border-t border-white/[0.075] pt-5 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-[460px] text-[12px] leading-5 text-[#707177]">Illustrative estimate based only on the figures you entered. It does not assume every task can or should be automated.</p><ScrollLink href="#audit-form" compact>Assess this workflow</ScrollLink></div>
              </FadeIn>
            </div>
          </div>

          <FadeIn>
            <div className="mt-5 flex flex-col gap-3 rounded-[15px] border border-white/[0.075] bg-[#0b0d0e] px-6 py-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#cfc2ae]">You do not need enterprise scale</p><p className="mt-2 text-sm text-[#8f9096]">At your current inputs, {teamMembers} people × {hoursPerWeek} hours = <span className="font-semibold text-[#d7d7da]">{number(calculator.weeklyHours)} hours of repetitive work every week.</span></p></div><span className="text-[12px] text-[#717278]">{number(calculator.annualHours)} hours across {weeksPerYear} working weeks</span></div>
          </FadeIn>
        </div>
      </section>

      {/* Operating model progression */}
      <section className="border-b border-white/[0.055] bg-[#0b0d0e] py-14 sm:py-[72px]">
        <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
          <FadeIn><SectionHeading eyebrow="What a better workflow looks like" title="The goal is not more AI. It is a better operating model." copy="As the operation matures, fewer predictable steps depend on employees manually moving work from one place to the next." /></FadeIn>
          <FadeIn delay={0.06}><OperatingProgression /></FadeIn>
        </div>
      </section>

      {/* Approach and credibility */}
      <section className="border-b border-white/[0.055] py-14 sm:py-[72px]">
        <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
          <FadeIn><SectionHeading eyebrow="How Booth Marketing approaches it" title="Understand the operation before touching the technology." copy="The quickest way to build the wrong automation is to automate a workflow nobody has properly understood first." /></FadeIn>
          <div className="mt-9 grid gap-4 lg:grid-cols-3">
            {[
              ['01', 'Understand the operation', 'Map how work actually moves today, including decisions, exceptions and handoffs.'],
              ['02', 'Find the friction', 'Separate useful human judgment from copying, chasing, updating and checking.'],
              ['03', 'Design the better workflow', 'Decide what should change, what stays human and whether automation is worthwhile.'],
            ].map(([step, title, copy], index) => (
              <FadeIn key={step} delay={index * 0.04}>
                <article className="h-full rounded-[17px] border border-white/[0.075] bg-white/[0.03] p-6"><span className="grid h-10 w-10 place-items-center rounded-lg border border-white/[0.085] text-[10px] text-[#cfc2ae]">{step}</span><h3 className="mt-5 text-[19px] font-semibold tracking-[-0.03em]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#808187]">{copy}</p></article>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-5 flex flex-col gap-4 rounded-[16px] border border-white/[0.075] bg-[#0b0d0e] px-6 py-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#cfc2ae]">You decide what happens next</p><p className="mt-2 text-sm text-[#898a90]">Recommendations do not commit you to an implementation project.</p></div><ScrollLink href="#audit-form" compact>{CTA}</ScrollLink></div>
          </FadeIn>

          <div className="mt-10 grid gap-7 lg:grid-cols-[0.82fr_1.18fr]">
            <FadeIn>
              <div><p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#cfc2ae]">Practical capability</p><h3 className="mt-4 text-3xl font-semibold tracking-[-0.045em]">Built around the operation, not a generic template.</h3><div className="mt-5 space-y-3">{[
                ['Workflow diagnosis', 'Understand how work actually moves through the company.'],
                ['Automation architecture', 'Identify where repetitive handling could realistically be removed.'],
                ['Implementation planning', 'Turn viable opportunities into defined, buildable systems.'],
              ].map(([title, copy]) => <div key={title} className="border-t border-white/[0.07] pt-4"><p className="text-[14px] font-semibold text-[#dedee0]">{title}</p><p className="mt-1 text-[13px] leading-6 text-[#7f8086]">{copy}</p></div>)}</div></div>
            </FadeIn>
            <FadeIn delay={0.07}>
              <div className="rounded-[18px] border border-white/[0.075] bg-white/[0.03] p-6 sm:p-7">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#cfc2ae]">Example workflow patterns we can assess</p>
                <div className="mt-5 space-y-3">
                  {[
                    ['New enquiry', 'Qualification', 'Assignment', 'Follow-up', 'Reporting'],
                    ['Client starts', 'Documents', 'Internal tasks', 'Updates', 'Handover'],
                    ['Data exists', 'Collection', 'Reconciliation', 'Review', 'Management view'],
                  ].map((flow, flowIndex) => (
                    <div key={flow[0]} className="rounded-xl border border-white/[0.065] bg-[#0b0d0e]/72 p-4">
                      <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#73747a]">Example 0{flowIndex + 1}</p>
                      <div className="flex flex-wrap items-center gap-2">
                        {flow.map((step, index) => <div key={step} className="flex items-center gap-2"><span className={`rounded-md border px-2.5 py-1.5 text-[11px] ${index === 0 || index === flow.length - 1 ? 'border-white/[0.09] bg-white/[0.025] text-[#b5b6bb]' : 'border-[#d92f3c]/16 bg-[#190f11]/45 text-[#a58f92]'}`}>{step}</span>{index < flow.length - 1 && <ChevronRight className="h-3 w-3 text-[#5f6066]" />}</div>)}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t border-white/[0.07] pt-5"><p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#77787e]">Common business environments</p><div className="mt-3 flex flex-wrap gap-2">{['Professional Services', 'Agencies', 'B2B Services', 'Property', 'Operational Service Businesses'].map(item => <span key={item} className="rounded-full border border-white/[0.075] bg-[#0b0d0e]/70 px-3.5 py-2 text-[12px] text-[#929399]">{item}</span>)}</div></div>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="mt-10 rounded-[18px] border border-[#d92f3c]/18 bg-[#190f11]/52 p-6 sm:p-7"><div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#cfc2ae]"><CircleDot className="h-4 w-4 text-[#d92f3c]" />Our approach</div><div className="mt-5 grid gap-px overflow-hidden rounded-xl border border-white/[0.065] bg-white/[0.065] sm:grid-cols-2">{['Not everything should be automated.', 'Your team is not the problem.', 'Existing systems do not get replaced without a reason.', 'AI does not need authority over every decision.'].map(item => <div key={item} className="bg-[#110e0f] px-5 py-4 text-[13px] text-[#b5adaf]">{item}</div>)}</div><p className="mt-4 text-sm leading-7 text-[#8e8386]">Sometimes the right answer is automation. Sometimes it is process redesign. Sometimes the process should stay exactly as it is.</p></div>
          </FadeIn>
        </div>
      </section>

      {/* Audit offer */}
      <section id="audit" className="scroll-mt-24 border-b border-white/[0.055] bg-[#0b0d0e] py-14 sm:py-[72px]">
        <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[24px] border border-white/[0.095] bg-white/[0.05] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:p-10 lg:p-11">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_16%,rgba(217,47,60,0.16),transparent_30%),radial-gradient(circle_at_20%_100%,rgba(239,227,207,0.04),transparent_28%)]" />
              <div className="relative grid gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div><div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#d8cbb7]"><Sparkles className="h-4 w-4 text-[#d92f3c]" />Free Automation Audit</div><h2 className="mt-5 max-w-[680px] text-[clamp(37px,4.7vw,56px)] font-semibold leading-[1.03] tracking-[-0.052em]">Leave knowing what is worth automating, what is not, and where to start.</h2><p className="mt-5 max-w-[650px] text-[15px] leading-7 text-[#96979d]">In a focused 45-minute session, we examine one meaningful workflow, where time is being lost, what still needs a person and where unnecessary work could be removed.</p><div className="mt-6"><ScrollLink href="#audit-form">{CTA}</ScrollLink></div></div>
                <div className="grid gap-2.5">{[
                  'Where is time currently being lost?',
                  'What genuinely needs a person?',
                  'What could potentially run differently?',
                  'Can existing systems support the change?',
                  'What should remain manual?',
                  'Is the opportunity worth pursuing?',
                ].map(item => <div key={item} className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-[#0b0d0e]/68 px-4 py-3.5 text-[13px] text-[#afb0b5]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#d8cbb7]" />{item}</div>)}</div>
              </div>
              <div className="relative mt-7 grid gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.065] sm:grid-cols-3"><div className="bg-[#0b0d0e]/82 px-5 py-4 text-[12px] text-[#95969c]">No cost and no commitment</div><div className="bg-[#0b0d0e]/82 px-5 py-4 text-[12px] text-[#95969c]">Existing systems considered first</div><div className="bg-[#0b0d0e]/82 px-5 py-4 text-[12px] text-[#95969c]">No requirement to continue into a build</div></div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process and lead form */}
      <section id="audit-form" className="scroll-mt-24 border-b border-white/[0.055] py-14 sm:py-[72px]">
        <div className="mx-auto grid w-[min(1160px,calc(100%-32px))] gap-9 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
          <FadeIn>
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p className="text-[10.5px] font-extrabold uppercase tracking-[0.28em] text-[#d8cbb7]">What happens next</p>
              <h2 className="mt-5 text-[clamp(33px,4vw,46px)] font-semibold leading-[1.06] tracking-[-0.047em]">Describe the friction. You do not need to know the solution.</h2>
              <p className="mt-5 text-[15px] leading-7 text-[#898a90]">Tell us what keeps getting copied, chased, repeated, delayed or forgotten. The process starts from there.</p>
              <div className="mt-7 space-y-1">
                {[
                  ['01', 'Describe the friction'],
                  ['02', 'Short intro call'],
                  ['03', '45-minute Automation Audit'],
                  ['04', 'Receive recommendations'],
                  ['05', 'You decide'],
                ].map(([step, title], index) => <div key={step} className="relative grid grid-cols-[42px_1fr] gap-3 py-3"><span className="text-[9px] font-bold tracking-[0.18em] text-[#77787e]">{step}</span><div className="flex items-center justify-between gap-3 border-b border-white/[0.065] pb-3"><p className="text-[13px] text-[#c0c0c4]">{title}</p>{index < 4 && <ChevronRight className="h-3.5 w-3.5 text-[#66676d]" />}</div></div>)}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.07}>
            <div className="rounded-[20px] border border-white/[0.085] bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
              {submitted ? (
                <div className="py-10 text-center sm:py-14">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-[#d92f3c]/25 bg-[#190f11] text-[#efe3cf]"><Check className="h-5 w-5" /></div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.035em]">Your audit details are ready.</h3>
                  <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[#898a90]">The next step is to book a short intro call. This prototype has not sent or stored your form data.</p>
                  <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-[50px] items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-6 text-sm font-semibold text-[#151515] transition hover:bg-[#f8edda] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#efe3cf]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0b]">Book Your Intro Call<ArrowRight className="ml-3 h-4 w-4" /></a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Full Name" name="name" error={errors.name} />
                  <FormField label="Business Email" name="email" type="email" error={errors.email} />
                  <FormField label="Company / Business Name" name="company" error={errors.company} />
                  <SelectField label="Industry" name="industry" options={industries} error={errors.industry} />
                  <SelectField label="Team Size" name="teamSize" options={['Just me', '2 to 10', '11 to 50', '51 to 200', '200+']} error={errors.teamSize} />
                  <SelectField label="Which part feels most manual?" name="processType" options={processOptions} />
                  <div className="sm:col-span-2">
                    <label htmlFor="challenge" className="mb-2 block text-sm font-medium text-[#d8d8da]">What keeps happening that you wish your team did not have to manage manually?</label>
                    <textarea id="challenge" name="challenge" rows={4} placeholder="Tell us what gets copied, chased, repeated, delayed or forgotten." className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#0b0d0e]/88 px-4 py-3 text-sm text-white outline-none placeholder:text-[#66676d] focus:border-[#d8cbb7]/45 focus:ring-1 focus:ring-[#d8cbb7]/20" />
                  </div>
                  <div className="sm:col-span-2">
                    <button type="submit" className="flex min-h-[50px] w-full items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-6 text-sm font-semibold text-[#151515] transition hover:bg-[#f8edda] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#efe3cf]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0b]">{CTA}<ArrowRight className="ml-3 h-4 w-4" /></button>
                    <p className="mt-3 text-center text-[11px] leading-5 text-[#707177]">Frontend prototype only. Nothing is transmitted or stored when you submit this form.</p>
                  </div>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-b border-white/[0.055] py-18 text-center sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,47,60,0.08),transparent_28%)]" />
        <FadeIn className="relative mx-auto flex w-[min(900px,calc(100%-32px))] flex-col items-center">
          <p className="text-[10.5px] font-extrabold uppercase tracking-[0.28em] text-[#d8cbb7]">Automation Audit</p>
          <h2 className="mt-5 text-[clamp(37px,5vw,56px)] font-semibold leading-[1.03] tracking-[-0.052em]">You do not need to believe in AI. <span className="text-[#a0a1a6]">You only need one process that feels harder to run than it should.</span></h2>
          <p className="mt-5 text-[15px] text-[#85868c]">One conversation. No commitment. Clear answers.</p>
          <div className="mt-6"><ScrollLink href="#audit-form">{CTA}</ScrollLink></div>
        </FadeIn>
      </section>

      <footer className="bg-[#090a0b]">
        <div className="mx-auto flex w-[min(1160px,calc(100%-32px))] flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div><img src="/booth-marketing-logo.png" alt="Booth Marketing" className="w-[145px] object-contain" /><p className="mt-2 text-[12px] text-[#707177]">Automation systems built around real businesses.</p></div>
          <p className="text-[11px] text-[#66676d]">© {new Date().getFullYear()} Booth Marketing. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

function ProcessState({ label, title, items, manual = false }: { label: string; title: string; items: string[]; manual?: boolean }) {
  return (
    <div className={`h-full rounded-[18px] border p-6 ${manual ? 'border-white/[0.075] bg-white/[0.025]' : 'border-[#d92f3c]/18 bg-[#190f11]/48'}`}>
      <div className="flex items-center justify-between"><p className="text-[9.5px] font-extrabold uppercase tracking-[0.22em] text-[#cfc2ae]">{label}</p><GitBranch className={`h-4 w-4 ${manual ? 'text-[#707177]' : 'text-[#d92f3c]'}`} /></div>
      <h3 className="mt-5 text-xl font-semibold tracking-[-0.035em]">{title}</h3>
      <div className="mt-5 space-y-2.5">
        {items.map((item, index) => (
          <div key={item} className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-[#0b0d0e]/68 px-3.5 py-3">
            <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-md border text-[8px] ${manual && [1, 3, 4, 5].includes(index) ? 'border-[#d92f3c]/26 bg-[#190f11] text-[#c89297]' : 'border-white/[0.08] text-[#77787e]'}`}>0{index + 1}</span>
            <p className="text-[12px] text-[#98999f]">{item}</p>
            {manual && [1, 3, 4, 5].includes(index) && <span className="ml-auto text-[8px] uppercase tracking-[0.16em] text-[#9f6369]">manual</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

function OperatingProgression() {
  const stages = [
    {
      number: '01',
      label: 'Manual',
      title: 'People move the work',
      nodes: [
        ['Person', 'person'],
        ['Person', 'person'],
        ['Person', 'person'],
        ['System', 'system'],
      ],
    },
    {
      number: '02',
      label: 'Connected',
      title: 'Systems share more context',
      nodes: [
        ['Person', 'person'],
        ['System', 'system'],
        ['Person', 'person'],
        ['System', 'system'],
      ],
    },
    {
      number: '03',
      label: 'Adaptive',
      title: 'Systems move the predictable work',
      nodes: [
        ['System', 'system'],
        ['System', 'system'],
        ['Human decision', 'decision'],
        ['System', 'system'],
      ],
    },
  ]

  return (
    <div className="mt-9 overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.035] backdrop-blur-xl">
      {stages.map((stage, stageIndex) => (
        <div key={stage.number} className={`grid gap-5 border-b border-white/[0.07] p-5 last:border-b-0 sm:p-6 md:grid-cols-[170px_1fr] md:items-center ${stageIndex === 2 ? 'bg-[#190f11]/38' : ''}`}>
          <div><div className="flex items-center gap-3"><span className="text-[9px] font-bold tracking-[0.18em] text-[#77787e]">{stage.number}</span><span className="text-[9.5px] font-extrabold uppercase tracking-[0.22em] text-[#cfc2ae]">{stage.label}</span></div><p className="mt-2 text-[14px] font-semibold text-[#d8d8da]">{stage.title}</p></div>
          <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
            {stage.nodes.map(([node, type], index) => (
              <div key={`${node}-${index}`} className="flex min-w-0 flex-1 items-center gap-2">
                <div className={`flex min-h-11 flex-1 items-center justify-center rounded-lg border px-3 text-center text-[11px] font-medium ${type === 'decision' ? 'border-[#d92f3c]/35 bg-[#190f11] text-[#efdfe1] shadow-[0_0_22px_rgba(217,47,60,0.09)]' : type === 'system' ? 'border-white/[0.085] bg-[#0b0d0e]/82 text-[#aaaab0]' : 'border-white/[0.06] bg-white/[0.02] text-[#85868c]'}`}>
                  {node}
                </div>
                {index < stage.nodes.length - 1 && <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#66676d]" />}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="border-t border-white/[0.07] px-5 py-4 text-[12px] leading-6 text-[#818288] sm:px-6"><span className="font-semibold text-[#d2d2d5]">The progression is not about removing people.</span> It is about removing predictable movement from the work around them.</div>
    </div>
  )
}

function CalculatorInput({ label, value, min, max, prefix, suffix, onChange }: { label: string; value: number; min: number; max: number; prefix?: string; suffix?: string; onChange: (value: number) => void }) {
  return (
    <div>
      <div className="flex items-end justify-between gap-4"><label className="max-w-[70%] text-[13px] font-medium leading-5 text-[#c7c7ca]">{label}</label><span className="shrink-0 text-[13px] font-semibold text-[#f4f4f3]">{prefix}{value}{suffix ? ` ${suffix}` : ''}</span></div>
      <input aria-label={label} type="range" min={min} max={max} value={value} onChange={event => onChange(Number(event.target.value))} className="mt-3 h-1.5 w-full cursor-pointer accent-[#d92f3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d92f3c]/40" />
      <div className="mt-1.5 flex justify-between text-[9px] text-[#66676d]"><span>{prefix}{min}{suffix ? ` ${suffix}` : ''}</span><span>{prefix}{max}{suffix ? ` ${suffix}` : ''}</span></div>
    </div>
  )
}

function FormField({ label, name, type = 'text', error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-[#d8d8da]">{label}</label>
      <input id={name} name={name} type={type} className="w-full rounded-lg border border-white/[0.1] bg-[#0b0d0e]/88 px-4 py-3 text-sm text-white outline-none focus:border-[#d8cbb7]/45 focus:ring-1 focus:ring-[#d8cbb7]/20" />
      {error && <p className="mt-1.5 text-xs text-[#d1a3a8]">{error}</p>}
    </div>
  )
}

function SelectField({ label, name, options, error }: { label: string; name: string; options: string[]; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-[#d8d8da]">{label}</label>
      <select id={name} name={name} defaultValue="" className="w-full rounded-lg border border-white/[0.1] bg-[#0b0d0e]/88 px-4 py-3 text-sm text-white outline-none focus:border-[#d8cbb7]/45 focus:ring-1 focus:ring-[#d8cbb7]/20">
        <option value="" disabled>Select an option</option>
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
      {error && <p className="mt-1.5 text-xs text-[#d1a3a8]">{error}</p>}
    </div>
  )
}
