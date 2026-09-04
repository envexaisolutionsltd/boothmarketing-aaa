'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useMemo, useState } from 'react'

export default function CalculatorPage() {
  const [teamMembers, setTeamMembers] = useState(5)
  const [hourlyCost, setHourlyCost] = useState(24)
  const [hoursPerWeek, setHoursPerWeek] = useState(4)
  const [weeksPerYear, setWeeksPerYear] = useState(48)
  const [reduction, setReduction] = useState(40)

  const result = useMemo(() => {
    const weeklyHours = teamMembers * hoursPerWeek
    const annualHours = weeklyHours * weeksPerYear
    const annualCost = annualHours * hourlyCost
    const recoveredHours = annualHours * (reduction / 100)
    const recoveredCapacity = annualCost * (reduction / 100)
    return { weeklyHours, annualHours, annualCost, recoveredHours, recoveredCapacity }
  }, [teamMembers, hourlyCost, hoursPerWeek, weeksPerYear, reduction])

  const currency = (value: number) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(value)
  const number = (value: number) => new Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 }).format(value)

  return (
    <main className="min-h-screen bg-[#090a0b] text-[#f4f4f3]">
      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#090a0b]/85 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[64px] w-[min(1080px,calc(100%-28px))] items-center justify-between gap-3">
          <Link href="/" className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#d8cbb7]"><ArrowLeft className="h-4 w-4" />Home</Link>
          <img src="/booth-marketing-logo.png" alt="Booth Marketing" className="w-[118px] sm:w-[145px]" />
          <Link href="/automation-audit" className="inline-flex min-h-11 items-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-4 text-[12px] font-semibold text-[#151515]">Request Audit</Link>
        </div>
      </header>

      <section className="border-b border-white/[0.055] py-12 sm:py-16">
        <div className="mx-auto w-[min(1080px,calc(100%-28px))]">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#d8cbb7]">Operational Capacity Calculator</p>
          <h1 className="mt-4 max-w-[840px] text-[clamp(40px,9vw,62px)] font-semibold leading-[1.01] tracking-[-0.055em]">See how much staff capacity repetitive work may be consuming.</h1>
          <p className="mt-5 max-w-[760px] text-[15px] leading-7 text-[#929399]">Use your own figures to model the annual staff capacity tied up in repetitive operational work. This is an estimate, not a savings guarantee.</p>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto w-[min(1080px,calc(100%-28px))]">
          <div className="overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.035] shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="border-b border-white/[0.07] p-5 sm:p-7 lg:border-b-0 lg:border-r">
                <div className="space-y-6">
                  <RangeInput label="Employees involved" value={teamMembers} min={1} max={50} suffix="people" onChange={setTeamMembers} />
                  <RangeInput label="Average hourly staff cost" value={hourlyCost} min={10} max={100} prefix="£" suffix="/ hr" onChange={setHourlyCost} />
                  <RangeInput label="Repetitive hours per employee each week" value={hoursPerWeek} min={1} max={30} suffix="hrs" onChange={setHoursPerWeek} />
                  <RangeInput label="Working weeks per year" value={weeksPerYear} min={40} max={52} suffix="weeks" onChange={setWeeksPerYear} />
                  <RangeInput label="Potential reduction scenario" value={reduction} min={10} max={80} suffix="%" onChange={setReduction} />
                </div>
              </div>

              <div className="p-5 sm:p-7">
                <div className="rounded-[17px] border border-white/[0.07] bg-[#0b0d0e]/76 p-5 sm:p-6">
                  <p className="text-[12px] leading-5 text-[#85868c]">Estimated annual staff capacity tied to repetitive work</p>
                  <p className="mt-3 text-[clamp(46px,11vw,72px)] font-semibold leading-none tracking-[-0.06em] text-[#efe3cf]">{currency(result.annualCost)}</p>
                  <div className="mt-5 flex flex-wrap gap-4 border-t border-white/[0.06] pt-4 text-[12px] text-[#77787e]"><span>{number(result.annualHours)} hours / year</span><span>{number(result.weeklyHours)} hours / week</span></div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[15px] border border-[#d92f3c]/20 bg-[#190f11]/68 p-5"><p className="text-[11px] text-[#a08c90]">At a {reduction}% reduction scenario</p><p className="mt-2 text-2xl font-semibold">{number(result.recoveredHours)} hrs</p><p className="mt-1 text-xs text-[#77787e]">potentially returned to the team</p></div>
                  <div className="rounded-[15px] border border-white/[0.07] bg-[#0b0d0e]/70 p-5"><p className="text-[11px] text-[#85868c]">Staff capacity potentially released</p><p className="mt-2 text-2xl font-semibold">{currency(result.recoveredCapacity)}</p><p className="mt-1 text-xs text-[#77787e]">not a guaranteed saving or profit figure</p></div>
                </div>

                <div className="mt-4 rounded-[15px] border border-white/[0.07] bg-white/[0.025] p-5"><p className="text-[13px] font-semibold text-[#dedee0]">Released capacity is not the same as profit.</p><p className="mt-2 text-[12px] leading-6 text-[#7f8086]">It could mean more client-facing time, faster response, less overtime, lower pressure on staff, more operating capacity or delaying an additional hire.</p></div>

                <Link href="/automation-audit" className="mt-5 inline-flex min-h-[50px] items-center justify-center rounded-lg border border-[#efe3cf] bg-[#efe3cf] px-5 text-[13px] font-semibold text-[#151515]">See what part is worth automating<ArrowRight className="ml-2.5 h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function RangeInput({ label, value, min, max, prefix, suffix, onChange }: { label: string; value: number; min: number; max: number; prefix?: string; suffix?: string; onChange: (value: number) => void }) {
  return <div><div className="flex items-end justify-between gap-4"><label className="max-w-[68%] text-[12px] font-medium leading-5 text-[#c7c7ca]">{label}</label><span className="shrink-0 text-[12px] font-semibold text-white">{prefix}{value}{suffix ? ` ${suffix}` : ''}</span></div><input aria-label={label} type="range" min={min} max={max} value={value} onChange={event => onChange(Number(event.target.value))} className="mt-3 h-2 w-full cursor-pointer accent-[#d92f3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d92f3c]/40" /></div>
}
