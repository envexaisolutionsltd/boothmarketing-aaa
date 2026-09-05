import { chromium } from 'playwright'
import fs from 'node:fs/promises'

const baseURL = process.env.QA_BASE_URL || 'https://www.boothmarketing.co.uk'
const outDir = 'qa-artifacts'
await fs.mkdir(outDir, { recursive: true })

const viewports = [
  { name: '320', width: 320, height: 812 },
  { name: '375', width: 375, height: 812 },
  { name: '390', width: 390, height: 844 },
  { name: '430', width: 430, height: 932 },
]

const instagramUA = 'Mozilla/5.0 (Linux; Android 13; Pixel 7 Pro Build/TQ3A.230805.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.0.0 Mobile Safari/537.36 Instagram 320.0.0.0.0 Android'

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

async function waitForProduction(page) {
  for (let attempt = 0; attempt < 18; attempt += 1) {
    try {
      await page.goto(baseURL, { waitUntil: 'domcontentloaded', timeout: 45000 })
      const hasCurrentHero = await page.locator('h1').filter({ hasText: 'AI is changing how customers search' }).count()
      if (hasCurrentHero) return
    } catch {}
    await page.waitForTimeout(10000)
  }
  throw new Error('Production did not expose the current homepage within the QA wait window')
}

async function checkPageGeometry(page, width, label) {
  const metrics = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    bodyScrollWidth: document.body.scrollWidth,
  }))
  assert(metrics.scrollWidth <= width + 1, `${label}: document horizontal overflow ${metrics.scrollWidth}px at ${width}px viewport`)
  assert(metrics.bodyScrollWidth <= width + 1, `${label}: body horizontal overflow ${metrics.bodyScrollWidth}px at ${width}px viewport`)

  const h1 = page.locator('h1').first()
  await h1.waitFor({ state: 'visible' })
  const h1Box = await h1.boundingBox()
  assert(h1Box && h1Box.x >= -1 && h1Box.x + h1Box.width <= width + 1, `${label}: H1 exceeds viewport`)
}

async function checkMenu(page, width, label) {
  const menuButton = page.getByRole('button', { name: 'Open menu' })
  await menuButton.waitFor({ state: 'visible' })
  const buttonBox = await menuButton.boundingBox()
  assert(buttonBox && buttonBox.x >= 0 && buttonBox.x + buttonBox.width <= width + 1, `${label}: hamburger exceeds viewport`)

  await menuButton.click()
  const panel = page.getByRole('dialog', { name: 'Site navigation' })
  await panel.waitFor({ state: 'visible' })

  const panelState = await panel.evaluate((el) => {
    const style = getComputedStyle(el)
    const rect = el.getBoundingClientRect()
    const center = document.elementFromPoint(rect.left + rect.width / 2, Math.min(rect.top + 120, rect.bottom - 20))
    return {
      backgroundColor: style.backgroundColor,
      opacity: style.opacity,
      visibility: style.visibility,
      rect: { left: rect.left, right: rect.right, width: rect.width, top: rect.top, bottom: rect.bottom },
      centerInsidePanel: Boolean(center?.closest('aside[role="dialog"]')),
    }
  })

  assert(panelState.backgroundColor === 'rgb(11, 13, 14)', `${label}: drawer is not opaque; computed background ${panelState.backgroundColor}`)
  assert(panelState.opacity === '1' && panelState.visibility !== 'hidden', `${label}: drawer is not fully visible`)
  assert(panelState.rect.width >= Math.min(275, width * 0.78), `${label}: drawer too narrow`)
  assert(panelState.rect.left >= -1 && panelState.rect.right <= width + 1, `${label}: drawer exceeds viewport`)
  assert(panelState.centerInsidePanel, `${label}: backdrop or another layer is covering the drawer`)

  for (const text of ['Websites', 'How It Works', 'Automation', 'About', 'Website Audit']) {
    await page.getByRole('link', { name: text, exact: true }).waitFor({ state: 'visible' })
  }

  await page.screenshot({ path: `${outDir}/${label}-menu.png`, fullPage: false })
  await page.getByRole('button', { name: 'Close menu' }).click()
  await panel.waitFor({ state: 'hidden' })
}

async function checkHomepage(browser, viewport, userAgent, suffix = '') {
  const label = `${viewport.name}${suffix}`
  const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height }, userAgent })
  const page = await context.newPage()
  const pageErrors = []
  page.on('pageerror', (error) => pageErrors.push(`pageerror: ${error.message}`))
  page.on('console', (message) => { if (message.type() === 'error') pageErrors.push(`console: ${message.text()}`) })

  await waitForProduction(page)
  await page.waitForTimeout(750)
  await checkPageGeometry(page, viewport.width, `${label} homepage`)

  const primaryCta = page.getByRole('link', { name: 'Request Website Audit', exact: true }).first()
  await primaryCta.waitFor({ state: 'visible' })
  const ctaBox = await primaryCta.boundingBox()
  assert(ctaBox && ctaBox.x >= -1 && ctaBox.x + ctaBox.width <= viewport.width + 1, `${label}: primary CTA exceeds viewport`)

  const pathCard = page.getByText('AI-assisted buying path', { exact: true })
  await pathCard.waitFor({ state: 'visible' })

  await page.screenshot({ path: `${outDir}/${label}-home.png`, fullPage: true })
  await checkMenu(page, viewport.width, label)

  assert(pageErrors.length === 0, `${label}: browser errors: ${pageErrors.join(' | ')}`)
  await context.close()
}

async function checkAudit(browser, viewport) {
  const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } })
  const page = await context.newPage()
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))

  await page.goto(`${baseURL}/website-audit`, { waitUntil: 'domcontentloaded', timeout: 45000 })
  await page.waitForTimeout(500)
  await checkPageGeometry(page, viewport.width, `${viewport.name} audit`)
  await page.getByRole('heading', { name: 'Find out what your website is making harder than it needs to be.' }).waitFor({ state: 'visible' })
  await page.getByText('Keep it', { exact: true }).waitFor({ state: 'visible' })
  await page.getByText('Improve it', { exact: true }).waitFor({ state: 'visible' })
  await page.getByText('Rebuild it', { exact: true }).waitFor({ state: 'visible' })
  await page.screenshot({ path: `${outDir}/${viewport.name}-audit.png`, fullPage: true })
  assert(errors.length === 0, `${viewport.name} audit: browser errors: ${errors.join(' | ')}`)
  await context.close()
}

const browser = await chromium.launch({ headless: true })
try {
  for (const viewport of viewports) {
    await checkHomepage(browser, viewport, undefined)
  }
  await checkHomepage(browser, viewports[2], instagramUA, '-instagram')
  await checkAudit(browser, viewports[0])
  await checkAudit(browser, viewports[2])
  console.log('MOBILE_QA_PASS: homepage, menu, Instagram-style browser and audit page passed at all requested widths')
} finally {
  await browser.close()
}
