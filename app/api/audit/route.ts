import { NextResponse } from "next/server";

type AuditRequest = { name?: string; business?: string; email?: string; friction?: string };

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AuditRequest;
    const name = body.name?.trim();
    const business = body.business?.trim();
    const email = body.email?.trim();
    const friction = body.friction?.trim();

    if (!name || !business || !email || !friction || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Invalid form submission" }, { status: 400 });
    }

    const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) {
      console.error("Audit form storage is not configured.");
      return NextResponse.json({ error: "Form unavailable" }, { status: 503 });
    }

    const response = await fetch(`${url}/rest/v1/automation_audit_requests`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ name, business, email, friction }),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Audit form insert failed", response.status, await response.text());
      return NextResponse.json({ error: "Submission failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
