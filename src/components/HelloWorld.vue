<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greeting-container">
    <h1 class="greeting-title">{{ msg }}</h1>
    <p class="greeting-description">
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </p>
  </div>
</template>

<style scoped>
.greeting-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.greeting-title {
  font-weight: 600;
  font-size: 2.8rem;
  color: #42b983;
  margin-bottom: 1.5rem;
}

.greeting-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
}

.greeting-description a {
  color: #42b983;
  text-decoration: none;
  font-weight: 500;
}

.greeting-description a:hover {
  text-decoration: underline;
}

@media (min-width: 1024px) {
  .greeting-container {
    padding: 4rem;
  }
}
</style>
