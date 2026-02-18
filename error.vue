<template>
  <div class="error-page">
    <h1>Oops! Something went wrong 😅</h1>
    <p>Status Code: {{ error.statusCode }}</p>
    <p>Message: {{ error.message }}</p>
    <NuxtLink to="/">← Back to Home</NuxtLink>
  </div>
</template>

<script setup>
defineProps(['error'])
</script>

<style scoped>
.error-page {
  text-align: center;
  margin-top: 50px;
  font-family: sans-serif;
}
h1 {
  color: #ff5141;
}
</style>
