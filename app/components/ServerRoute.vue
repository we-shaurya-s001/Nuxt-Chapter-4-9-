<template>
<div>Hello ., this is the file to print server file
</div>
<div>{{data}}</div>

</template>




<script setup>
const {data} = await useFetch('./api/ninja')
</script>
