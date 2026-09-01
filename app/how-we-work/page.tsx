import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { PrimaryLink } from "@/components/ui/primary-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/content";

export const metadata: Metadata = { title: "How We Work", description: "How Booth Marketing understands operational workflows, finds friction, and designs practical improvements." };

const decisionChecks = [
  ["Repeated", "Does the work happen often enough for a change to matter?"],
  ["Consistent", "Are the rules and decisions reasonably clear?"],
  ["Material", "Is manual handling creating a real cost, delay, or risk?"],
  ["Maintainable", "Can the team understand and manage the resulting workflow?"],
  ["Worthwhile", "Is a build genuinely better than simplifying the process?"],
] as const;

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero label="How We Work" title="Understand the operation before designing the system." body="Practical improvement starts with the real workflow — not a platform, a trend, or a predetermined answer." />

      {/* Process */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <FadeInSection><SectionHeading label="The process" title="Four steps from workflow to decision." body="Each stage exists to make sure the recommendation is grounded in the way the business actually operates." /></FadeInSection>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <FadeInSection key={step.title} delay={index * 70} className="bg-[#0f1013]">
                <article className="h-full p-6 sm:p-8">
                  <p className="font-mono text-xs text-[#c9bca7]">0{index + 1}</p>
                  <h2 className="mt-8 text-lg font-semibold tracking-[-0.02em] text-zinc-100">{step.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-zinc-500">{step.copy}</p>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Decision framework */}
      <section className="border-y border-white/[0.06] bg-[#0b0c0f] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
          <FadeInSection><SectionHeading label="The decision framework" title="Not every manual task deserves automation." body="An opportunity should pass practical checks before it becomes a project. Sometimes the right recommendation is to simplify the process or leave it alone." /></FadeInSection>
          <div className="space-y-3">
            {decisionChecks.map(([title, copy], index) => (
              <FadeInSection key={title} delay={index * 60}>
                <article className="grid gap-3 rounded-xl border border-white/[0.08] bg-[#101114] p-5 sm:grid-cols-[110px_1fr] sm:items-start sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d9cdb9]">{title}</p>
                  <p className="text-sm leading-6 text-zinc-400 sm:text-base">{copy}</p>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ownership */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <FadeInSection><SectionHeading label="Project principles" title="A useful build should leave the business with more control, not another mystery to manage." /></FadeInSection>
          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16">
            {[
              ["Visible logic", "The team should understand what the workflow does, why it acts, and where human decisions remain."],
              ["Clear ownership", "Responsibilities, exceptions, and handoffs should be easier to see after the build than before it."],
              ["Practical handover", "Project-based work should have a defined scope and a clear path into day-to-day operation."],
            ].map(([title, copy], index) => (
              <FadeInSection key={title} delay={index * 80}><article className="h-full rounded-2xl border border-white/[0.08] bg-[#0e0f12] p-6 sm:p-8"><h2 className="text-xl font-semibold text-zinc-100">{title}</h2><p className="mt-4 text-sm leading-6 text-zinc-500">{copy}</p></article></FadeInSection>
            ))}
          </div>
          <FadeInSection className="mt-12 text-center"><PrimaryLink href="/automation-audit">Start With an Automation Audit</PrimaryLink></FadeInSection>
        </div>
      </section>
    </>
  );
}
