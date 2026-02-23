import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/__tests__/**/*.test.ts'],
    coverage: {
      reporter: ['text', 'json'],
      include: ['src/**/*.ts'],
      exclude: ['src/__tests__/**', 'src/cli.ts'],
    },
  },
})
