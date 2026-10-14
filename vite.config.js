import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

const entry = (name) => fileURLToPath(new URL(`./${name}.html`, import.meta.url))

export default defineConfig({
  plugins: [react()],
  // Relative paths support both root hosting and a GitHub Pages subdirectory.
  base: './',
  build: {
    rolldownOptions: {
      input: Object.fromEntries(
        ['index', 'react', 'about', 'projects', 'resume', 'contact'].map((name) => [
          name,
          entry(name),
        ]),
      ),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.js'],
    css: false,
    restoreMocks: true,
  },
})
