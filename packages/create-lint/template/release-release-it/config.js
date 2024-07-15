import { setPkg } from '../../utils/index.js'

// https://github.com/release-it/release-it
export default (options) => {
  return {
    pkg: ['release-it', '@release-it/conventional-changelog'],
    file: ['release-release-it/.release-it.json'],
    async afterInstall() {
      await setPkg(options.cwd, {
        scripts: {
          release: 'release-it',
        },
      })
    },
  }
}
