module.exports = (options) => {
  return {
    pkg: ['eslint', 'prettier', 'typescript', '@bfehub/eslint-config-react'],
    configFile: [
      'base/.prettierignore',
      'base/.prettierrc.js',
      'base/.eslintignore',
      'eslint-react/.eslintrc.js',
    ],
  }
}
