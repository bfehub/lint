export default () => {
  return {
    pkg: ['eslint', 'prettier', 'typescript', '@bfehub/eslint-config-react'],
    file: [
      'base/.prettierignore',
      'base/.prettierrc.js',
      'eslint-react/eslint.config.js',
    ],
  }
}
