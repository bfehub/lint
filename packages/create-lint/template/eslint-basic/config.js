module.exports = () => {
  return {
    pkg: ['eslint', 'prettier', '@bfehub/eslint-config-basic'],
    configFile: [
      'base/.prettierignore',
      'base/.prettierrc.cjs',
      'base/.eslintignore',
      'eslint-basic/.eslintrc.cjs',
    ],
  }
}
