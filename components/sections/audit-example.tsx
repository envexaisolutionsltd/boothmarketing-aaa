import { FadeInSection } from "@/components/ui/fade-in-section";

export function AuditExample() {
  return (
    <FadeInSection>
      <div className="overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0e0f12] shadow-2xl shadow-black/20">
        <div className="grid gap-px bg-white/[0.07] lg:grid-cols-[0.82fr_1.18fr]">
          <div className="bg-[#101216] p-6 sm:p-8 lg:p-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d9cdb9]">Workflow snapshot</p>
            <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-zinc-100">New business enquiry handling</h3>
            <p className="mt-4 text-sm leading-6 text-zinc-500">A prospective client submits an enquiry, the details are qualified, and the right person follows up.</p>
            <ol className="mt-8 space-y-3">
              {["Enquiry received", "Details reviewed", "Owner assigned", "Follow-up tracked"].map((item, index) => (
                <li key={item} className="flex items-center gap-3 text-sm text-zinc-400">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] font-mono text-[9px] text-zinc-600">0{index + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
          <dl className="divide-y divide-white/[0.07] bg-[#0e0f12]">
            {[
              ["Friction", "Enquiry details are copied manually, ownership is unclear, and follow-up visibility depends on a separate spreadsheet."],
              ["Practical recommendation", "Create one structured intake, route context to the right person, and keep progress visible in the existing workflow."],
              ["Keep human", "Qualification judgment, the commercial conversation, and the final decision should remain with the team."],
            ].map(([term, description]) => (
              <div key={term} className="p-6 sm:p-8 lg:px-10">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c9bca7]">{term}</dt>
                <dd className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">{description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="border-t border-white/[0.07] px-6 py-5 text-sm font-medium text-zinc-300 sm:px-8 lg:px-10">The outcome is a clear decision — not a technology shopping list.</p>
      </div>
    </FadeInSection>
  );
}
