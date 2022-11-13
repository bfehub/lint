module.exports = (options) => {
  return {
    pkg: ['stylelint', 'prettier', 'postcss', '@bfehub/stylelint-config-basic'],
    configFile: [
      'base/.prettierignore',
      'base/.prettierrc.cjs',
      'base/.stylelintignore',
      'stylelint-basic/.stylelintrc.cjs',
    ],
  }
}
