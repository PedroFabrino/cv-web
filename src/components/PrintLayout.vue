<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <div class="print-layout">
    <div class="print-sidebar">
      <!-- Contact Info -->
      <div class="print-section">
        <h3>Contact</h3>
        <p>{{ t('cv.basics.phone') }}</p>
        <p>{{ t('cv.basics.email') }}</p>
        <p>{{ t('cv.basics.url') }}</p>
      </div>
      
      <!-- Skills -->
      <div class="print-section">
        <h3>Top Skills</h3>
        <div v-for="(category, index) in tm('cv.skills')" :key="index" class="print-skill-cat">
          <h4>{{ category.name }}</h4>
          <p>{{ category.keywords.join(', ') }}</p>
        </div>
      </div>
    </div>

    <div class="print-main">
      <!-- Header Info -->
      <header class="print-header">
        <h1>{{ t('cv.basics.name') }}</h1>
        <h2>{{ t('cv.basics.label') }}</h2>
        <p>{{ t('cv.basics.location.city') }}, {{ t('cv.basics.location.region') }}</p>
      </header>

      <!-- Summary -->
      <div class="print-section">
        <h3>Summary</h3>
        <p>{{ t('cv.basics.summary') }}</p>
      </div>

      <!-- Experience -->
      <div class="print-section">
        <h3>Experience</h3>
        <div v-for="(job, index) in tm('cv.work')" :key="index" class="print-job">
          <div class="job-header">
            <h4>{{ job.position }}</h4>
            <span>{{ job.company }} | {{ job.startDate }} - {{ job.endDate }}</span>
          </div>
          <p class="job-summary">{{ job.summary }}</p>
          <ul>
            <li v-for="(highlight, hIndex) in job.highlights" :key="hIndex">{{ highlight }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Hidden by default on web */
.print-layout {
  display: none;
}

@media print {
  .print-layout {
    display: grid;
    grid-template-columns: 250px 1fr;
    width: 100%;
    min-height: 100vh;
    background: #fff;
    color: #333;
    font-family: var(--font-primary), sans-serif;
  }

  .print-sidebar {
    background: #1e293b;
    color: #f8fafc;
    padding: 2rem;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .print-sidebar h3 {
    color: #fff;
    border-bottom: 2px solid rgba(255,255,255,0.2);
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    margin-top: 0;
  }

  .print-sidebar p {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
    word-break: break-all;
  }

  .print-skill-cat {
    margin-bottom: 1rem;
  }
  .print-skill-cat h4 {
    font-size: 0.9rem;
    margin: 0 0 0.2rem 0;
    color: #93c5fd;
  }

  .print-main {
    padding: 2rem 3rem;
  }

  .print-header h1 {
    font-size: 2.5rem;
    margin: 0;
    color: #0f172a;
  }

  .print-header h2 {
    font-size: 1.2rem;
    color: #3b82f6;
    margin: 0.5rem 0;
  }

  .print-header p {
    color: #64748b;
    font-size: 0.9rem;
  }

  .print-section {
    margin-top: 2rem;
  }

  .print-main h3 {
    color: #0f172a;
    font-size: 1.4rem;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }

  .print-main p {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .print-job {
    margin-bottom: 1.5rem;
  }

  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.5rem;
  }

  .job-header h4 {
    margin: 0;
    font-size: 1.1rem;
    color: #1e293b;
  }

  .job-header span {
    font-size: 0.85rem;
    color: #64748b;
    font-weight: 600;
  }

  .job-summary {
    margin-bottom: 0.5rem;
  }

  ul {
    margin: 0;
    padding-left: 1.2rem;
  }

  li {
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
    line-height: 1.4;
  }
}
</style>
