const { setPkg } = require('../../utils/index')

// https://github.com/facebook/jest
// https://github.com/kulshekhar/ts-jest
// https://github.com/testing-library/react-testing-library
module.exports = (options) => {
  return {
    pkg: [
      'jest',
      'ts-jest',
      'jest-transform-stub',
      '@types/jest',
      '@testing-library/react',
      '@testing-library/jest-dom',
      '@testing-library/user-event',
    ],
    configFile: ['test-jest-react/jest.config.ts'],
    async afterInstall() {
      await setPkg(options.cwd, {
        scripts: {
          test: 'jest',
        },
      })
    },
  }
}
