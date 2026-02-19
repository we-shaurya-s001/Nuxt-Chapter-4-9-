<template>
  <div> 
    <div v-if="data">{{ data}}</div>
    <div v-else>Loading...</div>
  </div>
</template> 

<script setup>
const {data} = await useFetch('./api/hello?name=Shaurya')
</script>