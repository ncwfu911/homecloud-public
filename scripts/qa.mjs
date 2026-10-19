import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
const base = process.env.QA_BASE_URL || 'http://localhost:3001';
const browser = await chromium.launch({ headless: true });
await mkdir('qa-results', { recursive: true });
try {
  for (const width of [1440, 390, 320]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    for (const route of ['/', '/privacy', '/terms', '/contact']) {
      const response = await page.goto(`${base}${route}`);
      if (response.status() !== 200) throw new Error(`${route} returned ${response.status()}`);
      if (await page.locator('h1').count() !== 1) throw new Error(`Missing unique h1: ${route}`);
      const expectedTitle = route === '/' ? 'HomeCloud Portal' : `${route === '/privacy' ? 'Privacy Policy' : route === '/terms' ? 'Terms of Service' : 'Contact'} | HomeCloud Portal`;
      if (await page.title() !== expectedTitle) throw new Error(`Wrong title: ${route}`);
      if (!await page.locator('meta[name="description"]').getAttribute('content')) throw new Error(`Missing description: ${route}`);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      if (!canonical || new URL(canonical).href !== `https://homecloud.grantablehq.com${route === '/' ? '/' : route}`) throw new Error(`Wrong canonical: ${route}`);
      const text = await page.locator('body').innerText();
      if (/REQUIRES OWNER CONFIRMATION|Draft for owner review/.test(text)) throw new Error(`Draft content: ${route}`);
      if (await page.locator('footer a[href="/privacy"]').count() !== 1) throw new Error(`Missing footer privacy link: ${route}`);
      if (await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)) throw new Error(`Overflow: ${width} ${route}`);
      const links = await page.locator('a').evaluateAll(nodes => nodes.map(node => node.getAttribute('href')));
      if (links.some(link => /\.ts\.net|tailscale|https?:\/\/(?:100\.|192\.168\.|10\.|localhost)/i.test(link || ''))) throw new Error(`Private application link: ${route}`);
      for (const link of links.filter(link => link?.startsWith('/') && !link.startsWith('//'))) {
        const result = await page.request.get(`${base}${link}`);
        if (!result.ok()) throw new Error(`Broken link: ${link}`);
      }
      await page.screenshot({ path: `qa-results/${width}-${route === '/' ? 'home' : route.slice(1)}.png`, fullPage: true });
    }
    await page.goto(base);
    if (!await page.locator('.hero-photo').evaluate(async element => {
      const image = new Image();
      image.src = getComputedStyle(element).backgroundImage.slice(5, -2);
      await image.decode();
      return image.naturalWidth > 0;
    })) throw new Error('Hero asset failed to load');
    const external = await page.evaluate(() => performance.getEntriesByType('resource').map(entry => entry.name).filter(name => new URL(name).origin !== location.origin));
    if (external.length) throw new Error(`Unexpected external request: ${external.join(', ')}`);
    if (errors.length) throw new Error(errors.join('\n'));
    await page.close();
    console.log(`PASS: four pages, internal links, image, no overflow at ${width}px`);
  }
} finally { await browser.close(); }
