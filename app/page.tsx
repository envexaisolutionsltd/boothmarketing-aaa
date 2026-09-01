'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Clock3,
  FileText,
  Gauge,
  Layers3,
  Mail,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react'
import { FormEvent, ReactNode, useMemo, useState } from 'react'

const CTA = 'Request an Automation Audit'
const CALENDAR_URL = 'https://cal.com/your-agency/audit'

const frictionPoints = [
  ['The same information gets entered twice', 'Details move between email, spreadsheets, CRM records and internal tools by hand.'],
  ['People keep chasing the next step', 'Work moves because somebody remembers to follow up, check a status or remind another person.'],
  ['Reporting has to be rebuilt manually', 'Management visibility depends on somebody collecting information before you can see what is happening.'],
  ['Onboarding repeats the same admin', 'Every new client creates familiar emails, folders, forms, documents and internal setup tasks.'],
  ['One person knows how the process really works', 'When that person is busy or away, the workflow slows down and context becomes harder to find.'],
]

const approach = [
  {
    title: 'Understand the current system',
    copy: 'We map how the business actually operates today, including the people, handoffs, decisions and exceptions involved.',
  },
  {
    title: 'Find the friction',
    copy: 'We separate useful human judgment from copying, chasing, updating, checking and other repetitive handling.',
  },
  {
    title: 'Design practical automations',
    copy: 'We propose specific changes that fit the real workflow instead of forcing technology into places it does not belong.',
  },
  {
    title: 'You decide what happens next',
    copy: 'You get a clear view of what is worth changing and what should stay human. There is no pressure to continue into a build.',
  },
]

const automationFit = [
  ['Strong candidates', ['Repeated data entry', 'Routine follow-up and reminders', 'Document creation from known information', 'Rules-based handoffs', 'Recurring reporting and status updates']],
  ['Usually stays human', ['Commercial judgment', 'Sensitive conversations', 'Relationship-heavy decisions', 'Unusual exceptions', 'Work where context changes constantly']],
]

