<script setup lang="ts">
import { ref } from 'vue';

const pageTitle = ref('My Awesome Page');
const descriptionContent = ref('This is the description for my awesome page.');

useHead({
  title: pageTitle.value,
  meta: [
    {
      name: 'description',
      content: descriptionContent.value,
    },
    {
      property: "title',
      content: pageTitle.value,
    },
  ],
  script: [
    { src: 'https://example.com/script.js', async: true, defer: true }
  ]
});

</script>

<template>
  <h1>Welcome to the {{ pageTitle }}</h1>
</template>
