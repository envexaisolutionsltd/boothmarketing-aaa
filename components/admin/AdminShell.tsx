import Link from 'next/link'
import { BarChart3, Bot, ExternalLink, FileSearch, LayoutDashboard, LogOut, Settings, Users } from 'lucide-react'
import type { ReactNode } from 'react'

const nav = [
  { href: '/admin', label: 'Overview', icon: LayoutDashboard },
  { href: '/admin/leads', label: 'Leads', icon: Users },
  { href: '/admin/audits', label: 'Website Audits', icon: FileSearch },
  { href: '/admin/automation-audits', label: 'Automation Audits', icon: Bot },
  { href: '/admin/pipeline', label: 'Pipeline', icon: BarChart3 },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
]

export default function AdminShell({ children, section = 'Overview' }: { children: ReactNode; section?: string }) {
  return <div className="min-h-screen bg-[#090a0b] text-[#f4f4f3] lg:grid lg:grid-cols-[245px_1fr]">
    <aside className="hidden min-h-screen border-r border-white/[0.07] bg-[#0b0d0e] lg:flex lg:flex-col lg:sticky lg:top-0 lg:h-screen">
      <div className="border-b border-white/[0.07] px-6 py-6"><img src="/booth-marketing-logo.png" alt="Booth Marketing" className="w-[150px]"/><p className="mt-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[#66676d]">Operations</p></div>
      <nav className="flex-1 space-y-1 p-3">{nav.map(item => { const Icon=item.icon; const active=section===item.label; return <Link key={item.href} href={item.href} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-[12px] font-medium transition ${active?'border border-[#efe3cf]/10 bg-[#efe3cf] text-[#151515]':'text-[#8b8c92] hover:bg-white/[0.035] hover:text-white'}`}><Icon className="h-4 w-4"/>{item.label}</Link>})}</nav>
      <div className="space-y-1 border-t border-white/[0.07] p-3"><Link href="/" target="_blank" className="flex items-center gap-3 rounded-xl px-3 py-3 text-[12px] text-[#7d7e84] hover:bg-white/[0.035] hover:text-white"><ExternalLink className="h-4 w-4"/>View website</Link><form action="/api/admin/logout" method="post"><button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-[12px] text-[#7d7e84] hover:bg-white/[0.035] hover:text-white"><LogOut className="h-4 w-4"/>Log out</button></form><div className="px-3 pt-3 text-[9px] uppercase tracking-[0.16em] text-[#4f5055]"><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"/>Private operations</div></div>
    </aside>
    <div className="min-w-0">
      <header className="sticky top-0 z-30 flex min-h-[62px] items-center justify-between border-b border-white/[0.07] bg-[#090a0b]/95 px-4 backdrop-blur-xl sm:px-6 lg:px-8"><div className="flex items-center gap-3"><img src="/booth-marketing-logo.png" alt="Booth Marketing" className="w-[125px] lg:hidden"/><span className="hidden text-[11px] font-semibold text-[#8b8c92] lg:block">{section}</span></div><div className="flex items-center gap-2"><span className="hidden rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[9px] uppercase tracking-[0.14em] text-[#696a70] sm:inline">Secure workspace</span><form action="/api/admin/logout" method="post" className="lg:hidden"><button className="rounded-lg border border-white/[0.08] px-3 py-2 text-[11px] text-[#8b8c92]">Log out</button></form></div></header>
      <nav className="sticky top-[62px] z-20 flex gap-1 overflow-x-auto border-b border-white/[0.07] bg-[#0b0d0e]/98 px-3 py-2 lg:hidden">{nav.map(item=>{const Icon=item.icon;const active=section===item.label;return <Link key={item.href} href={item.href} className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-[10px] font-medium ${active?'bg-[#efe3cf] text-[#151515]':'text-[#8b8c92]'}`}><Icon className="h-3.5 w-3.5"/>{item.label}</Link>})}</nav>
      <main className="px-4 py-7 sm:px-6 sm:py-9 lg:px-8 xl:px-10">{children}</main>
    </div>
  </div>
}
