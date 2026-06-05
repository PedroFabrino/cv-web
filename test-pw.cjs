const { chromium } = require('playwright');
const { spawn } = require('child_process');

(async () => {
  console.log('Starting preview server...');
  const server = spawn('npx', ['vite', 'preview', '--port', '4173'], { stdio: 'pipe', shell: true });
  
  // Wait for server to start
  await new Promise(r => setTimeout(r, 2000));

  console.log('Launching browser...');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err));
  
  console.log('Navigating to http://localhost:4173/cv-web/');
  const response = await page.goto('http://localhost:4173/cv-web/');
  console.log('Status:', response.status());

  await new Promise(r => setTimeout(r, 1000));
  
  const heroHtml = await page.evaluate(() => {
    const hero = document.querySelector('.hero');
    if (!hero) return null;
    return hero.outerHTML;
  });
  
  const heroHeight = await page.evaluate(() => {
    const hero = document.querySelector('.hero');
    if (!hero) return null;
    return hero.getBoundingClientRect().height;
  });

  const appHeight = await page.evaluate(() => {
    const app = document.querySelector('.web-only');
    if (!app) return null;
    return app.getBoundingClientRect().height;
  });
  
  console.log('HERO HEIGHT:', heroHeight);
  console.log('WEB ONLY HEIGHT:', appHeight);
  console.log('HERO HTML:', heroHtml ? heroHtml.substring(0, 100) + '...' : 'NULL');

  await browser.close();
  server.kill();
  process.exit(0);
})();
