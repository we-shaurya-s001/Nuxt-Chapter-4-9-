<template>
  <div>
    <p data-test="count">Count: {{ count }}</p>
    <button data-test="btn" @click="increment">
      Increment
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>
