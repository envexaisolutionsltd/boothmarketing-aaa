'use client'

import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  LineChart,
  MailCheck,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  X,
} from 'lucide-react'
import { useState } from 'react'

const CTA = 'Book Your 15-Minute Pipeline Audit'

const metrics = [
  ['£3.8M+', 'Pipeline Generated for UK B2B Firms'],
  ['14 Days', 'Average Time to First Booked Sales Call'],
  ['3.8x', 'Average Return on Campaign Spend'],
  ['85%+', 'Qualified Lead Acceptance Rate'],
]

const painRows = [
  ['Your sales team spends hours prospecting', 'Your team focuses on closing while outreach runs in the background.'],
  ['Pipeline depends on referrals and inconsistent activity', 'A defined outbound system creates a steadier flow of qualified conversations.'],
  ['Generic agencies report clicks, opens and impressions', 'The target outcome is qualified B2B sales calls booked directly into your calendar.'],
  ['Internal outreach stops when priorities shift', 'Prospecting continues without relying on somebody finding time for cold outreach.'],
]

const steps = [
  {
    icon: Target,
    title: 'Define the right buyers',
    copy: 'We narrow the market, identify the companies worth pursuing, and define the decision-makers most likely to have a real reason to speak with you.',
  },
  {
    icon: MessageSquareText,
    title: 'Run targeted outreach',
    copy: 'We build and manage focused outbound campaigns designed around relevance, timing and genuine commercial pain rather than mass-volume spam.',
  },
  {
    icon: CalendarDays,
    title: 'Book qualified conversations',
    copy: 'Interested prospects are qualified against the agreed criteria and moved into your calendar so your team can focus on sales conversations, not prospecting admin.',
  },
]

const testimonials = [
  {
    initials: 'MV',
    name: 'Marcus Vance',
    role: 'Founder & MD',
    company: 'Apex Tech Consulting',
    outcome: '+11 Enterprise Calls / Month',
    quote: 'We stopped asking senior salespeople to spend half their week prospecting. The biggest difference was not just more conversations, it was having a pipeline we could actually plan around.',
  },
  {
    initials: 'SJ',
    name: 'Sarah Jenkins',
    role: 'Commercial Director',
    company: 'Vanguard Advisory',
    outcome: '£420k Contract Value Generated',
    quote: 'Previous agencies gave us activity reports. Booth focused on whether the people entering our calendar were genuinely relevant to what we sell. That changed the conversation internally.',
  },
  {
    initials: 'JT',
    name: 'James Thorne',
    role: 'CRO',
    company: 'CloudScale Solutions',
    outcome: '4.2x Pipeline ROI in 90 Days',
    quote: 'The value was predictability. Instead of waiting for referrals or hoping reps made time for outbound, qualified meetings started appearing in the calendar every week.',
  },
]

const faqs = [
  {
    q: 'How do you ensure the booked calls are actually qualified?',
    a: 'We agree qualification criteria before outreach starts, including company profile, decision-maker role, commercial relevance and any non-negotiable fit criteria. The goal is not to maximise meeting volume. It is to create conversations your sales team would genuinely want to take.',
  },
  {
    q: 'How long does it take to see the first booked appointments?',
    a: 'Outbound performance varies by market, offer, deal size and audience. The prototype benchmark shown on this page is 14 days, but a real engagement would set expectations only after reviewing your market, current offer and sales process.',
  },
  {
    q: "We've been burned by marketing agencies before. How are you different?",
    a: 'The system is built around a commercial outcome: qualified sales conversations. We care about targeting, message relevance, qualification and booked meetings rather than hiding behind vanity metrics such as impressions or email opens.',
  },
  {
    q: 'How much time will this require from my team?',
    a: 'The aim is to remove prospecting workload, not create more of it. We need enough input upfront to understand your offer, strongest buyers and qualification criteria. After that, your team should primarily spend time on the qualified conversations that reach the calendar.',
  },
  {
    q: 'What actually happens during the 15-Minute Pipeline Audit?',
    a: 'We look at how you currently generate B2B opportunities, where pipeline is unpredictable, who your strongest buyers are and where outbound could realistically fit. You leave with a clearer view of the gaps in the current pipeline and what a more predictable system would need to address.',
  },
]

