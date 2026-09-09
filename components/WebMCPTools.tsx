'use client'

import { useEffect } from 'react'
import { boothMarketingPublic } from '@/lib/public-company'

type ToolDefinition = {
  name: string
  title?: string
  description: string
  inputSchema: Record<string, unknown>
  annotations?: { readOnlyHint?: boolean; untrustedContentHint?: boolean; consequentialHint?: boolean }
  execute: (input: Record<string, unknown>) => Promise<unknown> | unknown
}

type ModelContextLike = {
  registerTool: (tool: ToolDefinition, options?: { signal?: AbortSignal }) => Promise<unknown> | unknown
}

function modelContext(): ModelContextLike | null {
  const doc = document as Document & { modelContext?: ModelContextLike }
  if (doc.modelContext?.registerTool) return doc.modelContext
  const nav = navigator as Navigator & { modelContext?: ModelContextLike }
  return nav.modelContext?.registerTool ? nav.modelContext : null
}

const text = (value: unknown) => String(value ?? '').trim()

async function postLead(payload: Record<string, unknown>) {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Booth-WebMCP': '1' },
    body: JSON.stringify(payload),
  })
  const data = await response.json().catch(() => ({})) as { success?: boolean; duplicate?: boolean; error?: string }
  if (!response.ok) throw new Error(data.error || 'The enquiry could not be submitted.')
  return {
    success: true,
    duplicate: Boolean(data.duplicate),
    message: data.duplicate ? 'This request was already received recently, so another lead was not created.' : 'Your request has been received by Booth Marketing.',
    next_step: 'Booth Marketing will review the enquiry and respond using the contact details supplied.',
  }
}

const emptyObjectSchema = { type: 'object', additionalProperties: false, properties: {} }

