import Image from "next/image";
import { CapabilityGrid } from "@/components/sections/capability-grid";
import { FrictionGrid } from "@/components/sections/friction-grid";
import { WorkflowPreview } from "@/components/sections/workflow-preview";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { PrimaryLink } from "@/components/ui/primary-link";
import { SectionHeading } from "@/components/ui/section-heading";

export default function HomePage() {
  return (
    <>
      {/* Home hero */}
      <section className="relative flex min-h-[calc(100svh-64px)] items-center overflow-hidden border-b border-white/[0.08] sm:min-h-[calc(100svh-72px)]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <Image src="/rose-arch-hero.png" alt="" fill priority sizes="100vw" className="hero-image-reveal object-cover object-[54%_center] saturate-[0.82] contrast-[1.05] md:object-center" />
          <div className="absolute inset-0 bg-[#08090b]/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090b]/[0.98] via-[#08090b]/80 to-[#08090b]/40 md:via-[#08090b]/70 md:to-[#08090b]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090b]/80 via-transparent to-[#08090b]/35" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
          <FadeInSection className="max-w-3xl text-left">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#f1e8d8]/15 bg-[#08090b]/45 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#e4d9c6] backdrop-blur-sm sm:text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#be2e3d]" /> For established businesses with real operations
            </div>
            <h1 className="text-balance text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.055em] text-zinc-50 drop-shadow-[0_2px_30px_rgba(0,0,0,0.6)] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
              Your business has grown. <span className="text-zinc-300">Too much of the work is still moved forward by hand.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-300 drop-shadow-[0_2px_16px_rgba(0,0,0,0.75)] sm:mt-8 sm:text-lg sm:leading-8 md:text-xl">If leads, client requests, or internal work depend on copying details, chasing updates, and someone remembering the next step, the process is costing your team time.</p>
            <PrimaryLink href="/automation-audit" className="mt-9 w-full sm:w-auto">Request an Automation Audit</PrimaryLink>
          </FadeInSection>
        </div>
      </section>

      {/* Workflow illustration */}
      <section className="border-b border-white/[0.06] bg-[#08090b] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <WorkflowPreview />
      </section>

      {/* Recognition */}
      <section className="border-b border-white/[0.06] bg-[#0b0c0f] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <FadeInSection><SectionHeading label="Does this sound familiar?" title="The business is growing. The process is still being held together manually." body="Operational friction usually appears in ordinary moments: an enquiry waiting, an update being chased, or the same information being moved twice." /></FadeInSection>
          <div className="mt-12 lg:mt-16"><FrictionGrid /></div>
          <FadeInSection className="mt-8 rounded-xl border-l-2 border-[#be2e3d] bg-[#be2e3d]/[0.055] px-5 py-4 text-sm leading-6 text-zinc-300 sm:px-6 sm:text-base">These are usually process problems before they are technology problems.</FadeInSection>
        </div>
      </section>

      {/* Approach preview */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <FadeInSection><SectionHeading label="Our approach" title="Less technology to manage. More control over the process." body="We understand the operation first, then decide what should be improved, what could be automated, and what should stay human." /></FadeInSection>
          <div className="mt-12 lg:mt-16"><CapabilityGrid /></div>
          <FadeInSection className="mt-10 flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-[#0e0f12] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <p className="max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">See the full process, including how opportunities are assessed before anything is built.</p>
            <PrimaryLink href="/how-we-work" className="shrink-0">How We Work</PrimaryLink>
          </FadeInSection>
        </div>
      </section>

      {/* Audit preview */}
      <section className="border-y border-white/[0.06] bg-[#0d0e11] py-20 sm:py-24 lg:py-28">
        <FadeInSection className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9cdb9]">Free Automation Audit</p>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.04em] text-zinc-50 sm:text-5xl">Find out what is actually worth improving.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">Review one real workflow, identify unnecessary handling, and leave with clearer recommendations — including what should remain manual.</p>
          <PrimaryLink href="/automation-audit" className="mt-8 w-full sm:w-auto">Explore the Automation Audit</PrimaryLink>
        </FadeInSection>
      </section>
    </>
  );
}
