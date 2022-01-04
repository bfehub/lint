module.exports = (options) => {
  return {
    pkg: ['stylelint', 'prettier', '@bfehub/stylelint-config-basic'],
    configFile: [
      'base/.prettierignore',
      'base/.prettierrc.js',
      'base/.stylelintignore',
      'stylelint-basic/.stylelintrc.js',
    ],
  }
}
