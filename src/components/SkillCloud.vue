<script setup>
</script>

<template>
  <section class="skills-section">
    <h3 class="section-title">{{ $t('ui.technicalSkills') }}</h3>
    <div class="skills-container">
      <div v-for="(category, index) in $tm('cv.skills')" :key="index" class="skill-category glass-card">
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.skill-category {
  padding: 1.5rem;
  width: calc((100% - 4rem) / 3);
}

@media (max-width: 850px) {
  .skill-category {
    width: calc((100% - 2rem) / 2);
  }
}

@media (max-width: 600px) {
  .skill-category {
    width: 100%;
  }
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

@media print {
  .skills-section {
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
  .skills-container {
    display: block;
  }
  .skill-category {
    padding: 0;
    margin-bottom: 1rem;
    border: none;
    background: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    box-shadow: none;
  }
  .category-name {
    color: #222;
    font-size: 11pt;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  .tags {
    gap: 0.5rem;
  }
  .skill-tag {
    background: none;
    color: #333;
    padding: 0;
    border: none;
    font-size: 10pt;
  }
  .skill-tag::after {
    content: ', ';
  }
  .skill-tag:last-child::after {
    content: '';
  }
}
</style>
