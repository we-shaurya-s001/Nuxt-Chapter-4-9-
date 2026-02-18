// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  app:{
    head: {
      title: "Nuxt Dojo",
      meta:[{name:'description', content:'Everything about nuxt3'}],
      link: [ {rel:'stylesheet', href:' '}]
    }
  },
  devtools: { enabled: true }
})
