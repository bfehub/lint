import React from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://cn.vitest.dev/config/
// Can write vite.config.ts if it already exists
export default defineConfig({
  plugins: [React()],
  test: {
    environment: 'happy-dom',
  },
})
