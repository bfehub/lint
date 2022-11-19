// https://eslint.vuejs.org/user-guide
module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  ],
  extends: [
    // https://eslint.vuejs.org/user-guide/#bundle-configurations
    'plugin:vue/vue3-recommended',
    // @bfehub/eslint-config-typescript
    '@bfehub/eslint-config-typescript',
  ],
  rules: {
    // off rules
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
