# @bfehub/eslint-config-typescript

## Usage

使用 `npm` or `yarn` or `pnpm` 安装。

```sh
npm install -D eslint prettier typescript @bfehub/eslint-config-typescript
```

添加 `eslint.config.js` / `eslint.config.mjs` 配置文件。

```js
import typescript from '@bfehub/eslint-config-typescript'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default typescript
```
