import { FadeInSection } from "@/components/ui/fade-in-section";
import { PrimaryLink } from "@/components/ui/primary-link";

type PageHeroProps = {
  label: string;
  title: string;
  body: string;
  cta?: string;
  ctaHref?: string;
};

export function PageHero({ label, title, body, cta = "Request an Automation Audit", ctaHref = "/automation-audit#audit-form" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] py-20 sm:py-24 lg:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-18rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#a72130]/[0.09] blur-[130px]" />
      <FadeInSection className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9cdb9]">{label}</p>
          <h1 className="mt-6 text-balance text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.05em] text-zinc-50 sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-7 max-w-3xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">{body}</p>
          <PrimaryLink href={ctaHref} className="mt-9 w-full sm:w-auto">{cta}</PrimaryLink>
        </div>
      </FadeInSection>
    </section>
  );
}
