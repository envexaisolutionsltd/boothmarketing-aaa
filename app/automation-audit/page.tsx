import type { Metadata } from "next";
import { RoseMark } from "@/components/brand/brand-logo";
import { AuditRequestForm } from "@/components/forms/audit-request-form";
import { AuditExample } from "@/components/sections/audit-example";
import { PageHero } from "@/components/sections/page-hero";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { nextSteps } from "@/lib/content";

export const metadata: Metadata = { title: "Free Automation Audit", description: "Review a real workflow and find out what is genuinely worth automating, improving, or leaving alone." };

export default function AutomationAuditPage() {
  return (
    <>
      <PageHero label="Free Automation Audit" title="Find out what is actually worth improving." body="A focused review of one part of your operation, designed to separate useful improvement opportunities from unnecessary complexity." cta="Request Your Free Audit" ctaHref="#audit-form" />

      {/* Audit value */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-20 lg:px-10">
          <FadeInSection>
            <SectionHeading label="What the session covers" title="Clarity before commitment." body="In a focused 45-minute session, we review how the workflow currently operates, identify where manual handling creates friction, and give you a realistic picture of what could be improved." />
            <p className="mt-5 text-sm leading-6 text-zinc-500 sm:text-base">You do not need to arrive with a solution in mind. The audit is designed to uncover whether there is a worthwhile problem to solve.</p>
          </FadeInSection>
          <FadeInSection delay={100}>
            <ul className="space-y-3">
              {["Review one real workflow", "Identify repetitive handling and weak handoffs", "Highlight realistic improvement opportunities", "Identify areas that should remain manual", "Leave with clearer next steps"].map((point) => (
                <li key={point} className="flex items-start gap-4 rounded-xl border border-white/[0.08] bg-[#0e0f12] p-4 text-sm leading-6 text-zinc-300 sm:p-5 sm:text-base"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#be2e3d]" />{point}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-zinc-600">There is no obligation to build anything afterwards.</p>
          </FadeInSection>
        </div>
      </section>

      {/* Example output */}
      <section className="border-y border-white/[0.06] bg-[#0b0c0f] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <FadeInSection><SectionHeading label="Example audit output" title="What clarity can look like after the conversation." body="This is an illustrative example of the thinking an audit produces — not a client case study, performance result, or claim." /></FadeInSection>
          <div className="mt-12 lg:mt-16"><AuditExample /></div>
        </div>
      </section>

      {/* Next steps */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-10">
          <FadeInSection><div className="lg:sticky lg:top-32"><SectionHeading label="What happens next" title="A clear path from request to recommendation." body="A focused process, with the decision always left in your hands." /></div></FadeInSection>
          <ol className="relative border-l border-zinc-800">
            {nextSteps.map((step, index) => (
              <FadeInSection key={step.title} delay={index * 50}>
                <li className="relative pb-10 pl-8 last:pb-0 sm:pl-11">
                  <span className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#f1e8d8]/20 bg-[#101216] font-mono text-[10px] text-[#d9cdb9]">{index + 1}</span>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-zinc-200">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-500 sm:text-base">{step.copy}</p>
                </li>
              </FadeInSection>
            ))}
          </ol>
        </div>
      </section>

      {/* Audit form */}
      <section id="audit-form" className="scroll-mt-20 border-t border-white/[0.06] bg-[#0b0c0f] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
          <FadeInSection><RoseMark className="mx-auto mb-5 h-10" /><SectionHeading align="center" label="Request your audit" title="Tell us where the work is getting stuck." body="Share a little context about the business and the process you want to improve. You do not need to know the solution." /></FadeInSection>
          <FadeInSection delay={100} className="mt-10 sm:mt-12"><div className="rounded-2xl border border-white/[0.09] bg-[#0e0f12] p-5 shadow-2xl shadow-black/30 sm:p-8 lg:p-10"><AuditRequestForm /></div></FadeInSection>
        </div>
      </section>
    </>
  );
}
