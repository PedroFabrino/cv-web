<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const formatDate = (dateString) => {
  if (!dateString) return ''
  if (dateString.toLowerCase() === 'present' || dateString.toLowerCase() === 'presente') return t('ui.present')
  const [year, month] = dateString.split('-')
  const date = new Date(year, month ? month - 1 : 0)
  return date.toLocaleDateString(undefined, { month: 'short', year: 'numeric' })
}
</script>

<template>
  <section class="experience-section">
    <h3 class="section-title">{{ $t('ui.experience') }}</h3>
    <div class="timeline">
      <div v-for="(job, index) in $tm('cv.work')" :key="index" class="timeline-item">
        <div class="timeline-marker no-print"></div>
        <div class="timeline-content glass-card">
          <div class="job-header">
            <div>
              <h4 class="job-title">{{ job.position }}</h4>
              <h5 class="company-name">{{ job.company }}</h5>
            </div>
            <div class="job-date">
              {{ formatDate(job.startDate) }} - {{ formatDate(job.endDate) }}
            </div>
          </div>
          <p v-if="job.summary" class="job-summary">{{ job.summary }}</p>
          <ul v-if="job.highlights && job.highlights.length" class="job-highlights">
            <li v-for="(highlight, hIndex) in job.highlights" :key="hIndex">
              {{ highlight }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2rem;
  color: var(--accent-hover);
  margin-bottom: 2rem;
  text-align: center;
}

.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 20px;
  width: 2px;
  background: var(--card-border);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 60px;
}

.timeline-marker {
  position: absolute;
  left: 11px;
  top: 30px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--accent-color);
  border: 4px solid var(--bg-color);
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
  z-index: 1;
}

.timeline-content {
  padding: 2rem;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.job-title {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 0.2rem;
}

.company-name {
  font-size: 1.1rem;
  color: var(--accent-hover);
  font-weight: 400;
}

.job-date {
  background: rgba(255, 255, 255, 0.05);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.job-summary {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.job-highlights {
  list-style-type: none;
  padding: 0;
}

.job-highlights li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
}

.job-highlights li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--accent-color);
}

@media (max-width: 768px) {
  .timeline::before {
    left: 15px;
  }
  .timeline-marker {
    left: 6px;
  }
  .timeline-item {
    padding-left: 45px;
  }
  .job-header {
    flex-direction: column;
  }
}

@media print {
  .experience-section {
    margin-bottom: 2rem;
  }
  .section-title {
    color: #000;
    font-size: 14pt;
    margin-bottom: 1rem;
    text-align: left;
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.2rem;
  }
  .timeline::before {
    display: none;
  }
  .timeline-item {
    padding-left: 0;
    margin-bottom: 1.5rem;
    break-inside: avoid;
  }
  .timeline-content {
    padding: 0;
    border: none;
    background: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    box-shadow: none;
  }
  .job-header {
    margin-bottom: 0.5rem;
    align-items: center;
  }
  .job-title {
    color: #222;
    font-size: 12pt;
    font-weight: bold;
  }
  .company-name {
    color: #444;
    font-size: 11pt;
  }
  .job-date {
    background: none;
    padding: 0;
    color: #666;
    font-size: 10pt;
  }
  .job-summary {
    color: #333;
    font-size: 10pt;
    line-height: 1.5;
  }
  .job-highlights li {
    color: #333;
    font-size: 10pt;
    padding-left: 1rem;
  }
  .job-highlights li::before {
    content: '•';
    color: #000;
  }
}
</style>
