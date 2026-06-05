<script setup>
defineProps({
  experience: {
    type: Array,
    required: true,
  },
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  if (dateString.toLowerCase() === 'present') return 'Present'
  const [year, month] = dateString.split('-')
  const date = new Date(year, month ? month - 1 : 0)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}
</script>

<template>
  <section class="experience-section">
    <h3 class="section-title">Experience</h3>
    <div class="timeline">
      <div v-for="(job, index) in experience" :key="index" class="timeline-item">
        <div class="timeline-marker"></div>
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
</style>
