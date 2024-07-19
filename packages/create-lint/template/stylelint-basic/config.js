export default () => {
  return {
    pkg: ['stylelint', 'prettier', 'postcss', '@bfehub/stylelint-config-basic'],
    file: [
      'base/.prettierignore',
      'base/.prettierrc.js',
      'stylelint-basic/.stylelintignore',
      'stylelint-basic/.stylelintrc.js',
    ],
  }
}
