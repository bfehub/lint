// https://stylelint.io/user-guide/get-started
module.exports = {
  extends: [
    // https://github.com/ota-meshi/stylelint-config-html
    'stylelint-config-html',
    // https://github.com/stylelint/stylelint-config-standard
    'stylelint-config-standard',
    // https://github.com/stormwarning/stylelint-config-recess-order
    'stylelint-config-recess-order',
    // https://github.com/prettier/stylelint-prettier
    'stylelint-prettier/recommended',
  ],
  plugins: [
    // https://github.com/hudochenkov/stylelint-order
    'stylelint-order',
  ],
}
