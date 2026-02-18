<template>
  <div>
    <div v-if="data">{{ data.message}}</div>
    <div v-else>Loading...</div>
  </div>
</template>

<script setup>
const data = await useFetch('./api/hello')
</script>