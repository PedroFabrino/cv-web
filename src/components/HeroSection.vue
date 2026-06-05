<script setup>
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="name animate-slide-up">{{ $t('cv.basics.name') }}</h1>
      <h2 class="title animate-slide-up delay-1">{{ $t('cv.basics.label') }}</h2>
      <div class="contact-info animate-slide-up delay-2 no-print">
        <a :href="`mailto:${$t('cv.basics.email')}`" class="contact-link">Email</a>
        <a :href="$t('cv.basics.url')" target="_blank" class="contact-link">LinkedIn</a>
        <span class="location">{{ $t('cv.basics.location.city') }}, {{ $t('cv.basics.location.region') }}</span>
      </div>
      <!-- Print specific contact info -->
      <div class="print-only contact-info-print">
        <span>{{ $t('cv.basics.email') }}</span> | 
        <span>{{ $t('cv.basics.phone') }}</span> | 
        <span>{{ $t('cv.basics.location.city') }}</span>
      </div>
    </div>
    <div class="hero-background no-print"></div>
  </section>
</template>

<style scoped>
.hero {
  height: 60vh;
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.hero-content {
  position: relative;
  z-index: 2;
  padding: 2rem;
}

.name {
  font-size: 5rem;
  letter-spacing: -0.05em;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #f8fafc, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title {
  font-size: 2rem;
  color: var(--accent-color);
  font-weight: 400;
  margin-bottom: 2rem;
}

.contact-info {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
}

.contact-link, .location {
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  backdrop-filter: blur(5px);
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.contact-link:hover {
  background: var(--accent-color);
  color: #fff;
  transform: translateY(-2px);
}

.print-only {
  display: none;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 60%);
  z-index: 1;
}

/* Animations */
.animate-slide-up {
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 0.8s ease forwards;
}

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .name { font-size: 3.5rem; }
  .title { font-size: 1.5rem; }
  .contact-info { flex-direction: column; gap: 1rem; }
}

@media print {
  .hero {
    height: auto;
    min-height: 0;
    margin-bottom: 2rem;
    display: block;
    text-align: left;
  }
  .hero-content {
    padding: 0;
  }
  .name {
    font-size: 24pt;
    -webkit-text-fill-color: #000;
    margin-bottom: 0.2rem;
  }
  .title {
    font-size: 14pt;
    color: #333;
    margin-bottom: 1rem;
  }
  .print-only {
    display: block;
    color: #555;
    font-size: 10pt;
  }
}
</style>
