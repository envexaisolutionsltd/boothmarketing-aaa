import fs from 'node:fs'

const read = (path) => fs.readFileSync(path, 'utf8')
const urls = read('lib/public-urls.ts')
const sitemap = read('app/sitemap.ts')
const llms = read('app/llms.txt/route.ts')

const required = [
  'https://www.boothmarketing.co.uk',
  'websiteAudit',
  'agentInfo',
  'companyApi',
  'llms',
  'sitemap',
  'robots',
]

for (const value of required) {
  if (!urls.includes(value)) throw new Error(`Missing public URL contract: ${value}`)
}

if (!sitemap.includes("@/lib/public-urls")) throw new Error('Sitemap must use centralized public URLs')
if (!llms.includes("@/lib/public-urls")) throw new Error('llms.txt must use centralized public URLs')
if (!llms.includes("X-Robots-Tag': 'index, follow'")) throw new Error('llms.txt must remain indexable')

console.log('Indexing/discovery contract checks passed.')
