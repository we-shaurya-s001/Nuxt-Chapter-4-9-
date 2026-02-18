<template>
  <div>
    <h2>useFetch Example</h2>

    <div v-if="pending">Loading...</div>
    <div v-if="error">Something went wrong</div>
<div v-for="p in data" :key="p.id">
  <ProductCard :product="p" />
</div>

  </div>
</template>

<script setup>
const { data, pending, error } = await useFetch(
  'https://fakestoreapi.com/products'
)
</script>
