type SectionHeadingProps = {
  label: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeading({ label, title, body, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9cdb9]">{label}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] text-zinc-50 sm:text-4xl lg:text-5xl">{title}</h2>
      {body ? <p className="mt-6 text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">{body}</p> : null}
    </div>
  );
}
