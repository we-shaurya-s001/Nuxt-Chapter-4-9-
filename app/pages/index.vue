<template>
  <div class="container">
    <h2>Products</h2>

    <div v-if="pending" class="loading">Loading...</div>
    <div v-if="error" class="error">Something went wrong</div>

    <div class="grid">
      <div v-for="p in data" :key="p.id" class="grid-item">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data, pending, error } = await useFetch(
  'https://fakestoreapi.com/products'
)
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.loading,
.error {
  text-align: center;
  font-size: 18px;
  color: #555;
  margin: 20px 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns */
  gap: 20px;
}

.grid-item {
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background: #fff;
}

.grid-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
</style>