function AuditLink({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#book-audit"
      className={`group inline-flex items-center justify-center rounded-xl bg-emerald-500 font-semibold text-slate-950 shadow-[0_0_32px_rgba(16,185,129,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950 ${compact ? 'min-h-11 px-5 text-sm' : 'min-h-14 px-6 text-sm sm:px-7 sm:text-base'}`}
    >
      {compact ? 'Book Audit' : CTA}
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  )
}

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-emerald-400">{eyebrow}</div>
      <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {copy && <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">{copy}</p>}
    </div>
  )
}

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 selection:bg-emerald-400 selection:text-slate-950">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.06),transparent_34%),radial-gradient(circle_at_75%_8%,rgba(255,255,255,0.035),transparent_24%)]" />

      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Booth Marketing home">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-slate-700 bg-slate-900 text-sm font-black tracking-tight text-white">BM</span>
            <span className="text-sm font-semibold tracking-[-0.02em] text-white sm:text-base">Booth Marketing</span>
          </a>
          <AuditLink compact />
        </div>
      </header>

      <section id="top" className="relative z-10 border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-300">
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              Done-for-you B2B lead generation for UK firms
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              Predictable B2B pipeline. <span className="text-slate-400">Zero manual cold outreach.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              Booth Marketing builds and runs targeted outbound campaigns that put qualified B2B sales conversations directly into your calendar, without adding more prospecting workload to your internal team.
            </p>
            <div className="mt-9 flex flex-col items-start gap-4">
              <AuditLink />
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 sm:text-sm">
                <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-400" />No sales pitch</span>
                <span className="flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5 text-emerald-400" />15-min strategy call</span>
                <span className="flex items-center gap-1.5"><LineChart className="h-3.5 w-3.5 text-emerald-400" />100% actionable pipeline roadmap</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 border-b border-slate-800/80 bg-slate-900/25">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
          <div className="mb-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
            <ShieldCheck className="h-3.5 w-3.5" /> Prototype proof placeholders
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map(([value, label]) => (
              <div key={label} className="bg-slate-950 px-6 py-7">
                <div className="text-2xl font-bold tracking-[-0.04em] text-emerald-400 sm:text-3xl">{value}</div>
                <p className="mt-2 text-sm leading-6 text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-b border-slate-800/80 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionTitle
            eyebrow="The problem"
            title="Your sales team should be closing opportunities, not spending hours trying to create them."
            copy="Most growing B2B firms do not have a sales talent problem. They have an inconsistent pipeline-generation system."
          />
          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-800">
            <div className="grid border-b border-slate-800 bg-slate-900/45 text-xs font-bold uppercase tracking-[0.18em] sm:grid-cols-2">
              <div className="border-b border-slate-800 px-5 py-4 text-slate-500 sm:border-b-0 sm:border-r">What happens now</div>
              <div className="px-5 py-4 text-emerald-400">What changes</div>
            </div>
            {painRows.map(([pain, solution]) => (
              <div key={pain} className="grid border-b border-slate-800 last:border-b-0 sm:grid-cols-2">
                <div className="flex gap-3 bg-slate-950 px-5 py-5 text-sm leading-6 text-slate-400 sm:border-r sm:border-slate-800">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-600" />{pain}
                </div>
                <div className="flex gap-3 bg-slate-900/25 px-5 py-5 text-sm leading-6 text-slate-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />{solution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-b border-slate-800/80 bg-slate-900/20 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionTitle
            eyebrow="The Booth Pipeline System"
            title="Three steps between inconsistent outreach and qualified calls in your calendar."
            copy="The system is intentionally simple: choose the right market, create relevant conversations, and move qualified interest into a sales meeting."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {steps.map(({ icon: Icon, title, copy }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-emerald-500/20 bg-emerald-500/10"><Icon className="h-5 w-5 text-emerald-400" /></div>
                  <span className="text-xs font-bold tracking-[0.18em] text-slate-700">0{index + 1}</span>
                </div>
                <h3 className="mt-7 text-xl font-semibold tracking-[-0.025em] text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-b border-slate-800/80 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionTitle
              eyebrow="Results"
              title="Proven-results layout for UK B2B leaders."
              copy="The cards below are frontend placeholders for the production case studies and verified client evidence that will replace them."
            />
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-800 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600">
              <ShieldCheck className="h-3.5 w-3.5" /> Placeholder proof
            </div>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="flex min-h-[360px] flex-col rounded-2xl border border-slate-800 bg-slate-900/30 p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full border border-slate-700 bg-slate-800 text-xs font-bold text-slate-300">{item.initials}</div>
                    <div>
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-white">{item.name}<BadgeCheck className="h-4 w-4 text-slate-600" /></div>
                      <div className="mt-0.5 text-xs text-slate-500">{item.role}, {item.company}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex gap-1 text-emerald-400">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}</div>
                <p className="mt-5 flex-1 text-sm leading-7 text-slate-400">“{item.quote}”</p>
                <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-sm font-semibold text-emerald-400">{item.outcome}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-b border-slate-800/80 bg-slate-900/20 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <SectionTitle
              eyebrow="Frequently Asked Questions"
              title="Everything you need to know before booking your audit."
              copy="The goal is to make the first conversation useful, not to make you sit through a generic agency pitch."
            />
          </div>
          <div className="border-t border-slate-800">
            {faqs.map((item, index) => {
              const open = openFaq === index
              return (
                <div key={item.q} className="border-b border-slate-800">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-sm font-semibold text-white sm:text-base"
                    aria-expanded={open}
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${open ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-slate-500">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
            <p className="mt-6 text-sm text-slate-500">Have a specific question not covered here? Ask us directly on your audit call.</p>
          </div>
        </div>
      </section>

      <section id="book-audit" className="relative z-10 scroll-mt-20 border-b border-slate-800/80 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="overflow-hidden rounded-3xl border border-emerald-500/20 bg-[linear-gradient(135deg,rgba(16,185,129,0.09),rgba(15,23,42,0.75)_45%,rgba(2,6,23,1))] p-6 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-400">Book your pipeline audit</div>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">Ready to fill your pipeline with qualified B2B buyers?</h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">Use the calendar to choose a 15-minute slot. We will look at your current lead flow, target market and where a more predictable outbound system could fit.</p>
                <div className="mt-7 grid gap-3 text-sm text-slate-400">
                  <span className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" />No pitch-heavy discovery call</span>
                  <span className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" />Clear 15-minute structure</span>
                  <span className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" />Actionable next-step recommendations</span>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-950/90 p-5 shadow-2xl shadow-black/20 sm:p-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <div className="text-sm font-semibold text-white">15-Minute Pipeline Audit</div>
                    <div className="mt-1 text-xs text-slate-500">Calendar embed placeholder</div>
                  </div>
                  <CalendarDays className="h-5 w-5 text-emerald-400" />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Mon', 'Tue', 'Wed', 'Thu'].map((day, index) => (
                    <button key={`${day}-${index}`} type="button" className="rounded-lg border border-slate-800 bg-slate-900 px-2 py-3 text-center transition hover:border-emerald-500/40 hover:bg-emerald-500/5">
                      <span className="block text-[10px] uppercase tracking-wider text-slate-600">{day}</span>
                      <span className="mt-1 block text-sm font-semibold text-slate-300">{index + 7}</span>
                    </button>
                  ))}
                </div>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {['10:00', '11:30', '14:00', '15:30'].map((time) => <button key={time} type="button" className="rounded-lg border border-slate-800 px-3 py-2.5 text-xs font-medium text-slate-400 transition hover:border-emerald-500/40 hover:text-emerald-400">{time}</button>)}
                </div>
                <button type="button" className="mt-5 flex min-h-12 w-full items-center justify-center rounded-xl bg-emerald-500 px-5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">{CTA}<ArrowRight className="ml-2 h-4 w-4" /></button>
                <p className="mt-3 text-center text-[11px] leading-5 text-slate-600">Replace this block with Calendly, Cal.com or your preferred booking embed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-9 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-lg border border-slate-800 bg-slate-900 text-[11px] font-black text-white">BM</span>
              <span className="text-sm font-semibold text-white">Booth Marketing</span>
            </div>
            <p className="mt-3 text-xs text-slate-600">© 2026 Booth Marketing. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-5 text-xs text-slate-600">
            <a href="#" className="transition hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="transition hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
