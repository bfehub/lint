import { setPkg } from '../../utils/index.js'

// https://github.com/vitest-dev/vitest
// https://github.com/vuejs/test-utils
export default (options) => {
  return {
    pkg: [
      'vitest',
      '@vitest/ui',
      '@vitest/coverage-v8',
      '@vitejs/plugin-vue',
      '@vue/test-utils',
      'happy-dom',
    ],
    file: ['test-vitest-vue/vitest.config.ts'],
    async afterInstall() {
      await setPkg(options.cwd, {
        scripts: {
          test: 'vitest',
          'test:ui': 'vitest --ui',
          'test:coverage': 'vitest run --coverage',
        },
      })
    },
  }
}
