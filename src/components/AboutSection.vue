<script setup>
defineProps({
  summary: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="about-section glass-card">
    <h3 class="section-title">About Me</h3>
    <p class="summary-text">{{ summary }}</p>
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
</style>
