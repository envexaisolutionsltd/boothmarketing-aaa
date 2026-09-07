"use client"

import { useState } from 'react'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function login() {
    const response = await fetch('/api/admin/login', {
      method: 'POST',
      body: JSON.stringify({ password }),
    })

    if (!response.ok) {
      setError('Invalid password')
      return
    }

    window.location.href = '/admin'
  }

  return (
    <main className="grid min-h-screen place-items-center bg-[#090a0b] px-6 text-white">
      <section className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111315] p-8">
        <h1 className="text-3xl font-semibold">Admin Login</h1>
        <input className="mt-6 w-full rounded-lg bg-black p-3" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
        {error && <p className="mt-3 text-red-400">{error}</p>}
        <button onClick={login} className="mt-5 w-full rounded-lg bg-[#efe3cf] p-3 text-black">Login</button>
      </section>
    </main>
  )
}
