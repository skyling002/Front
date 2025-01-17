module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true  // 支持现代 JavaScript
  },
  extends: [
    'plugin:vue/vue3-essential',  // 使用 Vue 3 规则
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
} 