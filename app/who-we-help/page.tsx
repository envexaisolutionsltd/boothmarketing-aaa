import type { Metadata } from "next";
import { FrictionGrid } from "@/components/sections/friction-grid";
import { PageHero } from "@/components/sections/page-hero";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { PrimaryLink } from "@/components/ui/primary-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { industries } from "@/lib/content";

export const metadata: Metadata = { title: "Who We Help", description: "Operational automation for established service and B2B businesses with real recurring workflows." };

export default function WhoWeHelpPage() {
  return (
    <>
      <PageHero label="Who We Help" title="For established businesses with operational work to manage." body="Booth Marketing is designed for owners and operators who know too much work is manual but want clarity before investing in a build." />

      {/* Fit */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <FadeInSection><SectionHeading label="A clear fit" title="Real workflows, recurring pressure, and a reason to improve." /></FadeInSection>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16">
            <FadeInSection><article className="h-full rounded-2xl border border-[#f1e8d8]/15 bg-[#f1e8d8]/[0.035] p-6 sm:p-8 lg:p-10"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9cdb9]">This is for you if:</p><ul className="mt-8 space-y-5 text-sm leading-6 text-zinc-300 sm:text-base">{["You run an established business with recurring operational work", "Your team spends time moving information and requests manually", "Leads, clients, or internal work depend on someone following up", "Several systems do not work together cleanly", "You want clarity before investing in a build"].map((item) => <li key={item} className="flex gap-4"><span className="mt-2.5 h-px w-4 shrink-0 bg-[#be2e3d]" />{item}</li>)}</ul></article></FadeInSection>
            <FadeInSection delay={100}><article className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8 lg:p-10"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">This probably is not for you if:</p><ul className="mt-8 space-y-5 text-sm leading-6 text-zinc-400 sm:text-base">{["You are looking for a magic button or overnight transformation", "You want automation simply because it sounds impressive", "You are testing a hobby project with no real operating workflow", "You expect results without process or collaboration", "You are unwilling to examine a broken process first"].map((item) => <li key={item} className="flex gap-4"><span className="mt-2.5 h-px w-4 shrink-0 bg-zinc-700" />{item}</li>)}</ul></article></FadeInSection>
          </div>
        </div>
      </section>

      {/* Friction */}
      <section className="border-y border-white/[0.06] bg-[#0b0c0f] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10"><FadeInSection><SectionHeading label="Common signals" title="The opportunity often appears before anyone calls it automation." body="These symptoms are practical starting points for a conversation about the underlying process." /></FadeInSection><div className="mt-12 lg:mt-16"><FrictionGrid /></div></div>
      </section>

      {/* Industries */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <FadeInSection><SectionHeading label="Areas we can explore" title="Relevant operational examples across service businesses." body="These are example workflow areas, not client claims or claims that every process should be automated." /></FadeInSection>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:mt-16">
            {industries.map((industry, index) => <FadeInSection key={industry.name} delay={(index % 4) * 50} className="bg-[#0e0f12]"><article className="h-full p-6 sm:p-7"><h2 className="text-base font-semibold text-zinc-200">{industry.name}</h2><p className="mt-3 text-sm leading-6 text-zinc-500">{industry.examples}</p></article></FadeInSection>)}
          </div>
          <FadeInSection className="mt-12 text-center"><PrimaryLink href="/automation-audit">Discuss Your Workflow</PrimaryLink></FadeInSection>
        </div>
      </section>
    </>
  );
}
