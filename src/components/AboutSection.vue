<script setup>
</script>

<template>
  <section class="about-section glass-card">
    <h3 class="section-title">{{ $t('ui.about') }}</h3>
    <p class="summary-text">{{ $t('cv.basics.summary') }}</p>
  </section>
</template>

<style scoped>
.about-section {
  margin-top: -4rem;
  margin-bottom: 4rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  position: relative;
  z-index: 3;
}

.section-title {
  font-size: 2rem;
  color: var(--accent-hover);
  margin-bottom: 1.5rem;
}

.summary-text {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

@media print {
  .about-section {
    margin-top: 0;
    margin-bottom: 2rem;
    padding: 0;
    border: none;
    background: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    box-shadow: none;
  }
  .section-title {
    color: #000;
    font-size: 14pt;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.2rem;
  }
  .summary-text {
    color: #333;
    font-size: 10pt;
    line-height: 1.5;
  }
}
</style>
