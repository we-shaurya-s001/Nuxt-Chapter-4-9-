<template>
  <div class="card">
    <img :src="product.image" alt="Product Image" />
    <p class="title">{{ product.title }}</p>
    <p class="price">${{ product.price }}</p>
  </div>
</template>

<script setup>
defineProps({
  product: Object
})
</script>

<style scoped>
.card {
  text-align: center;
  font-family: sans-serif;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: 10px;
}

.title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
  height: 40px;
  overflow: hidden;
}

.price {
  color: #e74c3c;
  font-weight: bold;
  font-size: 16px;
}
</style>
