import { jsPDF } from 'jspdf';
import { createRequire } from 'module';
import fs from 'fs';

const require = createRequire(import.meta.url);
const { PDFParse } = require('pdf-parse');

// Load sample locale data
const enData = JSON.parse(fs.readFileSync('./src/locales/en.json', 'utf8')).cv;

function generatePDF(i18nData) {
  const doc = new jsPDF({
    unit: 'pt',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 40;
  const contentWidth = pageWidth - margin * 2;

  let y = 45;

  function checkPageBreak(neededHeight) {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  }

  // Candidate Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(17, 24, 39);
  doc.text(i18nData.basics.name.toUpperCase(), margin, y);
  y += 24;

  // Label / Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(37, 99, 235);
  doc.text(i18nData.basics.label, margin, y);
  y += 18;

  // Contact Info
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(75, 85, 99);
  const contactText = `${i18nData.basics.location.city}, ${i18nData.basics.location.region}  •  ${i18nData.basics.email.replace("{'@'}", "@")}  •  ${i18nData.basics.phone}  •  ${i18nData.basics.url}`;
  const contactLines = doc.splitTextToSize(contactText, contentWidth);
  doc.text(contactLines, margin, y);
  y += contactLines.length * 12 + 8;

  // Header Divider line
  doc.setDrawColor(17, 24, 39);
  doc.setLineWidth(1.5);
  doc.line(margin, y, pageWidth - margin, y);
  y += 18;

  function addSectionHeading(title) {
    checkPageBreak(35);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(17, 24, 39);
    doc.text(title.toUpperCase(), margin, y);
    y += 4;
    doc.setDrawColor(209, 213, 219);
    doc.setLineWidth(0.75);
    doc.line(margin, y, pageWidth - margin, y);
    y += 14;
  }

  // 1. Professional Summary
  if (i18nData.basics.summary) {
    addSectionHeading('Professional Summary');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(31, 41, 55);
    const summaryLines = doc.splitTextToSize(i18nData.basics.summary, contentWidth);
    checkPageBreak(summaryLines.length * 13);
    doc.text(summaryLines, margin, y);
    y += summaryLines.length * 13 + 14;
  }

  // Helper for dates
  function formatJobDate(dateStr) {
    if (!dateStr) return '';
    if (dateStr.toLowerCase() === 'present' || dateStr.toLowerCase() === 'presente') return 'Present';
    const parts = dateStr.split('-');
    if (parts.length === 2) {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const idx = parseInt(parts[1], 10) - 1;
      if (idx >= 0 && idx < 12) return `${months[idx]} ${parts[0]}`;
    }
    return dateStr;
  }

  // 2. Work Experience
  if (i18nData.work && i18nData.work.length) {
    addSectionHeading('Work Experience');
    for (const job of i18nData.work) {
      checkPageBreak(40);
      
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10.5);
      doc.setTextColor(17, 24, 39);
      const roleText = `${job.position} — `;
      doc.text(roleText, margin, y);
      const roleWidth = doc.getTextWidth(roleText);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(55, 65, 81);
      doc.text(job.company, margin + roleWidth, y);

      const dateText = `${formatJobDate(job.startDate)} – ${formatJobDate(job.endDate)}`;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(75, 85, 99);
      const dateWidth = doc.getTextWidth(dateText);
      doc.text(dateText, pageWidth - margin - dateWidth, y);

      y += 14;

      if (job.summary) {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(55, 65, 81);
        const jobSumLines = doc.splitTextToSize(job.summary, contentWidth);
        checkPageBreak(jobSumLines.length * 12);
        doc.text(jobSumLines, margin, y);
        y += jobSumLines.length * 12 + 4;
      }

      if (job.highlights && job.highlights.length) {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(31, 41, 55);
        for (const highlight of job.highlights) {
          const bulletIndent = 12;
          const bulletText = `• ${highlight}`;
          const hLines = doc.splitTextToSize(bulletText, contentWidth - bulletIndent);
          checkPageBreak(hLines.length * 12);
          doc.text(hLines, margin + bulletIndent, y);
          y += hLines.length * 12 + 2;
        }
      }
      y += 10;
    }
  }

  // 3. Technical Skills
  if (i18nData.skills && i18nData.skills.length) {
    addSectionHeading('Technical Skills');
    doc.setFontSize(9.5);
    for (const cat of i18nData.skills) {
      checkPageBreak(16);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(17, 24, 39);
      const catName = `${cat.name}: `;
      doc.text(catName, margin, y);
      const catWidth = doc.getTextWidth(catName);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(31, 41, 55);
      const keywordsText = cat.keywords.join(', ');
      const kwLines = doc.splitTextToSize(keywordsText, contentWidth - catWidth);
      doc.text(kwLines, margin + catWidth, y);
      y += kwLines.length * 13 + 3;
    }
    y += 10;
  }

  // 4. Certifications
  if (i18nData.certifications && i18nData.certifications.length) {
    addSectionHeading('Certifications');
    doc.setFontSize(9.5);
    for (const cert of i18nData.certifications) {
      checkPageBreak(16);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(17, 24, 39);
      const certName = `${cert.name} `;
      doc.text(certName, margin, y);
      const certWidth = doc.getTextWidth(certName);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(55, 65, 81);
      doc.text(`— ${cert.issuer} (${cert.date})`, margin + certWidth, y);
      y += 15;
    }
  }

  const pdfArrayBuffer = doc.output('arraybuffer');
  return Buffer.from(pdfArrayBuffer);
}

async function test() {
  console.log('--- Step 1: Generating Native Vector Text PDF via jsPDF ---');
  const pdfBuffer = generatePDF(enData);
  fs.writeFileSync('./jspdf-direct.pdf', pdfBuffer);
  console.log('Saved jspdf-direct.pdf');

  console.log('--- Step 2: Parsing jspdf-direct.pdf via pdf-parse ---');
  const parser = new PDFParse(new Uint8Array(pdfBuffer));
  const result = await parser.getText();

  console.log('\n=================== RAW PARSED TEXT FROM JSPDF ===================');
  console.log(result.text || result);
  console.log('=================================================================\n');
}

test().catch(console.error);
