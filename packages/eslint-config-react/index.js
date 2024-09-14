import typescript from '@bfehub/eslint-config-typescript'
import configPrettier from 'eslint-config-prettier'
import pluginReact from 'eslint-plugin-react'
import pluginReactRecommended from 'eslint-plugin-react/configs/recommended.js'
import pluginReactHooks from 'eslint-plugin-react-hooks'

// https://github.com/facebook/react
/** @type {import('eslint').Linter.Config[]} */
export default [
  // @bfehub/eslint-config-typescript
  ...typescript,

  // https://github.com/jsx-eslint/eslint-plugin-react
  {
    plugins: {
      react: pluginReact,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    ...pluginReactRecommended,
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },

  // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: {
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
    },
  },

  // https://github.com/prettier/eslint-config-prettier
  // Turns off all rules that are unnecessary or might conflict with Prettier.
  configPrettier,
]
