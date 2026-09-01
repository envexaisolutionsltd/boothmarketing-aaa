'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Check, Clock3, Gauge, ShieldCheck, Users, X } from 'lucide-react'
import { FormEvent, ReactNode, useMemo, useState } from 'react'

const CTA = 'Request an Automation Audit'
const CALENDAR_URL = 'https://cal.com/your-agency/audit'

const frictionPoints = [
  ['The same information gets entered twice', 'Details move between email, spreadsheets, CRM records and internal tools by hand.'],
  ['People keep chasing the next step', 'Work moves because somebody remembers to follow up, check a status or remind another person.'],
  ['Reporting has to be rebuilt manually', 'Management visibility depends on somebody collecting information before you can see what is happening.'],
  ['Onboarding repeats the same admin', 'Every new client creates familiar emails, folders, forms, documents and internal setup tasks.'],
]

const approach = [
  ['Understand the current system', 'We map how the business actually operates today, including the people, handoffs, decisions and exceptions involved.'],
  ['Find the friction', 'We separate useful human judgment from copying, chasing, updating, checking and other repetitive handling.'],
  ['Design practical automations', 'We propose specific changes that fit the real workflow instead of forcing technology into places it does not belong.'],
]

const nextSteps = [
  ['Submit your details', 'Tell us about the business and the process that feels more manual than it should.'],
  ['We review the workflow', 'We look at the context before the conversation so the discussion starts in the right place.'],
  ['Short fit call', 'A brief call confirms whether the process is suitable for a deeper Automation Audit.'],
  ['Audit and recommendations', 'We work through the workflow and give you a clear view of what is worth automating, what is not, and where to start.'],
]

const industries = ['Professional Services', 'E-commerce', 'Healthcare', 'Logistics', 'Financial Services', 'SaaS / Tech', 'Real Estate', 'Agency / Consulting', 'Other']

function FadeIn({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay, ease: 'easeOut' }} className={className}>{children}</motion.div>
}

