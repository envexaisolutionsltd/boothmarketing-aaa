import { useEffect, useRef, useState } from "react";

// Replace this URL when the live Booth Marketing calendar is ready.
const CALENDAR_BOOKING_URL = "https://cal.com/your-agency/audit";

const industries = [
  "Professional Services",
  "Gyms & Fitness",
  "Local Service Businesses",
  "Agencies",
  "Property",
  "Hospitality",
  "Healthcare Admin",
  "B2B Services",
];

const processSteps = [
  {
    title: "Understand the current system",
    copy: "We map how your business actually operates today, not how it's supposed to on paper.",
  },
  {
    title: "Find the friction",
    copy: "We identify where time is being lost, where errors happen, and where handoffs break down.",
  },
  {
    title: "Design practical automations",
    copy: "We propose specific, buildable solutions scoped to your actual situation.",
  },
  {
    title: "You decide what to do next",
    copy: "No pressure. You get clear recommendations and full ownership of the decision.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Custom Automation Systems",
    copy: "Built around real operational workflows rather than generic templates.",
  },
  {
    number: "02",
    title: "Business Process Automation",
    copy: "Focused on repetitive admin, lead handling, client operations, and internal processes.",
  },
  {
    number: "03",
    title: "Built Around Your Existing Workflow",
    copy: "Understand the business first, then decide what should actually be automated.",
  },
];

const frictionSignals = [
  {
    number: "01",
    title: "Follow-up depends on someone noticing",
    copy: "Enquiries, client requests, or internal tasks wait until the right person sees them and moves them forward.",
  },
  {
    number: "02",
    title: "The same information gets entered twice",
    copy: "Details are copied between inboxes, spreadsheets, and systems because the process is not connected.",
  },
  {
    number: "03",
    title: "Work slows when one person is away",
    copy: "A key process relies on one person knowing what happens next, where information lives, or who needs an update.",
  },
  {
    number: "04",
    title: "Reporting is assembled by hand",
    copy: "Your team spends useful time collecting updates and rebuilding a picture the business should already have.",
  },
];

const nextSteps = [
  {
    title: "Submit the form below",
    copy: "Tell us a bit about your business and team.",
  },
  {
    title: "We review your request",
    copy: "We use the information to understand the context behind your current workflow.",
  },
  {
    title: "Short intro call",
    copy: "A brief conversation to understand the business, current processes, and whether an audit makes sense.",
  },
  {
    title: "The audit session",
    copy: "45 minutes, focused and structured.",
  },
  {
    title: "You receive your recommendations",
    copy: "Clear recommendations around what could be automated, improved, or left alone.",
  },
  {
    title: "You decide",
    copy: "No follow-up pressure. The next step is always yours.",
  },
];

const initialForm = {
  name: "",
  email: "",
  company: "",
  industry: "",
  teamSize: "",
  challenge: "",
};

function scrollToAudit() {
  document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" });
}

function scrollToSection(sectionId) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
}

function ArrowIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 10h12M11.5 5.5 16 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BrandLogo({ className = "", priority = false }) {
  return (
    <span className={`relative block aspect-[409/156] overflow-hidden ${className}`}>
      <img
        src="/booth-marketing-logo.png"
        alt="Booth Marketing"
        width="500"
        height="500"
        fetchPriority={priority ? "high" : "auto"}
        loading={priority ? "eager" : "lazy"}
        className="absolute left-[-10.5%] top-[-97.4%] h-auto w-[122.25%] max-w-none"
      />
    </span>
  );
}

function RoseMark({ className = "" }) {
  return (
    <span aria-hidden="true" className={`relative block aspect-[81/119] overflow-hidden ${className}`}>
      <img
        src="/booth-marketing-logo.png"
        alt=""
        width="500"
        height="500"
        loading="lazy"
        className="absolute left-[-458%] top-[-127.7%] h-auto w-[617.3%] max-w-none"
      />
    </span>
  );
}

function FadeInSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:transition-none ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function SectionHeading({ label, title, body, align = "left" }) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9cdb9]">
        {label}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] text-zinc-50 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {body && <p className="mt-6 text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">{body}</p>}
    </div>
  );
}

function PrimaryButton({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#f1e8d8] px-6 py-3.5 text-sm font-semibold text-[#14110e] shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset] transition duration-200 hover:bg-[#fff8eb] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#be2e3d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090b] active:translate-y-px ${className}`}
    >
      {children}
      <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </button>
  );
}

function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm text-red-300" role="alert">
      {message}
    </p>
  );
}

