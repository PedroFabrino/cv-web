<script setup>
import { useI18n } from 'vue-i18n'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import SkillCloud from './components/SkillCloud.vue'

const { t, locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'pt' : 'en'
}

const exportPDF = () => {
  window.print()
}
</script>

<template>
  <div class="cv-container">
    <div class="toolbar no-print">
      <button @click="toggleLanguage" class="tool-btn">{{ $t('ui.switchLang') }}</button>
      <button @click="exportPDF" class="tool-btn primary">{{ $t('ui.exportPdf') }}</button>
    </div>

    <HeroSection />
    <div class="content-wrapper">
      <AboutSection />
      <SkillCloud />
      <ExperienceTimeline />
    </div>
    <footer class="cv-footer no-print">
      <p>&copy; {{ new Date().getFullYear() }} {{ $t('cv.basics.name') }}. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
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

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.cv-footer {
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
  border-top: 1px solid var(--card-border);
  margin-top: 4rem;
}
</style>
