module.exports = (options) => {
  return {
    pkg: ['eslint', 'prettier', 'typescript', '@bfehub/eslint-config-vue'],
    configFile: [
      'base/.prettierrc',
      'base/.prettierignore',
      'base/.eslintignore',
      'eslint-vue/.eslintrc',
    ],
  }
}
