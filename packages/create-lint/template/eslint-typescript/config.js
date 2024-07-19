export default () => {
  return {
    pkg: [
      'eslint',
      'prettier',
      'typescript',
      '@bfehub/eslint-config-typescript',
    ],
    file: [
      'base/.prettierignore',
      'base/.prettierrc.js',
      'eslint-typescript/eslint.config.js',
    ],
  }
}
