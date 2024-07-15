import { spawnSync } from 'node:child_process'
import { setPkg } from '../../utils/index.js'

// https://github.com/changesets/changesets
export default (options) => {
  return {
    pkg: ['@changesets/cli'],
    file: [],
    async afterInstall() {
      await setPkg(options.cwd, {
        scripts: {
          version: 'changeset version',
          publish: 'changeset publish',
        },
      })

      spawnSync('npx', ['changeset', 'init'], {
        cwd: options.cwd,
      })
    },
  }
}
