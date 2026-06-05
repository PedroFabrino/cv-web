<script setup>
// Empty setup
</script>

<template>
  <section class="certifications-section">
    <h2 class="section-title">{{ $t('ui.certifications') }}</h2>
    <div class="cert-grid">
      <div v-for="(cert, index) in $tm('cv.certifications')" :key="index" class="cert-card">
        <div class="cert-info">
          <h3>{{ cert.name }}</h3>
          <p class="cert-issuer">{{ cert.issuer }} &bull; {{ cert.date }}</p>
        </div>
        <a v-if="cert.url" :href="cert.url" target="_blank" rel="noopener noreferrer" class="cert-btn">
          {{ $t('ui.seeCertificate') }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.certifications-section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2rem;
  color: var(--accent-hover);
  margin-bottom: 2rem;
  text-align: center;
}

.cert-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.cert-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  padding: 1.5rem 2rem;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.cert-card:hover {
  transform: translateY(-2px);
  border-color: var(--accent-hover);
}

.cert-info h3 {
  font-size: 1.2rem;
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
}

.cert-issuer {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0;
}

.cert-btn {
  display: inline-block;
  background: transparent;
  color: var(--accent-color);
  border: 1px solid var(--accent-color);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cert-btn:hover {
  background: var(--accent-color);
  color: #fff;
}

@media (max-width: 600px) {
  .cert-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .cert-btn {
    align-self: flex-start;
  }
}
</style>
