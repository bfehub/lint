export default () => {
  return {
    pkg: ['eslint', 'prettier', 'typescript', '@bfehub/eslint-config-vue'],
    file: [
      'base/.prettierignore',
      'base/.prettierrc.js',
      'eslint-vue/eslint.config.js',
    ],
  }
}
