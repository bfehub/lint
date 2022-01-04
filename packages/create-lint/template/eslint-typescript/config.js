module.exports = (options) => {
  return {
    pkg: [
      'eslint',
      'prettier',
      'typescript',
      '@bfehub/eslint-config-typescript',
    ],
    configFile: [
      'base/.prettierignore',
      'base/.prettierrc.js',
      'base/.eslintignore',
      'eslint-typescript/.eslintrc.js',
    ],
  }
}
