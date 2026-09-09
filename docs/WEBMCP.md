# Booth Marketing WebMCP

## Purpose

Booth Marketing exposes a small public WebMCP tool surface so compatible browser-based AI agents can understand the business, recommend an appropriate service and, only after deliberate user intent, submit a website audit or sales enquiry.

WebMCP is progressive enhancement. The normal website, Website Audit form, admin and existing API continue to work when the browser does not implement WebMCP or when Cloudflare's bridge is unavailable.

The implementation follows the current WebMCP browser API shape (`document.modelContext.registerTool`). A `navigator.modelContext` fallback is retained for compatible experimental implementations/bridges. No remote MCP endpoint is invented or assumed.

## Public tools

### `get_booth_marketing_services`
Read-only. No input fields. Returns the authoritative public Booth Marketing description, positioning, buying journey, primary and secondary services, ideal customer, problems solved and public calls to action.

### `recommend_booth_marketing_service`
Read-only.

Required inputs:
- `business_type` string, max 120
- `current_problem` string, max 800
- `primary_goal` string, max 500

Optional:
- `website_url` string, max 500. Context only; this tool does not fetch or inspect the URL.
- `additional_context` string, max 1000

Returns a service recommendation, reason, suggested next step and an explicit limitation. It never claims that a website or workflow was audited.

### `get_booth_marketing_process`
Read-only. No input fields. Returns the genuine public website engagement process, public ways to start and the engagement caveat.

### `request_website_audit`
Consequential/write operation.

Required:
- `name`, max 120
- `email`, max 200
- `company`, max 160
- `website_url`, max 500
- `confirmed_by_user` boolean; must be true only after explicit user approval

Optional:
- `business_type`, max 120
- `primary_problem`, max 500
- `goal`, max 500
- `message`, max 1000

This calls the existing `/api/leads` route and existing `saveLead()` database path. It does not create a second CRM or expose the database ID to the agent response.

### `submit_booth_marketing_enquiry`
Consequential/write operation.

Required:
- `name`, max 120
- `email`, max 200
- `company`, max 160
- `message`, max 1500
- `confirmed_by_user` boolean; must be true only after explicit user approval

Optional:
- `website_url`, max 500
- `business_type`, max 120

Uses the same existing lead route and storage as the Website Audit.

## Architecture

`compatible browser / Cloudflare WebMCP bridge`
→ `components/WebMCPTools.tsx`
→ read tools use `lib/public-company.ts`
→ write tools POST same-origin to `/api/leads`
→ existing server validation/rate limiting/lead persistence
→ existing private Admin Leads workspace

The client registration contains no secrets and has no access to private admin data.

`lib/public-company.ts` is the authoritative agent-facing representation of Booth Marketing's approved public service information. It intentionally contains no prices, clients, testimonials, guarantees, awards, case-study claims or performance statistics.

## Security model

WebMCP is treated as a public interface.

The tools do not expose admin authentication, passwords, database credentials, environment variables, existing leads, CRM records, analytics, financial data, delete actions, arbitrary SQL, server configuration or private APIs.

Write requests reuse `/api/leads`, which applies:
- same-origin checking
- JSON content-type requirement
- request-size limit
- IP rate limiting
- honeypot compatibility
- server-side text sanitisation and maximum lengths
- email validation
- URL normalisation and HTTP(S) validation
- required-field validation
- explicit WebMCP confirmation check
- safe generic server errors
- a ten-minute database-scoped duplicate check for matching email/company/website/message submissions

Tool metadata marks the three information/recommendation tools read-only and the two submission tools consequential.

## Cloudflare

Cloudflare remains in front of the production domain. Agent Readiness WebMCP and the WebMCP bridge may expose/bridge browser tools, but this application does not assume those settings created a remote MCP server endpoint.

Do not add an `/mcp` endpoint merely because Cloudflare reports Site MCP server as enabled. The current integration is browser-side WebMCP registration and works independently as progressive enhancement.

No additional Cloudflare setting is required by this code. Keep the existing WebMCP bridge enabled if it is part of the intended production setup.

## Feature detection and fallback

The component first checks for the current `document.modelContext.registerTool` API and then a compatible `navigator.modelContext.registerTool` implementation. If neither exists, it returns without changing the page.

Unsupported browsers therefore continue to use the normal website and forms.

Development builds log only WebMCP availability, registration counts and registration failures. Lead/contact data and secrets are never logged. Production logging is intentionally minimal.

## Kill switch

Set:

`NEXT_PUBLIC_WEBMCP_ENABLED=false`

and rebuild/redeploy to prevent Booth Marketing's own WebMCP tool registration. This does not disable Cloudflare account-level features; those remain controlled in Cloudflare. Removing or omitting the variable leaves site tool registration enabled by default.

## Local testing

1. Install dependencies with `npm install`.
2. Configure the same database environment required by the existing application if testing write operations.
3. Run `npm run dev`.
4. Open the site in a WebMCP-capable experimental browser.
5. Verify normal rendering first.
6. List registered tools using the testing API supported by that browser. Current Cloudflare Browser Run documentation uses `navigator.modelContextTesting.listTools()`.
7. Execute read tools and inspect their structured result.
8. Do not execute write tools against a production database unless the test submission is intentional.

A normal stable browser that lacks WebMCP should show no WebMCP console errors and the website should remain fully usable.

## Production testing on boothmarketing.co.uk

After an explicitly approved production deployment:

1. Navigate to `https://www.boothmarketing.co.uk` in a WebMCP-capable Chrome/Cloudflare Browser Run lab session.
2. In DevTools run `await navigator.modelContextTesting.listTools()` when that testing API is available.
3. Confirm exactly these site tools are present: `get_booth_marketing_services`, `recommend_booth_marketing_service`, `get_booth_marketing_process`, `request_website_audit`, `submit_booth_marketing_enquiry`.
4. Execute `get_booth_marketing_services` with `{}` and confirm the structured public information is accurate.
5. Execute the recommendation tool with a dental-practice example and confirm it recommends a website service without claiming an audit occurred.
6. For a deliberate write test, first approve the test details, then call `request_website_audit` with `confirmed_by_user: true`. Confirm the tool reports success and the lead appears in the existing private Admin Leads workspace.
7. Retry the identical submission within ten minutes and confirm `duplicate: true` and no additional lead is created.
8. Test invalid email, invalid URL, missing required data, missing confirmation and oversized input. Confirm safe errors and no lead creation.
9. Open the site in an unsupported/stable browser and re-check the normal Website Audit form.

Never paste production secrets into DevTools or WebMCP tool arguments.

## Known limitations

WebMCP remains experimental and browser support/API details can change. Cloudflare Browser Run documents WebMCP in its lab/Chrome beta environment, not as a universal stable-browser capability. The application therefore avoids making WebMCP a dependency of the human website.

The recommendation tool is deterministic and intentionally conservative. It does not crawl the supplied website or perform an audit.

The current rate limiter is the existing application in-memory limiter. Cloudflare can provide additional edge protections independently, but this integration does not require new Cloudflare rules.

## Optional Phase 2

If a non-browser agent ecosystem later needs direct remote access, consider a separately designed remote MCP server with explicit authentication/rate-limit/consent architecture. That should be treated as a new public API surface, security-reviewed independently and not silently inferred from Cloudflare's Site MCP server toggle.
