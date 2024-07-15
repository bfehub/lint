import { setPkg } from '../../utils/index.js'

// https://github.com/vitest-dev/vitest
// https://github.com/testing-library/react-testing-library
export default (options) => {
  return {
    pkg: [
      'vitest',
      '@vitest/ui',
      '@vitest/coverage-v8',
      '@vitejs/plugin-react',
      '@testing-library/react',
      'happy-dom',
    ],
    file: ['test-vitest-react/vitest.config.ts'],
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
