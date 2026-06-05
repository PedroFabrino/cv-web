<script setup>
import { ref } from 'vue'
import cvData from './data/cv.json'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import SkillCloud from './components/SkillCloud.vue'

const cv = ref(cvData)
</script>

<template>
  <div class="cv-container">
    <HeroSection :data="cv.basics" />
    <div class="content-wrapper">
      <AboutSection :summary="cv.basics.summary" />
      <SkillCloud :skills="cv.skills" />
      <ExperienceTimeline :experience="cv.work" />
    </div>
    <footer class="cv-footer">
      <p>&copy; {{ new Date().getFullYear() }} {{ cv.basics.name }}. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.cv-container {
  max-width: 100%;
  margin: 0 auto;
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
