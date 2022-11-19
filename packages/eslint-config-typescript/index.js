// https://typescript-eslint.io/docs/linting
module.exports = {
  extends: [
    // https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    // @bfehub/eslint-config-basic
    '@bfehub/eslint-config-basic',
  ],
  rules: {
    // override rules
    'no-undef': 'off',
    'no-redeclare': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',

    // off rules
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}
