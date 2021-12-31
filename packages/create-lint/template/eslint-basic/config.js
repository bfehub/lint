module.exports = (options) => {
  return {
    pkg: ['eslint', 'prettier', '@befhub/eslint-config-basic'],
    configFile: [
      'base/.prettierrc',
      'base/.prettierignore',
      'base/.eslintignore',
      'eslint-basic/.eslintrc',
    ],
  }
}
