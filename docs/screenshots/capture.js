const { chromium } = require('playwright');
(async() => {
  const browser = await chromium.launch({headless: true});
  const page = await browser.newPage({ viewport: { width: 1440, height: 1600 }, deviceScaleFactor: 1 });
  await page.goto('http://localhost:8000/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'd:/DNU K? 1/THI?T K? WEB/KT A2.1/docs/screenshots/homepage_real.png', fullPage: true });
  await page.setViewportSize({ width: 390, height: 900 });
  await page.screenshot({ path: 'd:/DNU K? 1/THI?T K? WEB/KT A2.1/docs/screenshots/mobile_real.png', fullPage: true });
  await browser.close();
})();
