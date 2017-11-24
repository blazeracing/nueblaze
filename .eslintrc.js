module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    "quotes": 0,
    "keyword-spacing": 0,
    "space-before-blocks": 0,
    "space-before-function-paren": 0
  },
  globals: {}
}
