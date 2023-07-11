// https://github.com/facebook/react
module.exports = {
  extends: [
    // https://github.com/yannickcr/eslint-plugin-react
    'plugin:react/recommended',
    // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
    'plugin:react-hooks/recommended',
    // @bfehub/eslint-config-typescript
    '@bfehub/eslint-config-typescript',
  ],
  settings: {
    react: {
      version: '18.0',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
}
