import { chromium } from 'playwright'
import fs from 'node:fs/promises'
import path from 'node:path'

const projects = [
  { name: 'northstead', url: 'https://northstead-commercial-risk.vercel.app' },
  { name: 'purple-door', url: 'https://purple-door-nine.vercel.app' },
  { name: 'graft-haus', url: 'https://graft-haus-gym.vercel.app' },
]

const outDir = path.join('public', 'work')
await fs.mkdir(outDir, { recursive: true })

const browser = await chromium.launch({ headless: true })
try {
  for (const project of projects) {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
    const page = await context.newPage()
    await page.goto(project.url, { waitUntil: 'networkidle', timeout: 60000 })
    await page.waitForTimeout(1500)

    const title = await page.title()
    const body = (await page.locator('body').innerText()).slice(0, 5000)
    if (/log in.*vercel|vercel authentication|deployment protection/i.test(`${title}\n${body}`)) {
      throw new Error(`${project.name}: public URL returned Vercel authentication instead of the website`)
    }

    await page.screenshot({
      path: path.join(outDir, `${project.name}.png`),
      fullPage: false,
      animations: 'disabled',
    })
    await context.close()
  }
} finally {
  await browser.close()
}

console.log('PORTFOLIO_CAPTURE_PASS')
