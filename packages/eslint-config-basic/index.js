import js from '@eslint/js'
import pluginImport from 'eslint-plugin-import-x'
import pluginNode from 'eslint-plugin-n'
import pluginPrettier from 'eslint-plugin-prettier/recommended'
import pluginPromise from 'eslint-plugin-promise'
import globals from 'globals'

// https://eslint.org/docs/user-guide/getting-started
/** @type {import('eslint').Linter.Config[]} */
export default [
  // https://eslint.org/docs/latest/use/configure/language-options
  {
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.builtin,
        ...globals.node,
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
      },
    },
  },

  // https://eslint.org/docs/latest/rules
  js.configs.recommended,

  // https://github.com/eslint-community/eslint-plugin-promise
  {
    plugins: {
      promise: pluginPromise,
    },
    rules: {
      'promise/param-names': 'error',
    },
  },

  // https://github.com/eslint-community/eslint-plugin-n
  {
    plugins: {
      // Rename to be compatible with eslint-plugin-node
      node: pluginNode,
    },
    rules: {
      'node/handle-callback-err': ['error', '^(err|error)$'],
      'node/no-callback-literal': 'error',
      'node/no-deprecated-api': 'error',
      'node/no-exports-assign': 'error',
      'node/no-new-require': 'error',
      'node/no-path-concat': 'error',
      'node/process-exit-as-throw': 'error',
    },
  },

  // https://github.com/un-ts/eslint-plugin-import-x
  {
    plugins: {
      // Rename to be compatible with eslint-plugin-import
      import: pluginImport,
    },
    rules: {
      'import/export': 'error',
      'import/first': 'error',
      'import/no-absolute-path': 'error',
      'import/no-duplicates': 'error',
      'import/no-named-default': 'error',
      'import/no-webpack-loader-syntax': 'error',
      'import/order': [
        'error',
        {
          pathGroups: [
            {
              pattern: '@/**',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '#/**',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '~/**',
              group: 'external',
              position: 'after',
            },
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },

  // https://github.com/prettier/eslint-plugin-prettier
  // Turns off all rules that are unnecessary or might conflict with Prettier.
  pluginPrettier,
]
