<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import PrintLayout from '../components/PrintLayout.vue'
import { generateDirectPDF } from '../utils/pdfGenerator.js'

const { tm, t } = useI18n()

onMounted(() => {
  // Wait for i18n + fonts to be fully rendered before opening print dialog
  setTimeout(() => {
    window.print()
  }, 800)
})

const handleDownload = () => {
  const cvData = tm('cv')
  generateDirectPDF(cvData, t)
}

const triggerPrint = () => window.print()
</script>

<template>
  <div class="print-view-page">
    <div class="print-toolbar">
      <span>CV ready — download text PDF directly or print via browser.</span>
      <div class="btn-group">
        <button @click="handleDownload" class="print-btn primary-btn">📥 Download Text PDF (1-Click)</button>
        <button @click="triggerPrint" class="print-btn secondary-btn">🖨 Browser Print</button>
      </div>
    </div>
    <PrintLayout :visible="true" />
  </div>
</template>

<style>
/*
 * Full theme reset for the /print page.
 * main.css sets dark globals; we override everything here
 * so the PDF comes out on a white background with black text.
 */
.print-view-page {
  --bg-color: #fff;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --card-bg: #fff;
  --card-border: #e2e8f0;
  background: #fff !important;
  color: #0f172a;
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
}

/* Also reset the body so no dark background leaks behind */
body:has(.print-view-page) {
  background: #fff !important;
}

.print-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 2rem;
  background: #f1f5f9;
  border-bottom: 1px solid #e2e8f0;
  font-size: 0.9rem;
  color: #475569;
  gap: 1rem;
}

.btn-group {
  display: flex;
  gap: 0.5rem;
}

.print-btn {
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 600;
  transition: background 0.2s ease;
}

.primary-btn {
  background: #2563eb;
  color: #fff;
}

.primary-btn:hover {
  background: #1d4ed8;
}

.secondary-btn {
  background: #e2e8f0;
  color: #1e293b;
}

.secondary-btn:hover {
  background: #cbd5e1;
}

@media print {
  .print-toolbar {
    display: none;
  }
}
</style>

