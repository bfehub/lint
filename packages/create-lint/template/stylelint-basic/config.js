module.exports = (options) => {
  return {
    pkg: ['stylelint', 'prettier', '@bfehub/stylelint-config-basic'],
    configFile: [
      'base/.prettierrc',
      'base/.prettierignore',
      'base/.stylelintignore',
      'stylelint-basic/.stylelintrc',
    ],
  }
}
