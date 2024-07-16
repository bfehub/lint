import { spawnSync } from 'node:child_process'
import { setPkg } from '../../utils/index.js'

// https://github.com/typicode/husky
// https://github.com/okonet/lint-staged
// https://github.com/commitizen/cz-cli
// https://github.com/conventional-changelog/commitlint
export default (options) => {
  return {
    pkg: [
      'husky',
      'lint-staged',
      'commitizen',
      '@commitlint/cli',
      '@commitlint/cz-commitlint',
      '@commitlint/config-conventional',
    ],
    file: [
      'commit-basic/.husky/pre-commit',
      'commit-basic/.husky/commit-msg',
      'commit-basic/.lintstagedrc.js',
      'commit-basic/.czrc',
      'commit-basic/.commitlintrc.js',
    ],
    async afterInstall() {
      await setPkg(options.cwd, {
        scripts: {
          prepare: 'husky',
          commit: 'cz',
        },
      })

      spawnSync('npm', ['run', 'prepare'], {
        cwd: options.cwd,
      })
    },
  }
}
