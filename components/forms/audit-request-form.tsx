"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { RoseMark } from "@/components/brand/brand-logo";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { CALENDAR_BOOKING_URL } from "@/lib/constants";

type FormState = { name: string; email: string; company: string; industry: string; teamSize: string; challenge: string };
type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = { name: "", email: "", company: "", industry: "", teamSize: "", challenge: "" };
const inputClasses = "mt-2.5 min-h-12 w-full rounded-lg border border-zinc-800 bg-[#0d0e11] px-4 py-3 text-base text-zinc-100 outline-none transition placeholder:text-zinc-600 hover:border-zinc-700 focus:border-[#be2e3d] focus:ring-2 focus:ring-[#be2e3d]/20";

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? <p id={id} className="mt-2 text-sm text-red-300" role="alert">{message}</p> : null;
}

function FormGroupLabel({ children }: { children: React.ReactNode }) {
  return <div className="border-b border-white/[0.07] pb-3 sm:col-span-2"><p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d9cdb9]">{children}</p></div>;
}

export function AuditRequestForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function updateField(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name as keyof FormState]) setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your full name.";
    if (!form.email.trim()) nextErrors.email = "Please enter your business email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Please enter a valid email address.";
    if (!form.company.trim()) nextErrors.company = "Please enter your business name.";
    if (!form.industry) nextErrors.industry = "Please select an industry.";
    if (!form.teamSize) nextErrors.teamSize = "Please select your team size.";
    setErrors(nextErrors);

    const firstField = Object.keys(nextErrors)[0];
    if (firstField) {
      document.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus();
      return;
    }

    // Frontend prototype only: no data is transmitted, processed, or stored.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="px-2 py-10 text-center sm:px-8 sm:py-14" role="status" aria-live="polite">
        <RoseMark className="mx-auto h-20" />
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#d9cdb9]">Form complete</p>
        <h3 className="mx-auto mt-4 max-w-xl text-2xl font-semibold tracking-[-0.035em] text-zinc-100 sm:text-3xl">Thanks — your audit request has been prepared.</h3>
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-zinc-400">The next step is to book a short intro call.</p>
        <a href={CALENDAR_BOOKING_URL} target="_blank" rel="noreferrer" className="group mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#f1e8d8] px-6 py-3.5 text-sm font-semibold text-[#14110e] transition hover:bg-[#fff8eb] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#be2e3d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0f12] sm:w-auto">
          Book Your Intro Call <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
        <p className="mt-5 text-xs text-zinc-600">This form has not transmitted or stored your information.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <FormGroupLabel>01 — Your details</FormGroupLabel>
        <div>
          <label htmlFor="name" className="text-sm font-medium text-zinc-300">Full Name <span className="text-[#c94a57]">*</span></label>
          <input id="name" name="name" autoComplete="name" value={form.name} onChange={updateField} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} className={inputClasses} placeholder="Your name" />
          <FieldError id="name-error" message={errors.name} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-zinc-300">Business Email <span className="text-[#c94a57]">*</span></label>
          <input id="email" name="email" type="email" inputMode="email" autoComplete="email" value={form.email} onChange={updateField} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} className={inputClasses} placeholder="you@company.com" />
          <FieldError id="email-error" message={errors.email} />
        </div>

        <FormGroupLabel>02 — Business context</FormGroupLabel>
        <div className="sm:col-span-2">
          <label htmlFor="company" className="text-sm font-medium text-zinc-300">Company / Business Name <span className="text-[#c94a57]">*</span></label>
          <input id="company" name="company" autoComplete="organization" value={form.company} onChange={updateField} aria-invalid={Boolean(errors.company)} aria-describedby={errors.company ? "company-error" : undefined} className={inputClasses} placeholder="Your business" />
          <FieldError id="company-error" message={errors.company} />
        </div>
        <div>
          <label htmlFor="industry" className="text-sm font-medium text-zinc-300">Industry <span className="text-[#c94a57]">*</span></label>
          <select id="industry" name="industry" value={form.industry} onChange={updateField} aria-invalid={Boolean(errors.industry)} aria-describedby={errors.industry ? "industry-error" : undefined} className={inputClasses}>
            <option value="">Select your industry</option>
            {["Professional Services", "E-commerce", "Healthcare", "Logistics", "Financial Services", "SaaS / Tech", "Real Estate", "Agency / Consulting", "Other"].map((option) => <option key={option}>{option}</option>)}
          </select>
          <FieldError id="industry-error" message={errors.industry} />
        </div>
        <div>
          <label htmlFor="teamSize" className="text-sm font-medium text-zinc-300">Team Size <span className="text-[#c94a57]">*</span></label>
          <select id="teamSize" name="teamSize" value={form.teamSize} onChange={updateField} aria-invalid={Boolean(errors.teamSize)} aria-describedby={errors.teamSize ? "team-size-error" : undefined} className={inputClasses}>
            <option value="">Select team size</option>
            {["Just me", "2–10", "11–50", "51–200", "200+"].map((option) => <option key={option}>{option}</option>)}
          </select>
          <FieldError id="team-size-error" message={errors.teamSize} />
        </div>

        <FormGroupLabel>03 — Current challenge</FormGroupLabel>
        <div className="sm:col-span-2">
          <label htmlFor="challenge" className="text-sm font-medium text-zinc-300">In a sentence or two, what is the main thing slowing your team down? <span className="text-xs font-normal text-zinc-600">Optional</span></label>
          <textarea id="challenge" name="challenge" rows={3} value={form.challenge} onChange={updateField} className={`${inputClasses} min-h-28 resize-y`} placeholder="Tell us about the repetitive task, bottleneck, or disconnected process." />
        </div>
      </div>
      <button type="submit" className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#f1e8d8] px-6 py-3.5 text-sm font-semibold text-[#14110e] transition hover:bg-[#fff8eb] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#be2e3d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0f12]">
        Request My Free Audit <ArrowIcon />
      </button>
      <p className="mt-4 text-center text-xs leading-5 text-zinc-600">Frontend prototype: completing this form does not transmit or store your information.</p>
    </form>
  );
}
