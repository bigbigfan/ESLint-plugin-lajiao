module.exports = {
    parser: "vue-eslint-parser",
    root: true,
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    env: {
      browser: true,
      node: true,
    },
    extends: [
        // 'airbnb',
        'eslint:recommended',
        'plugin:vue/recommended'
        // 'plugin:import/errors',
    ],
    rules: {
        'linebreak-style': 0,
        'semi': [1, 'never'], // 测试rule
        'no-console': 'off'
    }
}