const { spawnSync } = require('child_process')

// https://github.com/changesets/changesets
module.exports = (options) => {
  return {
    pkg: ['@changesets/cli'],
    configFile: [],
    async afterInstall() {
      spawnSync('npx', ['changeset', 'init'], {
        cwd: options.cwd,
      })
    },
  }
}
