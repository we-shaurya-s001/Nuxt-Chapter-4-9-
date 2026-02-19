// vitest.config.ts (this should be purely for testing)
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom', // or 'node' if needed
  },
})
