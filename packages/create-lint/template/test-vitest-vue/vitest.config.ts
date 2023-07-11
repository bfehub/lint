import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vitest/config'

// https://cn.vitest.dev/config/
export default defineConfig({
  plugins: [Vue(), VueJsx()],
  optimizeDeps: {
    disabled: true,
  },
  test: {
    clearMocks: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
})
