// https://github.com/release-it/release-it
module.exports = () => {
  return {
    pkg: ['release-it', '@release-it/conventional-changelog'],
    configFile: ['release-release-it/.release-it.json'],
  }
}
