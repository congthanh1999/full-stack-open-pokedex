/* eslint-disable */
module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
    node: true, // Add this to define 'require' and 'process'
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "jest"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: "off", // Allow both single and double quotes
    semi: "off",
    eqeqeq: "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "always"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "no-console": "warn", // Change from 'error' to 'warn'
    "react/prop-types": 0,
    "no-undef": "off", // Turn off 'no-undef' rule
    "no-unused-vars": "warn", // Change from 'error' to 'warn'
  },
};
