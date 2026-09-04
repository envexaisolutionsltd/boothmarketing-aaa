'use client'

import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import { FormEvent, useState } from 'react'

const CALENDAR_URL = 'https://cal.com/your-agency/audit'
const processOptions = ['Lead handling', 'Client onboarding', 'Reporting', 'Internal admin', 'Documents', 'Approvals', 'Customer updates', 'Internal handoffs', 'Not sure']

export default function AuditPage() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

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
    <main className="min-h-screen bg-[#090a0b] text-[#f4f4f3]">
      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#090a0b]/85 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[64px] w-[min(1080px,calc(100%-28px))] items-center justify-between gap-3">
          <Link href="/" className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#d8cbb7]"><ArrowLeft className="h-4 w-4" />Home</Link>
          <img src="/booth-marketing-logo.png" alt="Booth Marketing" className="w-[118px] sm:w-[145px]" />
          <Link href="/calculator" className="text-[12px] font-semibold text-[#9b9ca2] hover:text-white">Calculator</Link>
        </div>
      </header>

      <section className="border-b border-white/[0.055] py-12 sm:py-16">
        <div className="mx-auto w-[min(1080px,calc(100%-28px))]">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#d8cbb7]">Free Automation Audit</p>
          <h1 className="mt-4 max-w-[860px] text-[clamp(40px,9vw,62px)] font-semibold leading-[1.01] tracking-[-0.055em]">Leave knowing what is worth automating, what is not, and where to start.</h1>
          <p className="mt-5 max-w-[760px] text-[15px] leading-7 text-[#929399]">In a focused 45-minute session, we review one meaningful workflow, identify where unnecessary manual work is happening and show you what could realistically change.</p>
          <div className="mt-5 flex flex-wrap gap-2">{['45 minutes', 'No cost', 'No commitment', 'Existing systems considered first'].map(item => <span key={item} className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[11px] text-[#9b9ca2]">{item}</span>)}</div>
        </div>
      </section>

      <section className="border-b border-white/[0.055] bg-[#0b0d0e] py-10 sm:py-14">
        <div className="mx-auto w-[min(1080px,calc(100%-28px))]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[
            ['01', 'Where time is being lost'],
            ['02', 'What should stay human'],
            ['03', 'What could be improved'],
            ['04', 'Whether the opportunity is worth pursuing'],
          ].map(([number, text]) => <div key={number} className="rounded-[15px] border border-white/[0.07] bg-white/[0.025] p-5"><span className="text-[9px] font-bold tracking-[0.17em] text-[#77787e]">{number}</span><p className="mt-3 text-[14px] font-semibold leading-6 text-[#dfdfe1]">{text}</p></div>)}</div>
          <div className="mt-5 rounded-[16px] border border-[#d92f3c]/18 bg-[#190f11]/50 p-5"><p className="text-[15px] font-semibold text-[#e5e0e1]">If the right answer is not to automate something, we will tell you.</p><p className="mt-2 text-[13px] leading-6 text-[#8e8386]">The Audit is designed to give you clarity, not to force the business into an implementation project.</p></div>
        </div>
      </section>

      <section className="border-b border-white/[0.055] py-10 sm:py-14">
        <div className="mx-auto grid w-[min(1080px,calc(100%-28px))] gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#d8cbb7]">What happens next</p>
            <h2 className="mt-4 text-[clamp(32px,7vw,46px)] font-semibold leading-[1.05] tracking-[-0.045em]">Describe the friction. You do not need to know the solution.</h2>
            <div className="mt-6 space-y-2">{[
              ['01', 'Tell us what feels manual'],
              ['02', 'Book a short intro call'],
              ['03', 'Complete the Automation Audit'],
              ['04', 'Decide what happens next'],
            ].map(([number, text]) => <div key={number} className="flex items-center gap-3 border-b border-white/[0.07] py-3"><span className="text-[9px] font-bold tracking-[0.16em] text-[#77787e]">{number}</span><p className="text-[13px] text-[#aaaab0]">{text}</p></div>)}</div>
          </div>

          <div className="rounded-[18px] border border-white/[0.08] bg-white/[0.035] p-5 backdrop-blur-xl sm:p-6">
            {submitted ? (
              <div className="py-10 text-center"><div className="mx-auto grid h-11 w-11 place-items-center rounded-full border border-[#d92f3c]/24 bg-[#190f11]"><Check className="h-4 w-4 text-[#efe3cf]" /></div><h3 className="mt-4 text-[24px] font-semibold">Your audit details are ready.</h3><p className="mx-auto mt-2 max-w-md text-[13px] leading-6 text-[#8d8e94]">The next step is to book a short intro call. This prototype has not sent or stored your form data.</p><a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-[50px] items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-5 text-[13px] font-semibold text-[#151515]">Book Your Intro Call<ArrowRight className="ml-2.5 h-4 w-4" /></a></div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" name="name" error={errors.name} />
                <Field label="Business Email" name="email" type="email" error={errors.email} />
                <Field label="Company" name="company" error={errors.company} />
                <Select label="Team Size" name="teamSize" options={['Just me', '2 to 10', '11 to 50', '51 to 200', '200+']} error={errors.teamSize} />
                <Select label="Which part feels most manual?" name="processType" options={processOptions} optional />
                <div className="sm:col-span-2"><label htmlFor="challenge" className="mb-2 block text-[13px] font-medium text-[#d8d8da]">What keeps happening that you wish your team did not have to manage manually? <span className="text-[#77787e]">Optional</span></label><textarea id="challenge" name="challenge" rows={4} placeholder="Tell us what gets copied, chased, repeated, delayed or forgotten." className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#090a0b] px-4 py-3 text-[16px] text-white outline-none placeholder:text-[#66676d] focus:border-[#d8cbb7]/45" /></div>
                <div className="sm:col-span-2"><button type="submit" className="flex min-h-[50px] w-full items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-5 text-[13px] font-semibold text-[#151515]">Request an Automation Audit<ArrowRight className="ml-2.5 h-4 w-4" /></button><p className="mt-2.5 text-center text-[10.5px] leading-5 text-[#707177]">Frontend prototype only. Nothing is transmitted or stored when you submit this form.</p></div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

function Field({ label, name, type = 'text', error }: { label: string; name: string; type?: string; error?: string }) { return <div><label htmlFor={name} className="mb-2 block text-[13px] font-medium text-[#d8d8da]">{label}</label><input id={name} name={name} type={type} className="w-full rounded-lg border border-white/[0.1] bg-[#090a0b] px-4 py-3 text-[16px] text-white outline-none focus:border-[#d8cbb7]/45" />{error && <p className="mt-1.5 text-[11px] text-[#d1a3a8]">{error}</p>}</div> }
function Select({ label, name, options, error, optional = false }: { label: string; name: string; options: string[]; error?: string; optional?: boolean }) { return <div><label htmlFor={name} className="mb-2 block text-[13px] font-medium text-[#d8d8da]">{label} {optional && <span className="text-[#77787e]">Optional</span>}</label><select id={name} name={name} defaultValue="" className="w-full rounded-lg border border-white/[0.1] bg-[#090a0b] px-4 py-3 text-[16px] text-white outline-none focus:border-[#d8cbb7]/45"><option value="" disabled>Select an option</option>{options.map(option => <option key={option} value={option}>{option}</option>)}</select>{error && <p className="mt-1.5 text-[11px] text-[#d1a3a8]">{error}</p>}</div> }
