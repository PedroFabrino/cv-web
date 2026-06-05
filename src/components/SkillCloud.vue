<script setup>
defineProps({
  skills: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="skills-section">
    <h3 class="section-title">Technical Skills</h3>
    <div class="skills-container">
      <div v-for="category in skills" :key="category.name" class="skill-category glass-card">
        <h4 class="category-name">{{ category.name }}</h4>
        <div class="tags">
          <span v-for="skill in category.keywords" :key="skill" class="skill-tag">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2rem;
  color: var(--accent-hover);
  margin-bottom: 2rem;
  text-align: center;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-category {
  padding: 1.5rem;
}

.category-name {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.skill-tag {
  background: rgba(59, 130, 246, 0.1);
  color: var(--accent-hover);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: var(--accent-color);
  color: #fff;
  transform: scale(1.05);
}
</style>
