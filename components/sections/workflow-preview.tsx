import { FadeInSection } from "@/components/ui/fade-in-section";

export function WorkflowPreview() {
  const columns = [
    { label: "Manual handling", tone: "text-zinc-500", items: ["Enquiry arrives", "Details copied", "Follow-up assigned", "Spreadsheet updated"] },
    { label: "Clearer operational flow", tone: "text-[#d9cdb9]", items: ["One clear intake", "Context organised", "Right person notified", "Progress stays visible"] },
  ];

  return (
    <FadeInSection className="mx-auto max-w-5xl">
      <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0e11] shadow-2xl shadow-black/20">
        <div className="flex flex-col gap-2 border-b border-white/[0.07] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d9cdb9]">A common operational pattern</p>
          <p className="text-xs text-zinc-600">Illustrative workflow — not a client result</p>
        </div>
        <div className="grid gap-px bg-white/[0.07] md:grid-cols-2">
          {columns.map((column) => (
            <div key={column.label} className="bg-[#0d0e11] p-5 sm:p-7">
              <p className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${column.tone}`}>{column.label}</p>
              <ol className="mt-5 space-y-2.5">
                {column.items.map((item, index) => (
                  <li key={item} className="flex items-center gap-3 rounded-lg border border-white/[0.065] bg-white/[0.02] px-3.5 py-3 text-xs text-zinc-400 sm:text-sm">
                    <span className="font-mono text-[10px] text-zinc-700">0{index + 1}</span>
                    <span className="h-px w-3 bg-[#be2e3d]/70" />
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
        <p className="border-t border-white/[0.07] px-5 py-4 text-xs leading-5 text-zinc-500 sm:px-7">The aim is not to automate every step. It is to remove unnecessary handling while keeping human judgment where it matters.</p>
      </div>
    </FadeInSection>
  );
}
