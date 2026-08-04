<script setup>
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ExperienceTimeline from '../components/ExperienceTimeline.vue'
import SkillCloud from '../components/SkillCloud.vue'
import CertificationsSection from '../components/CertificationsSection.vue'
</script>

<template>
  <div class="web-only">
    <HeroSection />
    <div class="content-wrapper">
      <AboutSection />
      <SkillCloud />
      <CertificationsSection />
      <ExperienceTimeline />
    </div>
  </div>
</template>

<style scoped>
.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>

