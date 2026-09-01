import { frictionSignals } from "@/lib/content";
import { FadeInSection } from "@/components/ui/fade-in-section";

export function FrictionGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {frictionSignals.map((signal, index) => (
        <FadeInSection key={signal.title} delay={index * 70}>
          <article className="h-full rounded-2xl border border-white/[0.08] bg-[#101114] p-6 sm:p-7">
            <p className="font-mono text-[10px] text-[#c9bca7]">{signal.number}</p>
            <h3 className="mt-7 text-lg font-semibold leading-6 tracking-[-0.02em] text-zinc-200">{signal.title}</h3>
            <p className="mt-4 text-sm leading-6 text-zinc-500">{signal.copy}</p>
          </article>
        </FadeInSection>
      ))}
    </div>
  );
}