function PrimaryLink({ compact = false, children = CTA }: { compact?: boolean; children?: ReactNode }) {
  return <a href="#audit-form" className={`group inline-flex items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] font-semibold text-[#151515] transition duration-200 hover:-translate-y-px hover:border-[#f8edda] hover:bg-[#f8edda] ${compact ? 'min-h-11 px-5 text-sm' : 'min-h-[50px] px-6 text-sm'}`}>{children}<ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-0.5" /></a>
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="max-w-[830px]">
    <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#d8cbb7]">{eyebrow}</p>
    <h2 className="mt-5 text-[clamp(36px,4vw,52px)] font-semibold leading-[1.06] tracking-[-0.045em] text-[#f4f4f3]">{title}</h2>
    {copy && <p className="mt-6 max-w-[730px] text-[17px] leading-[1.72] text-[#929399]">{copy}</p>}
  </div>
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
    for (const field of ['name', 'email', 'company', 'industry', 'teamSize']) if (!String(form.get(field) || '').trim()) nextErrors[field] = 'Required'
    const email = String(form.get('email') || '')
    if (email && !/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = 'Enter a valid email'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) setSubmitted(true)
  }

  return <main className="min-h-screen overflow-x-hidden bg-[#090a0b] text-[#f4f4f3] selection:bg-[#efe3cf] selection:text-[#151515]">
    <header className="sticky top-0 z-50 border-b border-[#1a1c1e] bg-[#090a0b]/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] w-[min(1112px,calc(100%-40px))] items-center justify-between gap-8">
        <a href="#top" className="flex h-[67px] w-[156px] items-center overflow-hidden" aria-label="Booth Marketing home"><img src="/booth-marketing-logo.png" alt="Booth Marketing" className="block w-[156px] object-contain" /></a>
        <PrimaryLink compact />
      </div>
    </header>

    <section id="top" className="min-h-[575px] border-b border-[#1a1c1e] bg-[radial-gradient(circle_at_49%_41%,rgba(255,255,255,0.018),transparent_39%)]">
      <div className="mx-auto w-[min(1112px,calc(100%-40px))] pt-12 sm:pt-14 lg:pt-16">
        <FadeIn className="max-w-[790px]">
          <div className="inline-flex min-h-[37px] items-center gap-3 rounded-full border border-[#303235] px-4 text-[10.5px] font-extrabold uppercase tracking-[0.28em] text-[#d8cbb7]"><span className="h-1.5 w-1.5 rounded-full bg-[#d92f3c]" />For established businesses with real operations</div>
          <h1 className="mt-8 max-w-[760px] text-[clamp(47px,5.35vw,68px)] font-semibold leading-[0.99] tracking-[-0.06em] text-[#f4f4f3]">Your business has grown. <span className="text-[#ceced1]">Too much of the operation is still being held together manually.</span></h1>
          <p className="mt-7 max-w-[680px] text-[18px] leading-[1.58] text-[#b1b1b6]">Booth Marketing helps established businesses identify where repetitive work, disconnected processes and manual handoffs are consuming capacity, then shows you what is actually worth automating.</p>
          <div className="mt-7"><PrimaryLink /></div>
          <p className="mt-3 text-sm text-[#626369]">No technical brief needed. No commitment. Start with one real workflow.</p>
        </FadeIn>
      </div>
    </section>

    <section className="border-b border-[#1a1c1e] py-16 sm:py-20">
      <div className="mx-auto w-[min(1112px,calc(100%-40px))]">
        <FadeIn><SectionHeading eyebrow="Does this sound familiar?" title="The problems rarely look dramatic. They repeat quietly across the whole operation." copy="One copied field or one forgotten follow-up is small. The real cost appears when the same friction happens across every lead, client, job and internal handoff." /></FadeIn>
        <div className="mt-11 grid gap-4 md:grid-cols-2">
          {frictionPoints.map(([title, copy], index) => <FadeIn key={title} delay={index * 0.04}><article className="h-full rounded-[15px] border border-[#2b2d30] bg-[#0f1113] p-7 sm:p-8"><small className="text-[10px] text-[#c9bca8]">0{index + 1}</small><h3 className="mt-7 text-[18px] font-semibold leading-[1.32] tracking-[-0.025em] text-[#ededed]">{title}</h3><p className="mt-4 text-sm leading-[1.7] text-[#77787f]">{copy}</p></article></FadeIn>)}
        </div>
        <div className="mt-7 flex min-h-[58px] items-center rounded-xl border-l-2 border-[#d92f3c] bg-[#190f11] px-6 text-[15px] text-[#bdb8ba]">If the business only runs smoothly because good people remember everything, the process is carrying more risk than it should.</div>
      </div>
    </section>

    <section className="border-b border-[#1a1c1e] bg-[#0d0f10] py-16 sm:py-20">
      <div className="mx-auto grid w-[min(1112px,calc(100%-40px))] gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <FadeIn><SectionHeading eyebrow="Why this happens" title="Your software may be fine. The gaps between it are where people lose time." /></FadeIn>
        <FadeIn delay={0.08}><div className="overflow-hidden rounded-[17px] border border-[#2b2d30] bg-[#0b0d0e]">
          {[
            ['Information arrives', 'Email, forms, calls, documents'],
            ['Someone interprets it', 'Reads, sorts, decides, copies'],
            ['Another system gets updated', 'CRM, spreadsheet, folder, project tool'],
            ['Someone remembers the next step', 'Assign, chase, notify, report'],
          ].map(([title, copy], index) => <div key={title} className="grid grid-cols-[46px_1fr] gap-3 border-b border-[#232528] px-6 py-4 last:border-0"><span className="pt-1 text-[10px] text-[#c7b9a4]">0{index + 1}</span><div><p className="font-medium text-[#e8e8e8]">{title}</p><p className="mt-1 text-sm text-[#626369]">{copy}</p></div></div>)}
          <p className="border-t border-[#232528] px-6 py-4 text-sm leading-7 text-[#999aa0]">Your people should use judgment where it matters. They should not have to be the connection between every system and next step.</p>
        </div></FadeIn>
      </div>
    </section>

    <section className="border-b border-[#1a1c1e] py-20">
      <div className="mx-auto w-[min(1112px,calc(100%-40px))]">
        <FadeIn><SectionHeading eyebrow="How Booth Marketing approaches it" title="Understand the process before touching the technology." copy="The quickest way to build the wrong automation is to automate a workflow nobody has properly understood first." /></FadeIn>
        <div className="mt-11 grid gap-5 lg:grid-cols-3">
          {approach.map(([title, copy], index) => <FadeIn key={title} delay={index * 0.05}><article className="h-full min-h-[230px] rounded-[15px] border border-[#2b2d30] bg-[#0f1113] p-7"><span className="grid h-10 w-10 place-items-center rounded-lg border border-[#3a3c3f] text-[11px] text-[#d2c5b1]">0{index + 1}</span><h3 className="mt-7 text-[18px] font-semibold tracking-[-0.03em]">{title}</h3><p className="mt-4 text-sm leading-[1.72] text-[#77787e]">{copy}</p></article></FadeIn>)}
        </div>
        <div className="mt-6 flex flex-col gap-3 rounded-[15px] border border-[#2b2d30] bg-[#0d0f10] px-6 py-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#c9bca8]">You decide what happens next</p><p className="mt-2 text-sm text-[#929399]">You leave with a clear view of what is worth changing and what should stay human. There is no pressure to continue into a build.</p></div><PrimaryLink compact /></div>
      </div>
    </section>

    <section className="border-b border-[#1a1c1e] bg-[#0d0f10] py-20">
      <div className="mx-auto w-[min(1112px,calc(100%-40px))]">
        <FadeIn><SectionHeading eyebrow="Operational Cost Calculator" title="See what repetitive work may already be costing the business." copy="Use your own numbers to estimate how much staff capacity is tied up in repetitive operational work. This is an illustrative scenario, not a savings guarantee." /></FadeIn>
        <div className="mt-11 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <FadeIn><div className="rounded-[17px] border border-[#2b2d30] bg-[#0b0d0e] p-7"><div className="space-y-6"><CalculatorInput label="Team members doing repetitive admin" value={teamMembers} min={1} max={50} suffix="people" onChange={setTeamMembers} /><CalculatorInput label="Average loaded hourly staff cost" value={hourlyCost} min={10} max={100} prefix="£" suffix="/ hr" onChange={setHourlyCost} /><CalculatorInput label="Hours per person spent on repetitive work each week" value={hoursPerWeek} min={1} max={30} suffix="hrs" onChange={setHoursPerWeek} /><CalculatorInput label="Working weeks per year" value={weeksPerYear} min={40} max={52} suffix="weeks" onChange={setWeeksPerYear} /><CalculatorInput label="Reduction scenario" value={reduction} min={10} max={80} suffix="%" onChange={setReduction} /></div></div></FadeIn>
          <FadeIn delay={0.08}><div className="rounded-[17px] border border-[#2b2d30] bg-[#0f1113] p-7 sm:p-8"><p className="text-[10.5px] font-extrabold uppercase tracking-[0.28em] text-[#d8cbb7]">Based on your inputs</p><div className="mt-6 rounded-[15px] border border-[#2b2d30] bg-[#0b0d0e] p-6"><BarChart3 className="h-4 w-4 text-[#d92f3c]" /><p className="mt-5 text-[13px] text-[#77787e]">Estimated annual staff cost tied to this repetitive work</p><p className="mt-2 text-[clamp(42px,5vw,64px)] font-semibold leading-none tracking-[-0.055em] text-[#efe3cf]">{currency(calculator.annualCost)}</p></div><div className="mt-4 grid gap-4 sm:grid-cols-3"><ResultCard icon={Clock3} label="Repetitive work" value={`${number(calculator.weeklyHours)} hrs / week`} /><ResultCard icon={Gauge} label="Estimated monthly staff cost" value={currency(calculator.monthlyCost)} /><ResultCard icon={Users} label="Annual hours consumed" value={`${number(calculator.annualHours)} hrs`} /></div>
            <div className="mt-5 rounded-xl border-l-2 border-[#d92f3c] bg-[#190f11] p-5"><p className="text-sm font-medium text-[#d9ced0]">At a {reduction}% reduction scenario</p><div className="mt-4 grid gap-4 sm:grid-cols-2"><div><p className="text-2xl font-semibold tracking-[-0.04em] text-[#f4f4f3]">{currency(calculator.recoveredCapacity)}</p><p className="mt-1 text-xs text-[#77787e]">potential annual staff capacity released</p></div><div><p className="text-2xl font-semibold tracking-[-0.04em] text-[#f4f4f3]">{number(calculator.recoveredHours)} hrs</p><p className="mt-1 text-xs text-[#77787e]">potential annual time returned to the team</p></div></div></div>
            <p className="mt-5 text-xs leading-5 text-[#626369]">Illustrative estimate based solely on the figures you entered. It does not represent guaranteed savings or assume every part of the work can or should be automated.</p><div className="mt-5 border-t border-[#232528] pt-5"><p className="text-sm leading-6 text-[#999aa0]">The useful question is not how much of this cost can disappear. It is which parts of the process actually require a person.</p><div className="mt-5"><PrimaryLink /></div></div></div></FadeIn>
        </div>
      </div>
    </section>

    <section className="border-b border-[#1a1c1e] py-20">
      <div className="mx-auto w-[min(1112px,calc(100%-40px))]">
        <FadeIn><SectionHeading eyebrow="What is worth automating" title="Automate repetition. Keep judgment, context and relationships human." copy="A good automation strategy is selective. Some work becomes more reliable when the process handles it. Other work still needs a person." /></FadeIn>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <FadeIn><FitCard title="Strong candidates" items={['Repeated data entry', 'Routine follow-up and reminders', 'Document creation from known information', 'Rules-based handoffs', 'Recurring reporting and status updates']} positive /></FadeIn>
          <FadeIn delay={0.06}><FitCard title="Usually stays human" items={['Commercial judgment', 'Sensitive conversations', 'Relationship-heavy decisions', 'Unusual exceptions', 'Work where context changes constantly']} /></FadeIn>
        </div>
      </div>
    </section>

    <section className="border-b border-[#1a1c1e] bg-[#0d0f10] py-16 sm:py-20">
      <div className="mx-auto w-[min(1112px,calc(100%-40px))]">
        <FadeIn className="rounded-[17px] border border-[#2b2d30] bg-[#0b0d0e] p-8 sm:p-10"><div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center"><div><p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#d8cbb7]">Free Automation Audit</p><h2 className="mt-5 text-[clamp(36px,4vw,50px)] font-semibold leading-[1.06] tracking-[-0.045em]">Leave knowing what is worth automating, what is not, and where to start.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-[#929399]">In a focused session, we review how a real process currently works, identify where unnecessary handling is happening, and give you a clear picture of what could realistically change.</p></div><div className="space-y-3">{['No cost and no commitment', 'Specific to your workflows, not generic advice', 'Honest assessment, including what is not worth automating'].map(item => <div key={item} className="flex items-start gap-3 rounded-xl border border-[#2b2d30] bg-[#0f1113] px-4 py-4 text-sm text-[#bdbdc1]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#d8cbb7]" />{item}</div>)}</div></div></FadeIn>
      </div>
    </section>

    <section className="border-b border-[#1a1c1e] py-16 sm:py-20">
      <div className="mx-auto w-[min(1112px,calc(100%-40px))]">
        <FadeIn><SectionHeading eyebrow="What happens next" title="A clear route from operational frustration to useful recommendations." /></FadeIn>
        <div className="mt-10 border-t border-[#232528]">{nextSteps.map(([title, copy], index) => <FadeIn key={title} delay={index * 0.04}><div className="grid gap-3 border-b border-[#232528] py-5 md:grid-cols-[62px_minmax(200px,0.72fr)_1.28fr]"><small className="pt-1 text-[10px] text-[#c7b9a4]">0{index + 1}</small><h3 className="text-[17px] font-semibold text-[#e8e8e8]">{title}</h3><p className="max-w-[620px] text-sm leading-[1.65] text-[#7c7d82]">{copy}</p></div></FadeIn>)}</div>
      </div>
    </section>

    <section id="audit-form" className="scroll-mt-24 border-b border-[#1a1c1e] bg-[#0d0f10] py-20">
      <div className="mx-auto grid w-[min(1112px,calc(100%-40px))] gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <FadeIn><div className="lg:sticky lg:top-28"><SectionHeading eyebrow="Request your audit" title="Describe the friction, not the solution." copy="You do not need to know what technology you need. Tell us what the team keeps doing manually, where work gets stuck, and which process feels harder to run than it should." /><div className="mt-7 space-y-3 text-sm text-[#77787e]"><p className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#d8cbb7]" />No commitment to a project</p><p className="flex items-center gap-2"><Users className="h-4 w-4 text-[#d8cbb7]" />Built for established businesses with real operations</p></div></div></FadeIn>
        <FadeIn delay={0.08}><div className="rounded-[17px] border border-[#2b2d30] bg-[#0b0d0e] p-6 sm:p-8">{submitted ? <div className="py-10 text-center"><div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-[#3a3c3f] text-[#d8cbb7]"><Check className="h-5 w-5" /></div><h3 className="mt-5 text-2xl font-semibold">Ready for the next step.</h3><p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[#929399]">Online submission is not connected yet. You can use the booking link below to arrange the intro call.</p><a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-[50px] items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-6 text-sm font-semibold text-[#151515] hover:bg-[#f8edda]">Book Your Intro Call<ArrowRight className="ml-3 h-4 w-4" /></a></div> : <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2"><FormField label="Full Name" name="name" error={errors.name} /><FormField label="Business Email" name="email" type="email" error={errors.email} /><FormField label="Company / Business Name" name="company" error={errors.company} /><SelectField label="Industry" name="industry" options={industries} error={errors.industry} /><SelectField label="Team Size" name="teamSize" options={['Just me', '2 to 10', '11 to 50', '51 to 200', '200+']} error={errors.teamSize} /><SelectField label="Which process feels most manual right now?" name="processType" options={['Lead handling', 'Client onboarding', 'Reporting', 'Documents and admin', 'Internal handoffs', 'Approvals', 'Something else']} /><div className="sm:col-span-2"><label htmlFor="challenge" className="mb-2 block text-sm font-medium text-[#d8d8da]">Biggest operational challenge right now</label><textarea id="challenge" name="challenge" rows={4} placeholder="In a sentence or two, what is the main thing slowing your team down?" className="w-full resize-none rounded-lg border border-[#303235] bg-[#111315] px-4 py-3 text-sm text-white outline-none placeholder:text-[#55575d] focus:border-[#65666a]" /></div><div className="sm:col-span-2"><button type="submit" className="flex min-h-[50px] w-full items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-6 text-sm font-semibold text-[#151515] transition hover:bg-[#f8edda]">Request My Free Audit<ArrowRight className="ml-3 h-4 w-4" /></button></div></form>}</div></FadeIn>
      </div>
    </section>

    <section className="flex min-h-[330px] items-center border-b border-[#1a1c1e] bg-[#0d0f10] text-center"><FadeIn className="mx-auto flex w-[min(1112px,calc(100%-40px))] flex-col items-center"><p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#d8cbb7]">Automation Audit</p><h2 className="mt-6 max-w-[830px] text-[clamp(36px,4vw,50px)] font-semibold leading-[1.06] tracking-[-0.045em]">See what is actually worth automating in your business.</h2><p className="mt-5 text-[16px] text-[#929399]">One conversation. No commitment. Real answers.</p><div className="mt-7"><PrimaryLink /></div></FadeIn></section>

    <footer className="border-t border-[#1a1c1e] bg-[#090a0b]"><div className="mx-auto flex w-[min(1112px,calc(100%-40px))] flex-col gap-6 py-9 sm:flex-row sm:items-center sm:justify-between"><div><img src="/booth-marketing-logo.png" alt="Booth Marketing" className="w-[145px] object-contain" /><p className="mt-2 text-sm text-[#626369]">AI automation for serious operations.</p></div><p className="text-xs text-[#55575d]">© 2026 Booth Marketing. All rights reserved.</p></div></footer>
  </main>
}

function CalculatorInput({ label, value, min, max, prefix, suffix, onChange }: { label: string; value: number; min: number; max: number; prefix?: string; suffix?: string; onChange: (value: number) => void }) {
  return <div><div className="flex items-end justify-between gap-4"><label className="text-sm font-medium text-[#d8d8da]">{label}</label><span className="text-sm font-semibold text-[#f4f4f3]">{prefix}{value}{suffix ? ` ${suffix}` : ''}</span></div><input aria-label={label} type="range" min={min} max={max} value={value} onChange={e => onChange(Number(e.target.value))} className="mt-4 h-1.5 w-full cursor-pointer accent-[#d92f3c]" /><div className="mt-2 flex justify-between text-[11px] text-[#55575d]"><span>{prefix}{min}{suffix ? ` ${suffix}` : ''}</span><span>{prefix}{max}{suffix ? ` ${suffix}` : ''}</span></div></div>
}

function ResultCard({ icon: Icon, label, value }: { icon: typeof Clock3; label: string; value: string }) {
  return <div className="rounded-xl border border-[#2b2d30] bg-[#0b0d0e] p-5"><Icon className="h-4 w-4 text-[#626369]" /><p className="mt-4 text-lg font-semibold tracking-[-0.035em] text-[#f4f4f3]">{value}</p><p className="mt-1 text-xs leading-5 text-[#626369]">{label}</p></div>
}

function FitCard({ title, items, positive = false }: { title: string; items: string[]; positive?: boolean }) {
  return <div className="h-full rounded-[15px] border border-[#2b2d30] bg-[#0f1113] p-7 sm:p-8"><h3 className="text-xl font-semibold text-[#f4f4f3]">{title}</h3><div className="mt-6 space-y-3">{items.map(item => <div key={item} className="flex items-start gap-3 text-sm leading-6 text-[#77787e]">{positive ? <Check className="mt-1 h-4 w-4 shrink-0 text-[#d8cbb7]" /> : <X className="mt-1 h-4 w-4 shrink-0 text-[#626369]" />}{item}</div>)}</div></div>
}

function FormField({ label, name, type = 'text', error }: { label: string; name: string; type?: string; error?: string }) {
  return <div><label htmlFor={name} className="mb-2 block text-sm font-medium text-[#d8d8da]">{label}</label><input id={name} name={name} type={type} className="w-full rounded-lg border border-[#303235] bg-[#111315] px-4 py-3 text-sm text-white outline-none focus:border-[#65666a]" />{error && <p className="mt-1.5 text-xs text-[#d8cbb7]">{error}</p>}</div>
}

function SelectField({ label, name, options, error }: { label: string; name: string; options: string[]; error?: string }) {
  return <div><label htmlFor={name} className="mb-2 block text-sm font-medium text-[#d8d8da]">{label}</label><select id={name} name={name} defaultValue="" className="w-full rounded-lg border border-[#303235] bg-[#111315] px-4 py-3 text-sm text-white outline-none focus:border-[#65666a]"><option value="" disabled>Select an option</option>{options.map(option => <option key={option} value={option}>{option}</option>)}</select>{error && <p className="mt-1.5 text-xs text-[#d8cbb7]">{error}</p>}</div>
}
