const { setPkg } = require('../../utils/index')

// https://github.com/facebook/jest
// https://github.com/kulshekhar/ts-jest
// https://github.com/vuejs/vue-jest
// https://github.com/vuejs/test-utils
module.exports = (options) => {
  return {
    pkg: [
      'jest',
      'ts-jest',
      'ts-node',
      'jest-transform-stub',
      'jest-environment-jsdom',
      '@types/jest',
      '@vue/vue3-jest',
      '@vue/test-utils',
    ],
    configFile: ['test-jest-vue/jest.config.ts'],
    async afterInstall() {
      await setPkg(options.cwd, {
        scripts: {
          test: 'jest',
        },
      })
    },
  }
}
