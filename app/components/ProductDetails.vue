<template>
  <div v-if="product">
    <h1>{{ product.title }}</h1>
    <img :src="product.image" alt="Product Image" style="max-width:400px;object-fit:contain;" />
    <p><strong>Price:</strong> ${{ product.price }}</p>
    <p><strong>Description:</strong> {{ product.description }}</p>
    <NuxtLink to="/">← Back to products</NuxtLink>
  </div>

  <div v-else-if="pending">
    Loading product details...
  </div>

  <div v-else-if="error">
    Failed to load product.
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id

// Fetch product details from Fake Store API
const { data: product, pending, error } = await useFetch(`https://fakestoreapi.com/products/${id}`)
</script>
