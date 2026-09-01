import { capabilities } from "@/lib/content";
import { FadeInSection } from "@/components/ui/fade-in-section";

export function CapabilityGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {capabilities.map((capability, index) => (
        <FadeInSection key={capability.title} delay={index * 80}>
          <article className="h-full rounded-2xl border border-white/[0.08] bg-[#0e0f12] p-6 sm:p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#f1e8d8]/15 bg-[#f1e8d8]/[0.045] font-mono text-xs text-[#d9cdb9]">{capability.number}</div>
            <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em] text-zinc-100">{capability.title}</h3>
            <p className="mt-4 text-sm leading-6 text-zinc-500">{capability.copy}</p>
          </article>
        </FadeInSection>
      ))}
    </div>
  );
}
