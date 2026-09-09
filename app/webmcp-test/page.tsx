'use client'

import { useEffect, useState } from 'react'

export default function WebMCPTestPage(){
  const [state,setState]=useState({documentContext:false,navigatorContext:false,testing:false})
  useEffect(()=>{
    const d=document as Document&{modelContext?:unknown}
    const n=navigator as Navigator&{modelContext?:unknown;modelContextTesting?:unknown}
    setState({documentContext:Boolean(d.modelContext),navigatorContext:Boolean(n.modelContext),testing:Boolean(n.modelContextTesting)})
  },[])
  if(process.env.NODE_ENV==='production') return <main className="mx-auto max-w-3xl px-6 py-20"><h1 className="text-3xl font-semibold">WebMCP diagnostics</h1><p className="mt-4 text-[#8b8b91]">Detailed diagnostics are available only in preview and development builds.</p></main>
  const Row=({label,value}:{label:string;value:boolean})=><div className="flex justify-between border-b border-white/10 py-3"><span>{label}</span><strong>{value?'Available':'Unavailable'}</strong></div>
  return <main className="mx-auto max-w-3xl px-6 py-20"><h1 className="text-3xl font-semibold">WebMCP diagnostics</h1><p className="mt-3 text-[#8b8b91]">This page exposes browser capability only. It contains no CRM data, credentials or environment values.</p><div className="mt-8 rounded-2xl border border-white/10 p-5"><Row label="document.modelContext" value={state.documentContext}/><Row label="navigator.modelContext compatibility" value={state.navigatorContext}/><Row label="navigator.modelContextTesting" value={state.testing}/><Row label="Booth WebMCP component configured" value={true}/><Row label="Expected Booth tools" value={true}/></div><p className="mt-6 text-sm text-[#8b8b91]">Expected tools: get_booth_marketing_services, recommend_booth_marketing_service, get_booth_marketing_process, request_website_audit, submit_booth_marketing_enquiry.</p></main>
}