const nextSteps = [
  ['Submit your details', 'Tell us about the business and the process that feels more manual than it should.'],
  ['We review the workflow', 'We look at the context before the conversation so the discussion starts in the right place.'],
  ['Short fit call', 'A brief call confirms whether the process is suitable for a deeper Automation Audit.'],
  ['Audit and recommendations', 'We work through the workflow and give you a clear view of what is worth automating, what is not, and where to start.'],
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

function FadeIn({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function PrimaryLink({ href = '#audit-form', compact = false, children = CTA }: { href?: string; compact?: boolean; children?: ReactNode }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center rounded-xl bg-amber-400 font-semibold text-zinc-950 transition duration-200 hover:-translate-y-0.5 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-zinc-950 ${compact ? 'min-h-11 px-5 text-sm' : 'min-h-14 px-6 text-sm sm:px-7 sm:text-base'}`}
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  )
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {copy && <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">{copy}</p>}
    </div>
  )
}

export default function Page() {
  const [teamMembers, setTeamMembers] = useState(4)
  const [hourlyCost, setHourlyCost] = useState(22)
  const [hoursPerWeek, setHoursPerWeek] = useState(7)
  const [weeksPerYear, setWeeksPerYear] = useState(48)
  const [reduction, setReduction] = useState(50)
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
    <main className="min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100 selection:bg-amber-300 selection:text-zinc-950">
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-16 w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#top" className="text-base font-semibold tracking-[-0.03em] text-white" aria-label="Booth Marketing home">Booth Marketing</a>
          <PrimaryLink compact />
        </div>
      </header>

      <section id="top" className="relative border-b border-zinc-800/80">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-36">
          <FadeIn className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">AI automation for established businesses</p>
            <h1 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              Your business has grown. <span className="text-zinc-400">Too much of the operation is still being held together manually.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              Booth Marketing helps established businesses identify where repetitive work, disconnected processes and manual handoffs are consuming capacity, then shows you what is actually worth automating.
            </p>
            <div className="mt-9 flex flex-col items-center gap-4">
              <PrimaryLink />
              <p className="text-sm text-zinc-500">No technical brief needed. No commitment. Start with one real workflow.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-zinc-800/80 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <FadeIn>
            <SectionHeading
              eyebrow="Does this sound familiar?"
              title="The problems rarely look dramatic. They repeat quietly across the whole operation."
              copy="One copied field or one forgotten follow-up is small. The real cost appears when the same friction happens across every lead, client, job and internal handoff."
            />
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {frictionPoints.map(([title, copy], index) => (
              <FadeIn key={title} delay={index * 0.04} className={index === frictionPoints.length - 1 ? 'md:col-span-2' : ''}>
                <article className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/45 p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-zinc-700 text-xs font-semibold text-zinc-500">0{index + 1}</span>
                    <div><h3 className="text-lg font-semibold tracking-[-0.025em] text-white">{title}</h3><p className="mt-2 text-sm leading-7 text-zinc-400">{copy}</p></div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800/80 bg-zinc-900/20 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <FadeIn>
            <SectionHeading eyebrow="Why this happens" title="Your software may be fine. The gaps between it are where people lose time." />
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8">
              <div className="space-y-4">
                {[
                  ['Information arrives', 'Email, forms, calls, documents'],
                  ['Someone interprets it', 'Reads, sorts, decides, copies'],
                  ['Another system gets updated', 'CRM, spreadsheet, folder, project tool'],
                  ['Someone remembers the next step', 'Assign, chase, notify, report'],
                ].map(([title, copy], index) => (
                  <div key={title} className="flex gap-4 border-b border-zinc-800 pb-4 last:border-b-0 last:pb-0">
                    <span className="text-xs font-bold tracking-[0.18em] text-amber-300">0{index + 1}</span>
                    <div><p className="font-medium text-zinc-100">{title}</p><p className="mt-1 text-sm text-zinc-500">{copy}</p></div>
                  </div>
                ))}
              </div>
              <p className="mt-7 border-t border-zinc-800 pt-6 text-base leading-7 text-zinc-300">Your people should use judgment where it matters. They should not have to be the connection between every system and next step.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-zinc-800/80 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <FadeIn><SectionHeading eyebrow="How we approach it" title="Understand the process before touching the technology." copy="The quickest way to build the wrong automation is to automate a workflow nobody has properly understood first." /></FadeIn>
          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {approach.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.05}>
                <article className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/35 p-6">
                  <span className="text-xs font-bold tracking-[0.18em] text-amber-300">0{index + 1}</span>
                  <h3 className="mt-6 text-lg font-semibold tracking-[-0.025em] text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-500">{step.copy}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800/80 bg-zinc-900/20 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <FadeIn><SectionHeading eyebrow="Operational Cost Calculator" title="See what repetitive work may already be costing the business." copy="Use your own numbers to estimate how much staff capacity is tied up in repetitive operational work. This is an illustrative scenario, not a savings guarantee." /></FadeIn>
          <div className="mt-12 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <FadeIn>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8">
                <div className="space-y-7">
                  <CalculatorInput label="Team members doing repetitive admin" value={teamMembers} min={1} max={50} suffix="people" onChange={setTeamMembers} />
                  <CalculatorInput label="Average loaded hourly staff cost" value={hourlyCost} min={10} max={100} prefix="£" suffix="/ hr" onChange={setHourlyCost} />
                  <CalculatorInput label="Hours per person spent on repetitive work each week" value={hoursPerWeek} min={1} max={30} suffix="hrs" onChange={setHoursPerWeek} />
                  <CalculatorInput label="Working weeks per year" value={weeksPerYear} min={40} max={52} suffix="weeks" onChange={setWeeksPerYear} />
                  <CalculatorInput label="Reduction scenario" value={reduction} min={10} max={80} suffix="%" onChange={setReduction} />
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Based on your inputs</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <ResultCard icon={Clock3} label="Repetitive work" value={`${number(calculator.weeklyHours)} hrs / week`} />
                  <ResultCard icon={Gauge} label="Estimated monthly staff cost" value={currency(calculator.monthlyCost)} />
                  <ResultCard icon={BarChart3} label="Estimated annual staff cost" value={currency(calculator.annualCost)} accent />
                  <ResultCard icon={Users} label="Annual hours consumed" value={`${number(calculator.annualHours)} hrs`} />
                </div>
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-5">
                  <p className="text-sm font-medium text-amber-200">At a {reduction}% reduction scenario</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div><p className="text-2xl font-semibold tracking-[-0.04em] text-white">{currency(calculator.recoveredCapacity)}</p><p className="mt-1 text-xs text-zinc-500">potential annual staff capacity released</p></div>
                    <div><p className="text-2xl font-semibold tracking-[-0.04em] text-white">{number(calculator.recoveredHours)} hrs</p><p className="mt-1 text-xs text-zinc-500">potential annual time returned to the team</p></div>
                  </div>
                </div>
                <p className="mt-5 text-xs leading-5 text-zinc-600">Illustrative estimate based solely on the figures you entered. It does not represent guaranteed savings or assume every part of the work can or should be automated.</p>
                <div className="mt-6 border-t border-zinc-800 pt-6">
                  <p className="text-sm leading-6 text-zinc-300">The useful question is not how much of this cost can disappear. It is which parts of the process actually require a person.</p>
                  <div className="mt-4"><PrimaryLink /></div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800/80 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <FadeIn><SectionHeading eyebrow="What is worth automating" title="Automate repetition. Keep judgment, context and relationships human." copy="A good automation strategy is selective. Some work becomes more reliable when the process handles it. Other work still needs a person." /></FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {automationFit.map(([title, items], index) => (
              <FadeIn key={title as string} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/35 p-6 sm:p-8">
                  <div className="flex items-center gap-3"><span className={`grid h-9 w-9 place-items-center rounded-lg ${index === 0 ? 'bg-amber-300/10 text-amber-300' : 'bg-zinc-800 text-zinc-400'}`}>{index === 0 ? <Layers3 className="h-4 w-4" /> : <ShieldCheck className="h-4 w-4" />}</span><h3 className="text-xl font-semibold text-white">{title}</h3></div>
                  <div className="mt-6 space-y-3">{(items as string[]).map(item => <div key={item} className="flex items-start gap-3 text-sm leading-6 text-zinc-400">{index === 0 ? <Check className="mt-1 h-4 w-4 shrink-0 text-amber-300" /> : <X className="mt-1 h-4 w-4 shrink-0 text-zinc-600" />}{item}</div>)}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800/80 bg-zinc-900/20 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <FadeIn className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Free Automation Audit</p>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Leave knowing what is worth automating, what is not, and where to start.</h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">In a focused session, we review how a real process currently works, identify where unnecessary handling is happening, and give you a clear picture of what could realistically change.</p>
              </div>
              <div className="space-y-3">
                {['No cost and no commitment', 'Specific to your workflows, not generic advice', 'Honest assessment, including what is not worth automating'].map(item => <div key={item} className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/35 px-4 py-4 text-sm text-zinc-300"><Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />{item}</div>)}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-zinc-800/80 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <FadeIn><SectionHeading eyebrow="What happens next" title="A clear route from operational frustration to useful recommendations." /></FadeIn>
          <div className="mt-12 max-w-3xl">
            {nextSteps.map(([title, copy], index) => (
              <FadeIn key={title} delay={index * 0.04}>
                <div className="grid grid-cols-[48px_1fr] gap-5 border-b border-zinc-800 py-6 first:pt-0 last:border-b-0">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-zinc-700 text-xs font-semibold text-amber-300">0{index + 1}</span>
                  <div><h3 className="font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-7 text-zinc-500">{copy}</p></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="audit-form" className="scroll-mt-24 border-b border-zinc-800/80 bg-zinc-900/20 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
          <FadeIn>
            <div className="lg:sticky lg:top-28">
              <SectionHeading eyebrow="Request your audit" title="Describe the friction, not the solution." copy="You do not need to know what technology you need. Tell us what the team keeps doing manually, where work gets stuck, and which process feels harder to run than it should." />
              <div className="mt-8 space-y-3 text-sm text-zinc-500">
                <p className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-amber-300" />No commitment to a project</p>
                <p className="flex items-center gap-2"><BriefcaseBusiness className="h-4 w-4 text-amber-300" />Built for established businesses with real operations</p>
                <p className="flex items-center gap-2"><FileText className="h-4 w-4 text-amber-300" />Start with one process, not a technical brief</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8">
              {submitted ? (
                <div className="py-8 text-center sm:py-12">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-amber-300/10 text-amber-300"><Check className="h-5 w-5" /></div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-white">Your details are ready for the next step.</h3>
                  <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-zinc-400">This frontend does not send data to a backend yet. When the enquiry workflow is connected, submissions can be delivered automatically. You can use the calendar placeholder below in the meantime.</p>
                  <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-amber-400 px-6 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300">Book Your Intro Call<ArrowRight className="ml-2 h-4 w-4" /></a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Full Name" name="name" error={errors.name} />
                  <FormField label="Business Email" name="email" type="email" error={errors.email} />
                  <FormField label="Company / Business Name" name="company" error={errors.company} />
                  <SelectField label="Industry" name="industry" options={industries} error={errors.industry} />
                  <SelectField label="Team Size" name="teamSize" options={['Just me', '2 to 10', '11 to 50', '51 to 200', '200+']} error={errors.teamSize} />
                  <SelectField label="Which process feels most manual right now?" name="processType" options={['Lead handling', 'Client onboarding', 'Reporting', 'Documents and admin', 'Internal handoffs', 'Approvals', 'Something else']} />
                  <div className="sm:col-span-2">
                    <label htmlFor="challenge" className="mb-2 block text-sm font-medium text-zinc-300">Biggest operational challenge right now</label>
                    <textarea id="challenge" name="challenge" rows={4} placeholder="In a sentence or two, what is the main thing slowing your team down?" className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-300/60 focus:ring-2 focus:ring-amber-300/10" />
                  </div>
                  <div className="sm:col-span-2"><button type="submit" className="group flex min-h-13 w-full items-center justify-center rounded-xl bg-amber-400 px-6 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300">Request My Free Audit<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" /></button></div>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <FadeIn className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Sparkles className="mx-auto h-5 w-5 text-amber-300" />
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">See what is actually worth automating in your business.</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-500">One conversation. No commitment. Real answers.</p>
          <div className="mt-8"><PrimaryLink /></div>
        </FadeIn>
      </section>

      <footer className="border-t border-zinc-800 bg-zinc-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div><p className="font-semibold text-white">Booth Marketing</p><p className="mt-1 text-sm text-zinc-600">AI automation for serious operations.</p></div>
          <p className="text-xs text-zinc-700">© 2026 Booth Marketing. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

function CalculatorInput({ label, value, min, max, prefix, suffix, onChange }: { label: string; value: number; min: number; max: number; prefix?: string; suffix?: string; onChange: (value: number) => void }) {
  return (
    <div>
      <div className="flex items-end justify-between gap-4"><label className="text-sm font-medium text-zinc-300">{label}</label><span className="text-sm font-semibold text-white">{prefix}{value}{suffix ? ` ${suffix}` : ''}</span></div>
      <input aria-label={label} type="range" min={min} max={max} value={value} onChange={(event) => onChange(Number(event.target.value))} className="mt-4 h-1.5 w-full cursor-pointer accent-amber-300" />
      <div className="mt-2 flex justify-between text-[11px] text-zinc-700"><span>{prefix}{min}{suffix ? ` ${suffix}` : ''}</span><span>{prefix}{max}{suffix ? ` ${suffix}` : ''}</span></div>
    </div>
  )
}

function ResultCard({ icon: Icon, label, value, accent = false }: { icon: typeof Clock3; label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
      <Icon className={`h-4 w-4 ${accent ? 'text-amber-300' : 'text-zinc-600'}`} />
      <p className={`mt-4 text-xl font-semibold tracking-[-0.035em] ${accent ? 'text-amber-200' : 'text-white'}`}>{value}</p>
      <p className="mt-1 text-xs leading-5 text-zinc-600">{label}</p>
    </div>
  )
}

function FormField({ label, name, type = 'text', error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-zinc-300">{label}</label>
      <input id={name} name={name} type={type} className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-300/60 focus:ring-2 focus:ring-amber-300/10" />
      {error && <p className="mt-1.5 text-xs text-amber-300">{error}</p>}
    </div>
  )
}

function SelectField({ label, name, options, error }: { label: string; name: string; options: string[]; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-zinc-300">{label}</label>
      <select id={name} name={name} defaultValue="" className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-300/60 focus:ring-2 focus:ring-amber-300/10">
        <option value="" disabled>Select an option</option>
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
      {error && <p className="mt-1.5 text-xs text-amber-300">{error}</p>}
    </div>
  )
}
