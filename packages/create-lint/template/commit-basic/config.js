const { spawnSync } = require('child_process')
const { setPkg } = require('../../utils/index')

// https://github.com/typicode/husky
// https://github.com/okonet/lint-staged
// https://github.com/commitizen/cz-cli
// https://github.com/conventional-changelog/commitlint
module.exports = (options) => {
  return {
    pkg: [
      'husky',
      'lint-staged',
      'commitizen',
      'cz-conventional-changelog',
      '@commitlint/cli',
      '@commitlint/config-conventional',
    ],
    configFile: [
      'commit-basic/.husky/pre-commit',
      'commit-basic/.husky/commit-msg',
      'commit-basic/.lintstagedrc.js',
      'commit-basic/.czrc',
      'commit-basic/.commitlintrc.js',
    ],
    async afterInstall() {
      await setPkg(options.cwd, {
        scripts: {
          prepare: 'husky install',
          commit: 'npx git-cz',
        },
      })

      spawnSync('npm', ['run', 'prepare'], {
        cwd: options.cwd,
      })
    },
  }
}
