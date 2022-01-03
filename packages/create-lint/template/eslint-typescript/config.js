module.exports = (options) => {
  return {
    pkg: [
      'eslint',
      'prettier',
      'typescript',
      '@bfehub/eslint-config-typescript',
    ],
    configFile: [
      'base/.prettierrc',
      'base/.prettierignore',
      'base/.eslintignore',
      'eslint-typescript/.eslintrc',
    ],
  }
}
