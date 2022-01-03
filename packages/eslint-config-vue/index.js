// https://eslint.vuejs.org/user-guide
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  extends: [
    // https://eslint.vuejs.org/user-guide/#bundle-configurations
    'plugin:vue/vue3-recommended',
    '@bfehub/eslint-config-typescript',
  ],
  rules: {
    // override rules
    'no-unused-vars': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-unused-vars': 'off',

    // off rules
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
