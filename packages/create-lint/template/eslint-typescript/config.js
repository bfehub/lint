module.exports = (options) => {
  return {
    pkg: [
      'eslint',
      'prettier',
      'typescript',
      '@befhub/eslint-config-typescript',
    ],
    configFile: [
      'base/.prettierrc',
      'base/.prettierignore',
      'base/.eslintignore',
      'eslint-basic/.eslintrc',
    ],
  }
}
