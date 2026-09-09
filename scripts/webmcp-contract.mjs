import fs from 'node:fs'

const company=fs.readFileSync('lib/public-company.ts','utf8')
const tools=fs.readFileSync('components/WebMCPTools.tsx','utf8')
const leads=fs.readFileSync('app/api/leads/route.ts','utf8')
const expected=['get_booth_marketing_services','recommend_booth_marketing_service','get_booth_marketing_process','request_website_audit','submit_booth_marketing_enquiry']
for(const name of expected){if(!tools.includes(`name:'${name}'`))throw new Error(`Missing WebMCP tool: ${name}`)}
for(const phrase of ['Conversion-Focused Websites','Landing Pages','Website Conversion Audit']){if(!company.includes(phrase))throw new Error(`Public company contract missing: ${phrase}`)}
if(!tools.includes('confirmed_by_user'))throw new Error('Write tools must require explicit user confirmation')
if(!leads.includes('webmcpConfirmed'))throw new Error('Lead API must distinguish confirmed WebMCP writes')
if(!leads.includes('findRecentDuplicateLead'))throw new Error('Lead API must retain duplicate protection')
if(/ADMIN_PASSWORD|POSTGRES_URL|SUPABASE_SERVICE_ROLE/.test(company+tools))throw new Error('Public agent code references a secret name')
console.log('WebMCP contract checks passed:', expected.length, 'tools')
