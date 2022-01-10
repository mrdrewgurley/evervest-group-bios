module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'google'],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'max-len': ['error', { code: 160 }],
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single'],
    'quote-props': [2, 'as-needed'],
    semi: ['error', 'never'],
  },
}
