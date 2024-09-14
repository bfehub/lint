import typescript from '@bfehub/eslint-config-typescript'
import configPrettier from 'eslint-config-prettier'
import pluginVue from 'eslint-plugin-vue'

// https://eslint.vuejs.org/user-guide
/** @type {import('eslint').Linter.Config[]} */
export default [
  // @bfehub/eslint-config-typescript
  ...typescript,

  // https://eslint.vuejs.org/user-guide/#bundle-configurations
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      'vue/max-attributes-per-line': 'off',
      'vue/no-v-html': 'off',
      'vue/require-prop-types': 'off',
      'vue/require-default-prop': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  // https://github.com/prettier/eslint-config-prettier
  // Turns off all rules that are unnecessary or might conflict with Prettier.
  configPrettier,
]
