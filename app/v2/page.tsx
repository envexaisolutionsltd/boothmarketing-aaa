import { ArrowLeft, Clock3, Settings2 } from 'lucide-react'
import Link from 'next/link'

export default function V2Page() {
  return (
    <main className="relative grid min-h-[100dvh] place-items-center overflow-hidden bg-[#090a0b] px-5 py-10 text-[#f4f4f3]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(217,47,60,0.10),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(239,227,207,0.025),transparent_30%)]" />

      <section className="relative w-full max-w-[680px] overflow-hidden rounded-[24px] border border-white/[0.09] bg-[#0d0f10] p-6 shadow-[0_28px_100px_rgba(0,0,0,0.48)] sm:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_92%_7%,rgba(217,47,60,0.12),transparent_28%)]" />

        <div className="relative">
          <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] pb-5">
            <img src="/booth-marketing-logo.svg" alt="Booth Marketing" className="w-[154px] object-contain sm:w-[178px]" />
            <div className="inline-flex min-h-8 items-center gap-2 rounded-full border border-[#d92f3c]/20 bg-[#190f11] px-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#d6b9bc]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d92f3c] shadow-[0_0_12px_rgba(217,47,60,0.7)]" />
              V2 Configuration
            </div>
          </div>

          <div className="py-8 sm:py-10">
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.08] bg-[#141617] text-[#d8cbb7]">
              <Settings2 className="h-5 w-5" />
            </div>

            <p className="mt-5 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#d8cbb7]">Temporary service notice</p>
            <h1 className="mt-3 max-w-[560px] text-[clamp(34px,9vw,52px)] font-semibold leading-[1.02] tracking-[-0.052em]">
              This area is undergoing backend configuration.
            </h1>
            <p className="mt-5 max-w-[570px] text-[15px] leading-7 text-[#929399]">
              We are preparing the next version of this experience and completing the configuration behind it. There is nothing you need to do right now.
            </p>

            <div className="mt-7 rounded-[16px] border border-white/[0.07] bg-[#0a0c0d] p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[#d8cbb7]" />
                <div>
                  <p className="text-[13px] font-semibold text-[#e1e1e3]">Please check back soon.</p>
                  <p className="mt-1 text-[12px] leading-6 text-[#77787e]">The main Booth Marketing website remains available while this section is being prepared.</p>
                </div>
              </div>
            </div>

            <Link href="/" className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-5 text-[13px] font-semibold text-[#151515] transition hover:bg-[#f8edda]">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Booth Marketing
            </Link>
          </div>

          <div className="border-t border-white/[0.07] pt-4">
            <p className="text-[10px] leading-5 text-[#5f6066]">Booth Marketing · V2 configuration notice</p>
          </div>
        </div>
      </section>
    </main>
  )
}
