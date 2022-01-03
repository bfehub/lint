module.exports = (options) => {
  return {
    pkg: ['eslint', 'prettier', 'typescript', '@bfehub/eslint-config-react'],
    configFile: [
      'base/.prettierrc',
      'base/.prettierignore',
      'base/.eslintignore',
      'eslint-react/.eslintrc',
    ],
  }
}
