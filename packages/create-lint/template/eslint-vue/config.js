module.exports = (options) => {
  return {
    pkg: ['eslint', 'prettier', 'typescript', '@bfehub/eslint-config-vue'],
    configFile: [
      'base/.prettierignore',
      'base/.prettierrc.js',
      'base/.eslintignore',
      'eslint-vue/.eslintrc.js',
    ],
  }
}
