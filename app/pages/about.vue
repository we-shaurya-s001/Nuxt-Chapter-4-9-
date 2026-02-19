<template>
  <div> 
    <div v-if="data">{{ data}}</div>
    <div v-else>Loading...</div>
    <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment">Increment</button>
    <button @click="counter.decrement">Decrement</button>
  </div>
</template> 

<script setup>
const {data} = await useFetch('./api/hello?name=Shaurya')

const myCookie = useCookie('user', { default: 'Shaurya Saxena' })
myCookie.value = 'Jane Smith' 

console.log(myCookie.value)

myCookie.delete()

import { useCounterStore } from '~/stores/counter'

const counter = useCounterStore()

</script>