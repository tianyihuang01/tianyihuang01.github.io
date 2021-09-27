module.exports = {
  extends: ['react-app', 'airbnb', 'prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false,
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    jest: true,
    es2021: true,
  },
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-debugger': 'error',
    'no-alert': 'error',
    'default-case': 'error',
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'prefer-promise-reject-errors': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/prop-types': ['off'],
    'react/destructuring-assignment': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'no-return-assign': ['off'],
    'no-nested-ternary': ['off'],
    'no-param-reassign': ['off'],
    'no-plusplus':['off'],
    'react/no-array-index-key':['off'],
  },
};
