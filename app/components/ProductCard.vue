<template>
  <NuxtLink :to="`pages/products/${product.id}`" class="product-card">
    <img :src="product.image" alt="Product Thumb" />
    <p>{{ product.title }}</p>
    <p>{{product.category}}</p>
    <p>${{ product.price }}</p>

  </NuxtLink>
</template>

<script setup>
defineProps({
  product: Object
})
</script>

<style scoped>
.product-card {
  display: block;
  text-decoration: none;
  color: inherit;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
}
.product-card img {
  width: 150px;
  object-fit: cover;
}
</style>
