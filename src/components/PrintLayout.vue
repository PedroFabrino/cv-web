<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})

const { t } = useI18n()

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  if (dateStr.toLowerCase() === 'present' || dateStr.toLowerCase() === 'presente') {
    return t('ui.present')
  }
  const parts = dateStr.split('-')
  if (parts.length === 2) {
    const year = parts[0]
    const monthIndex = parseInt(parts[1], 10) - 1
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    if (monthIndex >= 0 && monthIndex < 12) {
      return `${months[monthIndex]} ${year}`
    }
  }
  return dateStr
}
</script>

<template>
  <div class="print-layout" :class="{ 'is-visible': visible }">
    <!-- ATS & LinkedIn compliant Single-Column Header -->
    <header class="cv-header">
      <h1 class="candidate-name">{{ $t('cv.basics.name') }}</h1>
      <div class="candidate-title">{{ $t('cv.basics.label') }}</div>
      <div class="contact-line">
        <span>{{ $t('cv.basics.location.city') }}, {{ $t('cv.basics.location.region') }}</span>
        <span class="sep">•</span>
        <span>{{ $t('cv.basics.email') }}</span>
        <span class="sep">•</span>
        <span>{{ $t('cv.basics.phone') }}</span>
        <span class="sep">•</span>
        <a :href="$t('cv.basics.url')">{{ $t('cv.basics.url') }}</a>
      </div>
    </header>

    <!-- Professional Summary -->
    <section class="cv-section">
      <h2 class="section-title">Professional Summary</h2>
      <p class="summary-text">{{ $t('cv.basics.summary') }}</p>
    </section>

    <!-- Work Experience -->
    <section class="cv-section">
      <h2 class="section-title">Work Experience</h2>
      <div v-for="(job, index) in $tm('cv.work')" :key="index" class="job-item">
        <div class="job-header">
          <div class="job-role">
            <strong class="job-position">{{ job.position }}</strong> — <span class="job-company">{{ job.company }}</span>
          </div>
          <div class="job-dates">
            {{ formatDate(job.startDate) }} – {{ formatDate(job.endDate) }}
          </div>
        </div>
        <p v-if="job.summary" class="job-summary">{{ job.summary }}</p>
        <ul v-if="job.highlights && job.highlights.length" class="job-highlights">
          <li v-for="(highlight, hIndex) in job.highlights" :key="hIndex">
            {{ highlight }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Technical Skills -->
    <section class="cv-section">
      <h2 class="section-title">Technical Skills</h2>
      <div class="skills-list">
        <div v-for="(category, index) in $tm('cv.skills')" :key="index" class="skill-group">
          <strong>{{ category.name }}:</strong> {{ category.keywords.join(', ') }}
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="cv-section" v-if="$tm('cv.certifications') && $tm('cv.certifications').length">
      <h2 class="section-title">{{ $t('ui.certifications') }}</h2>
      <div v-for="(cert, index) in $tm('cv.certifications')" :key="index" class="cert-item">
        <strong>{{ cert.name }}</strong> — <span>{{ cert.issuer }} ({{ cert.date }})</span>
      </div>
    </section>
  </div>
</template>

<style scoped>
.print-layout {
  display: none;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2.5rem 3rem;
  background: #ffffff;
  color: #111827;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
  box-sizing: border-box;
}

.print-layout.is-visible {
  display: block !important;
}

@media print {
  .print-layout {
    display: block !important;
    padding: 0;
    width: 100%;
    max-width: 100%;
  }
}

.cv-header {
  border-bottom: 2px solid #111827;
  padding-bottom: 0.75rem;
  margin-bottom: 1.25rem;
}

.candidate-name {
  font-size: 24pt;
  font-weight: bold;
  color: #111827;
  margin: 0 0 0.25rem 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.candidate-title {
  font-size: 12pt;
  font-weight: bold;
  color: #2563eb;
  margin-bottom: 0.5rem;
}

.contact-line {
  font-size: 9.5pt;
  color: #374151;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  align-items: center;
}

.contact-line a {
  color: #2563eb;
  text-decoration: none;
}

.sep {
  color: #9ca3af;
}

.cv-section {
  margin-bottom: 1.25rem;
  page-break-inside: auto;
}

.section-title {
  font-size: 13pt;
  font-weight: bold;
  color: #111827;
  text-transform: uppercase;
  border-bottom: 1px solid #d1d5db;
  padding-bottom: 0.25rem;
  margin: 0 0 0.75rem 0;
  letter-spacing: 0.5px;
}

.summary-text {
  font-size: 10pt;
  color: #1f2937;
  margin: 0;
  text-align: justify;
}

.job-item {
  margin-bottom: 1rem;
  page-break-inside: avoid;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.25rem;
}

.job-position {
  font-size: 11pt;
  color: #111827;
}

.job-company {
  font-size: 10.5pt;
  color: #374151;
}

.job-dates {
  font-size: 9.5pt;
  font-weight: bold;
  color: #4b5563;
  white-space: nowrap;
}

.job-summary {
  font-size: 9.5pt;
  color: #374151;
  margin: 0.25rem 0 0.4rem 0;
}

.job-highlights {
  margin: 0;
  padding-left: 1.2rem;
}

.job-highlights li {
  font-size: 9.5pt;
  color: #1f2937;
  margin-bottom: 0.2rem;
}

.skills-list {
  font-size: 9.5pt;
  color: #1f2937;
}

.skill-group {
  margin-bottom: 0.35rem;
}

.cert-item {
  font-size: 9.5pt;
  color: #1f2937;
  margin-bottom: 0.35rem;
}
</style>