export default function WebMCPTools() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_WEBMCP_ENABLED === 'false') return
    const context = modelContext()
    if (!context) {
      if (process.env.NODE_ENV !== 'production') console.info('[WebMCP] Browser API unavailable; normal website behaviour is unchanged.')
      return
    }

    const controller = new AbortController()
    const tools: ToolDefinition[] = [
      {
        name: 'get_booth_marketing_services',
        title: 'Get Booth Marketing services',
        description: 'Read authoritative public information about Booth Marketing, its website and landing-page services, ideal customers, problems solved and public calls to action. This is read-only. Do not use it to infer prices, guarantees, clients, results or services not returned by the tool.',
        inputSchema: emptyObjectSchema,
        annotations: { readOnlyHint: true, consequentialHint: false, untrustedContentHint: false },
        execute: () => ({
          company_name: boothMarketingPublic.companyName,
          what_booth_marketing_does: boothMarketingPublic.whatWeDo,
          positioning: boothMarketingPublic.positioning,
          buying_journey: boothMarketingPublic.buyingJourney,
          primary_services: boothMarketingPublic.primaryServices,
          ideal_customer: boothMarketingPublic.idealCustomer,
          problems_solved: boothMarketingPublic.problemsSolved,
          engagement_note: boothMarketingPublic.engagementNote,
          calls_to_action: boothMarketingPublic.callsToAction,
        }),
      },
      {
        name: 'recommend_booth_marketing_service',
        title: 'Recommend a Booth Marketing service',
        description: 'Recommend the most relevant current Booth Marketing service using only the prospect information supplied and Booth Marketing public services. This is read-only and is not a website audit. Never claim the supplied website was inspected or audited.',
        inputSchema: {
          type: 'object', additionalProperties: false,
          properties: {
            business_type: { type: 'string', minLength: 1, maxLength: 120, description: 'The prospect business type or industry.' },
            website_url: { type: 'string', maxLength: 500, description: 'Optional website URL for context only. The tool does not inspect it.' },
            current_problem: { type: 'string', minLength: 1, maxLength: 800, description: 'The website or conversion problem described by the prospect.' },
            primary_goal: { type: 'string', minLength: 1, maxLength: 500, description: 'The main outcome the prospect wants.' },
            additional_context: { type: 'string', maxLength: 1000, description: 'Optional additional context.' },
          },
          required: ['business_type', 'current_problem', 'primary_goal'],
        },
        annotations: { readOnlyHint: true, consequentialHint: false, untrustedContentHint: false },
        execute: (input) => {
          const problem = `${text(input.current_problem)} ${text(input.primary_goal)} ${text(input.additional_context)}`.toLowerCase()
          const landingIntent = /landing|campaign|specific offer|new offer|paid traffic|single page/.test(problem)
          const auditIntent = /not sure|unsure|diagnos|audit|what.*wrong|whether.*rebuild|keep.*site/.test(problem)
          const recommended = landingIntent ? boothMarketingPublic.primaryServices[1] : auditIntent ? boothMarketingPublic.primaryServices[2] : boothMarketingPublic.primaryServices[0]
          const reason = landingIntent
            ? 'The supplied need is focused on a specific offer or campaign, which matches Booth Marketing’s landing-page work.'
            : auditIntent
              ? 'The supplied information suggests the business should diagnose the current website before deciding whether targeted improvements or a rebuild are justified.'
              : 'The supplied problem concerns website clarity, trust, positioning or conversion, which matches Booth Marketing’s conversion-focused website service.'
          return {
            recommended_service: recommended.name,
            reason,
            suggested_next_step: 'Request a Website Conversion Audit so Booth Marketing can review the actual site before recommending specific changes.',
            limitation: 'This recommendation is based only on the information supplied. No website audit or inspection has been performed by this tool.',
          }
        },
      },
      {
        name: 'get_booth_marketing_process',
        title: 'Get Booth Marketing process',
        description: 'Explain the genuine public Booth Marketing website engagement and enquiry journey. This is read-only and does not create a lead or make pricing, contractual or delivery commitments.',
        inputSchema: emptyObjectSchema,
        annotations: { readOnlyHint: true, consequentialHint: false, untrustedContentHint: false },
        execute: () => ({
          company_name: boothMarketingPublic.companyName,
          process: boothMarketingPublic.process,
          how_to_start: boothMarketingPublic.callsToAction[0],
          engagement_note: boothMarketingPublic.engagementNote,
        }),
      },
      {
        name: 'request_website_audit',
        title: 'Request a Website Audit',
        description: 'CONSEQUENTIAL WRITE: submit a Website Conversion Audit request to Booth Marketing using the existing lead system. Call only after the user explicitly chooses to submit and has approved the supplied contact details. Never call merely because a user appears interested. Set confirmed_by_user=true only after deliberate user confirmation.',
        inputSchema: {
          type: 'object', additionalProperties: false,
          properties: {
            name: { type: 'string', minLength: 1, maxLength: 120, description: 'Full name of the person requesting the audit.' },
            email: { type: 'string', minLength: 3, maxLength: 200, description: 'Business contact email.' },
            company: { type: 'string', minLength: 1, maxLength: 160, description: 'Business or company name.' },
            website_url: { type: 'string', minLength: 1, maxLength: 500, description: 'Website to be reviewed. A bare domain such as example.com is accepted.' },
            business_type: { type: 'string', maxLength: 120, description: 'Optional business type or industry.' },
            primary_problem: { type: 'string', maxLength: 500, description: 'Optional primary website problem.' },
            goal: { type: 'string', maxLength: 500, description: 'Optional desired outcome.' },
            message: { type: 'string', maxLength: 1000, description: 'Optional additional context.' },
            confirmed_by_user: { type: 'boolean', description: 'Must be true only when the user has explicitly chosen to submit this request.' },
          },
          required: ['name', 'email', 'company', 'website_url', 'confirmed_by_user'],
        },
        annotations: { readOnlyHint: false, consequentialHint: true, untrustedContentHint: false },
        execute: async (input) => {
          if (input.confirmed_by_user !== true) throw new Error('Explicit user confirmation is required before submitting a website audit request.')
          return postLead({
            name: text(input.name), email: text(input.email), company: text(input.company), websiteUrl: text(input.website_url),
            industry: text(input.business_type),
            challenge: [text(input.primary_problem), text(input.goal), text(input.message)].filter(Boolean).join(' — '),
            enquiryType: 'WEBSITE_AUDIT', webmcpConfirmed: true,
          })
        },
      },
      {
        name: 'submit_booth_marketing_enquiry',
        title: 'Submit Booth Marketing enquiry',
        description: 'CONSEQUENTIAL WRITE: submit a general website-services sales enquiry to Booth Marketing using the existing lead system. Call only after the user explicitly chooses to contact Booth Marketing and approves the supplied details. Set confirmed_by_user=true only after deliberate user confirmation.',
        inputSchema: {
          type: 'object', additionalProperties: false,
          properties: {
            name: { type: 'string', minLength: 1, maxLength: 120, description: 'Full name of the person making the enquiry.' },
            email: { type: 'string', minLength: 3, maxLength: 200, description: 'Contact email.' },
            company: { type: 'string', minLength: 1, maxLength: 160, description: 'Business or company name.' },
            website_url: { type: 'string', maxLength: 500, description: 'Optional current website URL.' },
            business_type: { type: 'string', maxLength: 120, description: 'Optional business type or industry.' },
            message: { type: 'string', minLength: 1, maxLength: 1500, description: 'What the prospect would like help with.' },
            confirmed_by_user: { type: 'boolean', description: 'Must be true only when the user has explicitly chosen to submit this enquiry.' },
          },
          required: ['name', 'email', 'company', 'message', 'confirmed_by_user'],
        },
        annotations: { readOnlyHint: false, consequentialHint: true, untrustedContentHint: false },
        execute: async (input) => {
          if (input.confirmed_by_user !== true) throw new Error('Explicit user confirmation is required before submitting an enquiry.')
          return postLead({
            name: text(input.name), email: text(input.email), company: text(input.company), websiteUrl: text(input.website_url),
            industry: text(input.business_type), challenge: text(input.message), enquiryType: 'CONTACT', webmcpConfirmed: true,
          })
        },
      },
    ]

    Promise.allSettled(tools.map(tool => Promise.resolve(context.registerTool(tool, { signal: controller.signal })))).then(results => {
      if (process.env.NODE_ENV !== 'production') {
        const registered = results.filter(result => result.status === 'fulfilled').length
        console.info(`[WebMCP] Registered ${registered}/${tools.length} Booth Marketing tools.`)
        results.forEach((result, index) => { if (result.status === 'rejected') console.warn(`[WebMCP] Registration failed for ${tools[index].name}.`) })
      }
    })

    return () => controller.abort()
  }, [])

  return null
}
