const { setPkg } = require('../../utils/index')

// https://github.com/vitest-dev/vitest
// https://github.com/vuejs/test-utils
module.exports = (options) => {
  return {
    pkg: [
      'vitest',
      '@vitest/ui',
      '@vitejs/plugin-vue',
      '@vitejs/plugin-vue-jsx',
      '@vue/test-utils',
      'c8',
      'happy-dom',
    ],
    configFile: ['test-vitest-vue/vitest.config.ts'],
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
