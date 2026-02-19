<template>
<div>
Values of the count is {{count}}
</div>
</template>

<script setup>
import {ref} from "vue"

export const useCounter = () => {
  const count = ref(0)
  const increment = () => count.value++
  return { count, increment }
}

</setup>