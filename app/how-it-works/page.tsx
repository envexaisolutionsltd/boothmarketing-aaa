'use client'

import { ArrowLeft, ArrowRight, Check, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const steps = [
  ['01', 'Understand the operation', 'Map how the workflow really works today, including people, systems, decisions, exceptions and handoffs.'],
  ['02', 'Find the friction', 'Separate useful human judgment from repetitive copying, chasing, checking, updating and rework.'],
  ['03', 'Design the better workflow', 'Decide what should change, what should stay human and where automation would genuinely improve the operation.'],
]

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#090a0b] text-[#f4f4f3]">
      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#090a0b]/85 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[64px] w-[min(1080px,calc(100%-28px))] items-center justify-between gap-3">
          <Link href="/" className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#d8cbb7]"><ArrowLeft className="h-4 w-4" />Home</Link>
          <img src="/booth-marketing-logo.png" alt="Booth Marketing" className="w-[118px] sm:w-[145px]" />
          <Link href="/automation-audit" className="inline-flex min-h-11 items-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-4 text-[12px] font-semibold text-[#151515]">Request Audit</Link>
        </div>
      </header>

      <section className="border-b border-white/[0.055] py-12 sm:py-16">
        <div className="mx-auto w-[min(1080px,calc(100%-28px))]">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#d8cbb7]">How It Works</p>
          <h1 className="mt-4 max-w-[800px] text-[clamp(40px,9vw,62px)] font-semibold leading-[1.01] tracking-[-0.055em]">Understand the operation before touching the technology.</h1>
          <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-[#929399]">The quickest way to build the wrong automation is to automate a workflow nobody has properly understood first.</p>
        </div>
      </section>

      <section className="border-b border-white/[0.055] bg-[#0b0d0e] py-10 sm:py-14">
        <div className="mx-auto w-[min(1080px,calc(100%-28px))]">
          <div className="overflow-hidden rounded-[18px] border border-white/[0.07] bg-white/[0.025]">
            {steps.map(([number, title, copy]) => <div key={number} className="grid grid-cols-[42px_1fr] gap-3 border-b border-white/[0.07] p-5 last:border-b-0 sm:grid-cols-[60px_220px_1fr] sm:items-center"><span className="text-[9px] font-bold tracking-[0.16em] text-[#77787e]">{number}</span><p className="text-[16px] font-semibold text-[#e2e2e4]">{title}</p><p className="mt-1 text-[13px] leading-6 text-[#808187] sm:mt-0">{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.055] py-10 sm:py-14">
        <div className="mx-auto w-[min(1080px,calc(100%-28px))]">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#d8cbb7]">Current vs improved</p>
          <h2 className="mt-4 max-w-[780px] text-[clamp(32px,7vw,48px)] font-semibold leading-[1.05] tracking-[-0.045em]">A better operation should not require tearing apart everything that already works.</h2>
          <div className="mt-7 grid gap-4 lg:grid-cols-2">
            <Flow title="Current state" accent={false} steps={['Enquiry arrives', 'Employee copies information', 'Record is updated', 'Colleague is messaged', 'Another system is updated', 'Report is assembled']} />
            <Flow title="Improved state" accent steps={['Enquiry captured', 'Correct record updated', 'Task triggered', 'Human handles the decision', 'Next action follows', 'Reporting stays current']} />
          </div>
          <div className="mt-5 grid gap-2 sm:grid-cols-3">{['Keep useful systems', 'Reduce unnecessary employee actions', 'Avoid unnecessary new dashboards'].map(item => <div key={item} className="rounded-xl border border-white/[0.07] bg-[#0d0f10] p-4 text-[13px] text-[#a0a1a6]"><Check className="mb-2 h-4 w-4 text-[#d8cbb7]" />{item}</div>)}</div>
        </div>
      </section>

      <section className="border-b border-white/[0.055] bg-[#0b0d0e] py-10 sm:py-14">
        <div className="mx-auto w-[min(1080px,calc(100%-28px))]">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#d8cbb7]">Operating model</p>
          <h2 className="mt-4 text-[clamp(32px,7vw,48px)] font-semibold tracking-[-0.045em]">Manual → Connected → Adaptive</h2>
          <div className="mt-7 overflow-hidden rounded-[18px] border border-white/[0.07] bg-white/[0.025]">
            {[
              ['Manual', ['Person', 'Person', 'Person', 'System']],
              ['Connected', ['Person', 'System', 'Person', 'System']],
              ['Adaptive', ['System', 'System', 'Human decision', 'System']],
            ].map(([label, nodes], row) => <div key={String(label)} className={`grid gap-4 border-b border-white/[0.07] p-4 last:border-b-0 sm:grid-cols-[150px_1fr] sm:items-center ${row === 2 ? 'bg-[#190f11]/38' : ''}`}><p className="text-[14px] font-semibold text-[#d8d8da]">{String(label)}</p><div className="flex flex-wrap items-center gap-2">{(nodes as string[]).map((node, index, all) => <div key={`${node}-${index}`} className="flex items-center gap-2"><span className={`rounded-lg border px-3 py-2 text-[11px] ${node === 'Human decision' ? 'border-[#d92f3c]/30 bg-[#190f11] text-[#ead9dc]' : node === 'System' ? 'border-white/[0.08] bg-[#0b0d0e] text-[#aaaab0]' : 'border-white/[0.06] bg-white/[0.02] text-[#85868c]'}`}>{node}</span>{index < all.length - 1 && <ChevronRight className="h-3.5 w-3.5 text-[#66676d]" />}</div>)}</div></div>)}
          </div>
          <p className="mt-5 text-[13px] leading-6 text-[#85868c]">The future is not businesses without people. It is businesses where people stop manually moving work a system can reliably handle.</p>
        </div>
      </section>

      <section className="py-12 text-center sm:py-16">
        <div className="mx-auto w-[min(760px,calc(100%-28px))]">
          <h2 className="text-[clamp(34px,7.5vw,50px)] font-semibold leading-[1.04] tracking-[-0.048em]">Want to know where this fits in your business?</h2>
          <p className="mt-4 text-[14px] leading-7 text-[#8d8e94]">Start with one workflow. We will tell you what is worth changing, what should stay human and whether automation is worth pursuing.</p>
          <Link href="/automation-audit" className="mt-6 inline-flex min-h-[50px] items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-5 text-[13px] font-semibold text-[#151515]">Request an Automation Audit<ArrowRight className="ml-2.5 h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  )
}

function Flow({ title, steps, accent }: { title: string; steps: string[]; accent: boolean }) {
  return <div className={`rounded-[17px] border p-5 ${accent ? 'border-[#d92f3c]/18 bg-[#190f11]/45' : 'border-white/[0.07] bg-white/[0.025]'}`}><p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#cfc2ae]">{title}</p><div className="mt-4 space-y-2">{steps.map((step, index) => <div key={step} className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-[#0b0d0e]/68 px-3 py-3"><span className="text-[8px] text-[#77787e]">0{index + 1}</span><span className="text-[12px] text-[#999aa0]">{step}</span></div>)}</div></div>
}
