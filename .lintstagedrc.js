/** @type {import('lint-staged').Config} */
export default {
  '*.{js?(x),ts?(x)}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss,less}': ['stylelint --fix --aei', 'prettier --write'],
  '*.vue': ['eslint --fix', 'stylelint --fix --aei', 'prettier --write'],
  'package.json': ['prettier --write'],
}
