/** @type {import('lint-staged').Config} */
export default {
  '*.{js?(x),ts?(x)}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss,less}': ['stylelint --fix', 'prettier --write'],
  '*.vue': ['eslint --fix', 'stylelint --fix', 'prettier --write'],
  'package.json': ['prettier --write'],
}
