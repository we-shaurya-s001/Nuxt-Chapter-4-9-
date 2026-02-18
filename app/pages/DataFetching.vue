<template>
  <div>
    <h2>useFetch Example</h2>

    <div v-if="pending">Loading...</div>
    <div v-if="error">Something went wrong</div>

    <div v-for="(prod, index) in data" :key="prod.id">
      {{ index }} - {{ prod.title }} -- ${{ prod.price }} --{{prod.images}}
    </div>
  </div>
</template>

<script setup>
const { data, pending, error } = await useFetch(
  'https://api.escuelajs.co/api/v1/products'
)
</script>
