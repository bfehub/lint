import basic from '@bfehub/eslint-config-basic'
import configPrettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'

// https://typescript-eslint.io/docs/linting
/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // @bfehub/eslint-config-basic
  ...basic,

  // https://typescript-eslint.io/getting-started
  ...tseslint.configs.recommended,
  {
    rules: {
      // override rules
      'no-undef': 'off',
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'none',
          caughtErrors: 'none',
          ignoreRestSiblings: true,
          vars: 'all',
        },
      ],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          functions: false,
          classes: false,
          variables: true,
        },
      ],
      'no-useless-constructor': 'off',

      // off rules
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },

  // https://github.com/prettier/eslint-config-prettier
  // Turns off all rules that are unnecessary or might conflict with Prettier.
  configPrettier,
]
