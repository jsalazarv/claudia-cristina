<template>
  <div class="blog-card">
    <a :href="image" data-fancybox class="blog-image">
      <img :src="image" :alt="alt">
      <div class="date-badge">
        <span class="month">{{ month }}</span>
        <h5>{{ day }}</h5>
      </div>
      <div class="plus-icon">
        <i class="fas fa-plus-circle"></i>
      </div>
    </a>
    <div class="text">
      <h3 class="blog-title">
        <a :href="link">{{ title }}</a>
      </h3>
      <span class="post-meta">
        <i class="fas fa-user"></i>
        {{ author }}
      </span>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: String,
  alt: String,
  month: String,
  day: String,
  title: String,
  link: String,
  author: String,
  content: String,
});
</script>

<style scoped>

</style>
