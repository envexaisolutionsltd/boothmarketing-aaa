'use client'

import { ArrowRight, Check } from 'lucide-react'
import { FormEvent, useState } from 'react'
import SiteFooter from '../../components/SiteFooter'
import SiteHeader from '../../components/SiteHeader'

const auditItems = ['First-impression trust','Offer clarity','Positioning against alternatives','Mobile usability','Calls to action','Proof and credibility','Page structure','Performance friction','AI/search clarity','What is actually worth changing']

export default function WebsiteAuditPage() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const nextErrors: Record<string, string> = {}
    for (const field of ['name','email','company','website']) if (!String(form.get(field) || '').trim()) nextErrors[field] = 'Required'
    const email = String(form.get('email') || '')
    if (email && !/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = 'Enter a valid email'
    setErrors(nextErrors)
    if (!Object.keys(nextErrors).length) setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#090a0b] text-[#f4f4f3]">
      <SiteHeader />
      <section className="border-b border-white/[0.055] py-12 sm:py-16"><div className="mx-auto w-[min(1080px,calc(100%-28px))]"><p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#d8cbb7]">Website Conversion Audit</p><h1 className="mt-4 max-w-[820px] text-[clamp(40px,9vw,62px)] font-semibold leading-[1.01] tracking-[-0.055em]">Find out what your website is making harder than it needs to be.</h1><p className="mt-5 max-w-[730px] text-[15px] leading-7 text-[#929399]">We review how quickly the site earns trust, explains the offer and moves a serious buyer toward action. No redesign commitment.</p></div></section>
      <section className="border-b border-white/[0.055] bg-[#0b0d0e] py-10 sm:py-14"><div className="mx-auto grid w-[min(1080px,calc(100%-28px))] gap-6 lg:grid-cols-[0.9fr_1.1fr]"><div><h2 className="text-[clamp(30px,7vw,44px)] font-semibold tracking-[-0.045em]">What we assess</h2><div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">{auditItems.map(item => <div key={item} className="flex items-start gap-2.5 rounded-lg border border-white/[0.065] bg-[#0d0f10] p-3 text-[12px] text-[#a6a7ac]"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d8cbb7]" />{item}</div>)}</div><div className="mt-5 rounded-[15px] border border-[#d92f3c]/18 bg-[#190f11]/42 p-4 text-[12px] leading-6 text-[#988f92]"><p className="font-semibold text-[#ded9db]">You leave knowing:</p><div className="mt-2 space-y-1"><p>• what is hurting trust</p><p>• what is unclear</p><p>• where visitors are likely to hesitate</p><p>• what should change first</p><p>• whether the current site needs improvement or replacement</p></div></div><p className="mt-4 text-[12px] leading-6 text-[#7f8086]">Not every website needs rebuilding. If the right answer is better messaging, stronger service pages or a clearer conversion path, we will say so.</p></div>
      <div className="rounded-[18px] border border-white/[0.08] bg-[#0d0f10] p-5">{submitted ? <div className="py-10 text-center"><div className="mx-auto grid h-11 w-11 place-items-center rounded-full border border-[#d92f3c]/24 bg-[#190f11]"><Check className="h-4 w-4 text-[#efe3cf]" /></div><h2 className="mt-4 text-[24px] font-semibold">Your audit details are ready.</h2><p className="mx-auto mt-2 max-w-md text-[13px] leading-6 text-[#898a90]">The online submission connection is not configured yet, so these details have not been sent. The form is currently validating locally only.</p></div> : <form onSubmit={handleSubmit} noValidate className="grid gap-4 sm:grid-cols-2"><Field label="Full Name" name="name" error={errors.name}/><Field label="Business Email" name="email" type="email" error={errors.email}/><Field label="Company" name="company" error={errors.company}/><Field label="Current Website URL" name="website" type="url" placeholder="https://" error={errors.website}/><div className="sm:col-span-2"><label htmlFor="priority" className="mb-2 block text-[13px] font-medium text-[#d8d8da]">What would you most like the website to improve? <span className="text-[#77787e]">Optional</span></label><select id="priority" name="priority" defaultValue="" className="w-full rounded-lg border border-white/[0.1] bg-[#090a0b] px-4 py-3 text-[16px] text-white outline-none"><option value="" disabled>Select an option</option>{['More enquiries','Better credibility','Clearer positioning','Better mobile experience','New offer / landing page','Complete redesign','Not sure'].map(option => <option key={option}>{option}</option>)}</select></div><div className="sm:col-span-2"><label htmlFor="notes" className="mb-2 block text-[13px] font-medium text-[#d8d8da]">Anything you already dislike about the current website? <span className="text-[#77787e]">Optional</span></label><textarea id="notes" name="notes" rows={4} placeholder="Tell us what feels slow, vague, dated or difficult to use." className="w-full rounded-lg border border-white/[0.1] bg-[#090a0b] px-4 py-3 text-[16px] text-white outline-none placeholder:text-[#66676d]" /></div><div className="sm:col-span-2"><button className="flex min-h-[50px] w-full items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-5 text-[13px] font-semibold text-[#151515]">Request My Website Audit<ArrowRight className="ml-2.5 h-4 w-4" /></button><p className="mt-2.5 text-center text-[10.5px] leading-5 text-[#707177]">Online submissions are not connected yet. This form currently validates on-device and does not transmit data.</p></div></form>}</div></div></section>
      <SiteFooter />
    </main>
  )
}

function Field({label,name,type='text',placeholder,error}:{label:string;name:string;type?:string;placeholder?:string;error?:string}){return <div><label htmlFor={name} className="mb-2 block text-[13px] font-medium text-[#d8d8da]">{label}</label><input id={name} name={name} type={type} placeholder={placeholder} className="w-full rounded-lg border border-white/[0.1] bg-[#090a0b] px-4 py-3 text-[16px] text-white outline-none placeholder:text-[#66676d]"/>{error&&<p className="mt-1.5 text-[11px] text-[#d1a3a8]">{error}</p>}</div>}