function App() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: "" }));
    }
  }

  function validateForm() {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your full name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your business email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.company.trim()) nextErrors.company = "Please enter your business name.";
    if (!form.industry) nextErrors.industry = "Please select an industry.";
    if (!form.teamSize) nextErrors.teamSize = "Please select your team size.";
    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0];
      document.querySelector(`[name="${firstField}"]`)?.focus();
      return;
    }

    // Frontend prototype only: no data is transmitted or stored.
    setSubmitted(true);
  }

  const inputClasses =
    "mt-2.5 min-h-12 w-full rounded-lg border border-zinc-800 bg-[#0d0e11] px-4 py-3 text-base text-zinc-100 outline-none transition placeholder:text-zinc-600 hover:border-zinc-700 focus:border-[#be2e3d] focus:ring-2 focus:ring-[#be2e3d]/20";

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#08090b] text-zinc-100 selection:bg-[#be2e3d]/35 selection:text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#08090b]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[72px] sm:px-8 lg:px-10" aria-label="Primary navigation">
          <a href="#top" aria-label="Booth Marketing — back to top" className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#be2e3d]">
            <BrandLogo priority className="w-[112px] sm:w-[150px]" />
          </a>
          <div className="flex items-center gap-5 lg:gap-7">
            <div className="hidden items-center gap-5 md:flex lg:gap-7">
              {[
                ["The friction", "friction"],
                ["Process", "process"],
                ["Audit example", "audit-example"],
              ].map(([label, sectionId]) => (
                <button
                  key={sectionId}
                  type="button"
                  onClick={() => scrollToSection(sectionId)}
                  className="text-xs font-medium text-zinc-500 transition hover:text-zinc-200 focus:outline-none focus-visible:text-zinc-100 lg:text-sm"
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={scrollToAudit}
              className="rounded-md border border-[#f1e8d8]/20 bg-[#f1e8d8]/[0.06] px-4 py-2.5 text-xs font-semibold text-[#f1e8d8] transition hover:border-[#f1e8d8]/35 hover:bg-[#f1e8d8]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#be2e3d] sm:px-5 sm:text-sm"
            >
              Request an Audit
            </button>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative flex min-h-[calc(100svh-64px)] items-center border-b border-white/[0.06] sm:min-h-[calc(100svh-72px)]">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-[-12rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#a72130]/[0.09] blur-[120px] sm:h-[45rem] sm:w-[45rem]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
          </div>
          <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
            <div className="mx-auto max-w-5xl text-center">
              <FadeInSection>
                <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#f1e8d8]/15 bg-[#f1e8d8]/[0.045] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d9cdb9] sm:text-[11px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#be2e3d]" />
                  For established businesses with real operations
                </div>
                <h1 className="text-balance text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.055em] text-zinc-50 sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                  Your business has grown. <span className="text-zinc-500">Too much of the work is still moved forward by hand.</span>
                </h1>
                <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-zinc-400 sm:mt-8 sm:text-lg sm:leading-8 md:text-xl">
                  If leads, client requests, or internal work depend on copying details, chasing updates, and someone remembering the next step, the process is costing your team time. We help you find what is genuinely worth fixing.
                </p>
                <PrimaryButton onClick={scrollToAudit} className="mt-9 w-full sm:w-auto">
                  Request an Automation Audit
                </PrimaryButton>
              </FadeInSection>
            </div>
            <FadeInSection delay={180} className="mx-auto mt-14 max-w-5xl sm:mt-20">
              <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0e11]/95 shadow-2xl shadow-black/20">
                <div className="flex flex-col gap-2 border-b border-white/[0.07] px-5 py-4 text-left sm:flex-row sm:items-center sm:justify-between sm:px-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d9cdb9]">A common operational pattern</p>
                  <p className="text-xs text-zinc-600">Illustrative workflow — not a client result</p>
                </div>
                <div className="grid gap-px bg-white/[0.07] md:grid-cols-2">
                  {[
                    {
                      label: "Manual handling",
                      tone: "text-zinc-500",
                      items: ["Enquiry arrives", "Details copied", "Follow-up assigned", "Spreadsheet updated"],
                    },
                    {
                      label: "Clearer operational flow",
                      tone: "text-[#d9cdb9]",
                      items: ["One clear intake", "Context organised", "Right person notified", "Progress stays visible"],
                    },
                  ].map((column) => (
                    <div key={column.label} className="bg-[#0d0e11] p-5 text-left sm:p-7">
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
                <div className="border-t border-white/[0.07] px-5 py-4 text-left text-xs leading-5 text-zinc-500 sm:px-7">
                  The aim is not to automate every step. It is to remove unnecessary handling while keeping human judgment where it matters.
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Operational friction */}
        <section id="friction" className="scroll-mt-20 border-b border-white/[0.06] bg-[#0b0c0f] py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
            <FadeInSection>
              <SectionHeading
                label="Does this sound familiar?"
                title="The business is growing. The process is still being held together manually."
                body="The problem often appears in ordinary moments: an enquiry waiting, an update being chased, or the same information being moved from one place to another."
              />
            </FadeInSection>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
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
            <FadeInSection className="mt-8 rounded-xl border-l-2 border-[#be2e3d] bg-[#be2e3d]/[0.055] px-5 py-4 text-sm leading-6 text-zinc-300 sm:px-6 sm:text-base">
              These are usually process problems before they are technology problems.
            </FadeInSection>
          </div>
        </section>

        {/* Who it is for */}
        <section className="py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
            <FadeInSection>
              <SectionHeading label="A clear fit" title="Built for established businesses with real operational pressure." body="You do not need to know which system you need. You need a repeatable process, a real constraint, and a reason to improve it." />
            </FadeInSection>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16">
              <FadeInSection>
                <article className="h-full rounded-2xl border border-[#f1e8d8]/15 bg-[#f1e8d8]/[0.035] p-6 sm:p-8 lg:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9cdb9]">This is for you if:</p>
                  <ul className="mt-8 space-y-5 text-sm leading-6 text-zinc-300 sm:text-base">
                    {["You run an established business with recurring operational work", "Your team spends time moving information and requests manually", "Leads, clients, or internal work depend on someone following up", "You want clarity on what's worth improving before investing in a build"].map((item) => (
                      <li key={item} className="flex gap-4"><span className="mt-2.5 h-px w-4 shrink-0 bg-[#be2e3d]" />{item}</li>
                    ))}
                  </ul>
                </article>
              </FadeInSection>
              <FadeInSection delay={100}>
                <article className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8 lg:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">This isn't for you if:</p>
                  <ul className="mt-8 space-y-5 text-sm leading-6 text-zinc-400 sm:text-base">
                    {["You're looking for a magic button or overnight transformation", "You want to automate something simply because it sounds impressive", "You're running a hobby project with no real operational workflow", "You're unwilling to examine a broken process before building around it"].map((item) => (
                      <li key={item} className="flex gap-4"><span className="mt-2.5 h-px w-4 shrink-0 bg-zinc-700" />{item}</li>
                    ))}
                  </ul>
                </article>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="process" className="scroll-mt-20 border-y border-white/[0.06] bg-[#0b0c0f] py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
            <FadeInSection>
              <SectionHeading label="How it works" title="Understand the operation before designing the system." />
            </FadeInSection>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <FadeInSection key={step.title} delay={index * 80} className="bg-[#0f1013]">
                  <article className="h-full p-6 sm:p-8">
                    <p className="font-mono text-xs text-[#c9bca7]">0{index + 1}</p>
                    <h3 className="mt-8 text-lg font-semibold tracking-[-0.02em] text-zinc-100">{step.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-zinc-500">{step.copy}</p>
                  </article>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Credibility */}
        <section className="py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
            <FadeInSection>
              <SectionHeading label="What we focus on" title="Less technology to manage. More control over the process." body="The goal is to reduce unnecessary handling and make important work easier to see, move, and manage." />
            </FadeInSection>
            <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16">
              {capabilities.map((capability, index) => (
                <FadeInSection key={capability.title} delay={index * 90}>
                  <article className="group h-full rounded-2xl border border-white/[0.08] bg-[#0e0f12] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#be2e3d]/30 sm:p-8">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#f1e8d8]/15 bg-[#f1e8d8]/[0.045] font-mono text-xs text-[#d9cdb9]">{capability.number}</div>
                    <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em] text-zinc-100">{capability.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-zinc-500">{capability.copy}</p>
                  </article>
                </FadeInSection>
              ))}
            </div>
            <FadeInSection className="mt-14 border-t border-white/[0.07] pt-10 lg:mt-16">
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">Industries served</p>
              <div className="flex flex-wrap gap-2.5">
                {industries.map((industry) => (
                  <span key={industry} className="rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-xs text-zinc-400 sm:text-sm">{industry}</span>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Audit offer */}
        <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-32">
          <FadeInSection className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-3xl border border-[#f1e8d8]/15 bg-[#101216] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
              <div aria-hidden="true" className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#a72130]/10 blur-[100px]" />
              <RoseMark className="pointer-events-none absolute -right-5 top-5 hidden h-52 opacity-[0.065] sm:block lg:right-10 lg:top-7 lg:h-64" />
              <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9cdb9]">Free Automation Audit</p>
                  <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-zinc-50 sm:text-5xl">Clarity before commitment.</h2>
                  <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">In a focused 45-minute session, we review how your business currently operates, identify where automation would have the highest impact, and give you a clear picture of what's possible — and what isn't. You walk away with real recommendations, whether or not we work together.</p>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base">You do not need to arrive with a solution in mind. The audit is designed to uncover whether there is a worthwhile problem to solve.</p>
                </div>
                <ul className="space-y-4">
                  {["Review one real workflow in your business", "Identify unnecessary handling and weak handoffs", "Separate worthwhile improvements from distractions", "Be told what should stay manual"].map((point) => (
                    <li key={point} className="flex items-start gap-4 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 text-sm leading-6 text-zinc-300 sm:p-5 sm:text-base">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#be2e3d] shadow-[0_0_16px_rgba(190,46,61,0.65)]" />{point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* Illustrative audit output */}
        <section id="audit-example" className="scroll-mt-20 border-y border-white/[0.06] bg-[#0b0c0f] py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
            <FadeInSection>
              <SectionHeading
                label="Example audit output"
                title="What clarity can look like after the conversation."
                body="This is an illustrative example of the thinking an audit produces — not a client case study, performance result, or claim."
              />
            </FadeInSection>
            <FadeInSection delay={100} className="mt-12 lg:mt-16">
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
                      ["Practical recommendation", "Create one structured intake, route the context to the right person, and keep progress visible in the existing operating workflow."],
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
          </div>
        </section>

        {/* What happens next */}
        <section className="border-y border-white/[0.06] bg-[#0b0c0f] py-20 sm:py-24 lg:py-32">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-10">
            <FadeInSection>
              <div className="lg:sticky lg:top-32">
                <SectionHeading label="What happens next" title="A clear path from request to recommendation." body="A focused process, with the decision always left in your hands." />
              </div>
            </FadeInSection>
            <ol className="relative border-l border-zinc-800">
              {nextSteps.map((step, index) => (
                <FadeInSection key={step.title} delay={index * 50}>
                  <li className="relative pb-10 pl-8 last:pb-0 sm:pl-11">
                    <span className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#f1e8d8]/20 bg-[#101216] font-mono text-[10px] text-[#d9cdb9]">{index + 1}</span>
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-zinc-200">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-500 sm:text-base">{step.copy}</p>
                  </li>
                </FadeInSection>
              ))}
            </ol>
          </div>
        </section>

        {/* Lead capture form */}
        <section id="audit-form" className="scroll-mt-20 py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
            <FadeInSection>
              <RoseMark className="mx-auto mb-5 h-10" />
              <SectionHeading align="center" label="Request your audit" title="Tell us where the work is getting stuck." body="Share a little context about the business and the process you want to improve. You do not need to know the solution." />
            </FadeInSection>
            <FadeInSection delay={100} className="mt-10 sm:mt-12">
              <div className="rounded-2xl border border-white/[0.09] bg-[#0e0f12] p-5 shadow-2xl shadow-black/30 sm:p-8 lg:p-10">
                {!submitted ? (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="border-b border-white/[0.07] pb-3 sm:col-span-2">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d9cdb9]">01 — Your details</p>
                      </div>
                      <div>
                        <label htmlFor="name" className="text-sm font-medium text-zinc-300">Full Name <span className="text-[#c94a57]">*</span></label>
                        <input id="name" name="name" type="text" autoComplete="name" value={form.name} onChange={updateField} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} className={inputClasses} placeholder="Your name" />
                        <FieldError id="name-error" message={errors.name} />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm font-medium text-zinc-300">Business Email <span className="text-[#c94a57]">*</span></label>
                        <input id="email" name="email" type="email" inputMode="email" autoComplete="email" value={form.email} onChange={updateField} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} className={inputClasses} placeholder="you@company.com" />
                        <FieldError id="email-error" message={errors.email} />
                      </div>
                      <div className="mt-2 border-b border-white/[0.07] pb-3 sm:col-span-2">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d9cdb9]">02 — Business context</p>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="company" className="text-sm font-medium text-zinc-300">Company / Business Name <span className="text-[#c94a57]">*</span></label>
                        <input id="company" name="company" type="text" autoComplete="organization" value={form.company} onChange={updateField} aria-invalid={Boolean(errors.company)} aria-describedby={errors.company ? "company-error" : undefined} className={inputClasses} placeholder="Your business" />
                        <FieldError id="company-error" message={errors.company} />
                      </div>
                      <div>
                        <label htmlFor="industry" className="text-sm font-medium text-zinc-300">Industry <span className="text-[#c94a57]">*</span></label>
                        <select id="industry" name="industry" value={form.industry} onChange={updateField} aria-invalid={Boolean(errors.industry)} aria-describedby={errors.industry ? "industry-error" : undefined} className={inputClasses}>
                          <option value="">Select your industry</option>
                          {["Professional Services", "E-commerce", "Healthcare", "Logistics", "Financial Services", "SaaS / Tech", "Real Estate", "Agency / Consulting", "Other"].map((option) => <option key={option}>{option}</option>)}
                        </select>
                        <FieldError id="industry-error" message={errors.industry} />
                      </div>
                      <div>
                        <label htmlFor="teamSize" className="text-sm font-medium text-zinc-300">Team Size <span className="text-[#c94a57]">*</span></label>
                        <select id="teamSize" name="teamSize" value={form.teamSize} onChange={updateField} aria-invalid={Boolean(errors.teamSize)} aria-describedby={errors.teamSize ? "team-size-error" : undefined} className={inputClasses}>
                          <option value="">Select team size</option>
                          {["Just me", "2–10", "11–50", "51–200", "200+"].map((option) => <option key={option}>{option}</option>)}
                        </select>
                        <FieldError id="team-size-error" message={errors.teamSize} />
                      </div>
                      <div className="mt-2 border-b border-white/[0.07] pb-3 sm:col-span-2">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d9cdb9]">03 — Current challenge</p>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="challenge" className="text-sm font-medium text-zinc-300">In a sentence or two, what's the main thing slowing your team down? <span className="text-xs font-normal text-zinc-600">Optional</span></label>
                        <textarea id="challenge" name="challenge" rows={3} value={form.challenge} onChange={updateField} className={`${inputClasses} min-h-28 resize-y`} placeholder="Tell us about the repetitive task, bottleneck, or disconnected process." />
                      </div>
                    </div>
                    <PrimaryButton type="submit" className="mt-8 w-full">Request My Free Audit</PrimaryButton>
                    <p className="mt-4 text-center text-xs leading-5 text-zinc-600">Frontend prototype: completing this form does not transmit or store your information.</p>
                  </form>
                ) : (
                  <div className="px-2 py-10 text-center sm:px-8 sm:py-14" role="status" aria-live="polite">
                    <div className="mx-auto flex h-20 w-16 items-center justify-center">
                      <RoseMark className="h-20" />
                    </div>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#d9cdb9]">Form complete</p>
                    <h3 className="mx-auto mt-4 max-w-xl text-2xl font-semibold tracking-[-0.035em] text-zinc-100 sm:text-3xl">Thanks — your audit request has been prepared.</h3>
                    <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-zinc-400">The next step is to book a short intro call.</p>
                    <a href={CALENDAR_BOOKING_URL} target="_blank" rel="noreferrer" className="group mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#f1e8d8] px-6 py-3.5 text-sm font-semibold text-[#14110e] transition hover:bg-[#fff8eb] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#be2e3d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0f12] sm:w-auto">
                      Book Your Intro Call
                      <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                    <p className="mt-5 text-xs text-zinc-600">This form has not transmitted or stored your information.</p>
                  </div>
                )}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-y border-white/[0.06] bg-[#0d0e11] py-20 sm:py-24 lg:py-28">
          <FadeInSection className="mx-auto max-w-4xl px-5 text-center sm:px-8">
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-zinc-50 sm:text-5xl">See what's actually worth automating in your business.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">You do not need a solution in mind. Start with the process that is slowing the business down.</p>
            <PrimaryButton onClick={scrollToAudit} className="mt-8 w-full sm:w-auto">Request an Automation Audit</PrimaryButton>
          </FadeInSection>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#08090b] py-10 sm:py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-10">
          <div>
            <BrandLogo className="w-[170px] sm:w-[195px]" />
            <p className="mt-4 text-sm text-zinc-600">Automation systems built around real businesses.</p>
          </div>
          <p className="text-xs text-zinc-700">© {new Date().getFullYear()} Booth Marketing</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
