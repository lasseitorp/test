module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'plugin:security/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['security', 'prettier', 'jest'],
  env: {
    es6: true,
    browser: true,
    'jest/globals': true,
  },
  globals: {
    expect: true,
    it: true,
    describe: true,
    Drupal: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },

  rules: {
    strict: 0,
    'import/no-extraneous-dependencies': 0,
    'prettier/prettier': 'error',
  },
};
