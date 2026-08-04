<script setup>
import { useI18n } from 'vue-i18n'
import { RouterView, useRoute } from 'vue-router'
import { generateDirectPDF } from './utils/pdfGenerator.js'

const { locale, tm, t } = useI18n()
const route = useRoute()

const handleDirectDownload = () => {
  const cvData = tm('cv')
  generateDirectPDF(cvData, t)
}

const openPrintView = () => {
  const baseUrl = import.meta.env.BASE_URL.endsWith('/') 
    ? import.meta.env.BASE_URL 
    : `${import.meta.env.BASE_URL}/`
  window.open(`${window.location.origin}${baseUrl}print`, '_blank')
}
</script>

<template>
  <div class="cv-container">
    <div v-if="route.name !== 'print'" class="toolbar no-print">
      <div class="lang-switch">
        <button :class="{ active: locale === 'en' }" @click="locale = 'en'">EN</button>
        <button :class="{ active: locale === 'pt' }" @click="locale = 'pt'">PT</button>
      </div>
      <button @click="handleDirectDownload" class="tool-btn primary">📥 Download PDF</button>
      <button @click="openPrintView" class="tool-btn secondary">🖨 Print View</button>
    </div>

    <RouterView />

    <footer v-if="route.name !== 'print'" class="cv-footer no-print">
      <p>&copy; {{ new Date().getFullYear() }} {{ $t('cv.basics.name') }}. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
@media print {
  .web-only {
    display: none !important;
  }
}
.cv-container {
  max-width: 100%;
  margin: 0 auto;
}

.toolbar {
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
  z-index: 100;
  align-items: center;
}

.lang-switch {
  display: flex;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(5px);
}

.lang-switch button {
  background: transparent;
  color: var(--text-secondary);
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-family: var(--font-primary);
  font-weight: 600;
  transition: all 0.3s ease;
}

.lang-switch button:hover:not(.active) {
  background: rgba(255, 255, 255, 0.1);
}

.lang-switch button.active {
  background: var(--accent-color);
  color: #fff;
}

.tool-btn {
  background: var(--card-bg);
  color: var(--text-primary);
  border: 1px solid var(--card-border);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  font-family: var(--font-primary);
  font-weight: 600;
}

.tool-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.tool-btn.primary {
  background: var(--accent-color);
  color: #fff;
  border-color: var(--accent-color);
}

.tool-btn.primary:hover {
  background: var(--accent-hover);
}

.cv-footer {
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
  border-top: 1px solid var(--card-border);
  margin-top: 4rem;
}
</style>

