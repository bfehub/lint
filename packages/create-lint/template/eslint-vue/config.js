module.exports = (options) => {
  return {
    pkg: ['eslint', 'prettier', 'typescript', '@befhub/eslint-config-vue'],
    configFile: [
      'base/.prettierrc',
      'base/.prettierignore',
      'base/.eslintignore',
      'eslint-basic/.eslintrc',
    ],
  }
}
