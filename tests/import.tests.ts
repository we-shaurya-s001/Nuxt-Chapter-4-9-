// A unit test checks a small piece of your code (a “unit”) to make sure it works correctly.

// Prevents bugs
// Makes refactoring safe
// Improves code quality
// Makes you confident when deploying

// Vitest → Test runner
// Vue Test Utils → Helps test Vue components

import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'happy-dom',
    globals: true,
  },
})
