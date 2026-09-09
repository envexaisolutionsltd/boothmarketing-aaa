const base = process.env.SITE_URL || 'https://www.boothmarketing.co.uk'
const checks = [
  ['Homepage', '/'],
  ['robots.txt', '/robots.txt'],
  ['sitemap.xml', '/sitemap.xml'],
  ['llms.txt', '/llms.txt'],
  ['agent-info', '/agent-info'],
  ['company API', '/api/public/company'],
]

let failed = false
for (const [name, path] of checks) {
  try {
    const response = await fetch(new URL(path, base), { redirect: 'follow' })
    const text = await response.text()
    const boothPresent = path === '/robots.txt' || path === '/sitemap.xml' || text.toLowerCase().includes('booth marketing')
    const ok = response.ok && boothPresent
    console.log(`${ok ? 'PASS' : 'FAIL'} ${name}: ${response.status}`)
    if (!ok) failed = true
  } catch (error) {
    failed = true
    console.error(`FAIL ${name}: ${error.message}`)
  }
}

if (failed) process.exit(1)
console.log('Production indexing health checks passed.')
