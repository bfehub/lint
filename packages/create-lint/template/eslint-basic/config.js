export default () => {
  return {
    pkg: ['eslint', 'prettier', '@bfehub/eslint-config-basic'],
    file: [
      'base/.prettierignore',
      'base/.prettierrc.js',
      'eslint-basic/eslint.config.js',
    ],
  }
}
