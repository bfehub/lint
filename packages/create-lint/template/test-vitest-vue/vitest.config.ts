import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

// https://cn.vitest.dev/config/
// Can write vite.config.ts if it already exists
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'happy-dom',
  },
})
