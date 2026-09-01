import type { Metadata } from "next";
import { RoseMark } from "@/components/brand/brand-logo";
import { PageHero } from "@/components/sections/page-hero";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { PrimaryLink } from "@/components/ui/primary-link";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = { title: "About", description: "Booth Marketing builds practical automation systems around the way real businesses operate." };

export default function AboutPage() {
  return (
    <>
      <PageHero label="About Booth Marketing" title="Operational clarity before technical complexity." body="Booth Marketing helps established businesses understand where manual work creates friction and whether a practical automation build is the right response." />

      {/* Positioning */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-24 lg:px-10">
          <FadeInSection><RoseMark className="h-28 sm:h-36" /></FadeInSection>
          <FadeInSection delay={80}>
            <SectionHeading label="What we believe" title="The business problem comes first." />
            <div className="mt-7 space-y-5 text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              <p>A system is only useful when it makes a real process easier to run. That means understanding the operation before recommending a build.</p>
              <p>The aim is not to automate everything. It is to reduce unnecessary handling, improve visibility, and protect the human judgment that the business still needs.</p>
              <p>Recommendations should be clear enough for an owner or operator to understand without needing to become a technical specialist.</p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Working principles */}
      <section className="border-y border-white/[0.06] bg-[#0b0c0f] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <FadeInSection><SectionHeading label="Working principles" title="Clear expectations, practical scope, and honest recommendations." /></FadeInSection>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16">
            {[
              ["Project-based by design", "Work is scoped around a defined operational problem and a practical outcome rather than an open-ended technology engagement."],
              ["Existing workflow first", "We understand how the team works today before deciding what should change and how the improvement should fit."],
              ["No predetermined answer", "An audit can conclude that a process should be simplified, left manual, or revisited later."],
              ["The decision remains yours", "You receive recommendations and retain ownership of whether anything moves forward."],
            ].map(([title, copy], index) => <FadeInSection key={title} delay={(index % 2) * 70}><article className="h-full rounded-2xl border border-white/[0.08] bg-[#101114] p-6 sm:p-8"><h2 className="text-xl font-semibold tracking-[-0.02em] text-zinc-100">{title}</h2><p className="mt-4 text-sm leading-6 text-zinc-500 sm:text-base sm:leading-7">{copy}</p></article></FadeInSection>)}
          </div>
        </div>
      </section>

      {/* No-hype promise */}
      <section className="py-20 sm:py-24 lg:py-28">
        <FadeInSection className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9cdb9]">A grounded first step</p>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.04em] text-zinc-50 sm:text-5xl">Start with the workflow that is slowing the business down.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">You do not need a technical brief or a solution in mind. You need a real process worth examining.</p>
          <PrimaryLink href="/automation-audit" className="mt-8 w-full sm:w-auto">Request an Automation Audit</PrimaryLink>
        </FadeInSection>
      </section>
    </>
  );
}
