import puppeteer from 'puppeteer';
import { createRequire } from 'module';
import fs from 'fs';

const require = createRequire(import.meta.url);
const { PDFParse } = require('pdf-parse');

async function testPdfGenerationAndParsing() {
  console.log('--- Step 1: Launching Headless Chrome ---');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  console.log('--- Step 2: Navigating to http://127.0.0.1:5100/cv-web/print ---');
  await page.goto('http://127.0.0.1:5100/cv-web/print', { waitUntil: 'networkidle0' });

  console.log('--- Step 3: Generating PDF (A4) ---');
  const pdfPath = './test-cv.pdf';
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' }
  });
  console.log(`PDF saved to ${pdfPath}`);
  await browser.close();

  console.log('--- Step 4: Extracting PDF Text ---');
  const dataBuffer = fs.readFileSync(pdfPath);
  const uint8Array = new Uint8Array(dataBuffer);
  const parser = new PDFParse(uint8Array);
  const textResult = await parser.getText();

  console.log('\n=================== RAW EXTRACTED PDF TEXT ===================');
  console.log(textResult.text || textResult);
  console.log('==============================================================\n');
}

testPdfGenerationAndParsing().catch(err => {
  console.error('Error running PDF test:', err);
  process.exit(1);
});
