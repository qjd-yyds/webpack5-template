module.exports = {
  parser: "Espree", // 使用的解释器 默认
  env: {
    browser: true, // 浏览器的全局变量
    es2021: true,
    node: true,
    amd: true, // 将 require() 和 define() 定义为像 amd 一样的全局变量
  },
  extends: "eslint:recommended",
  // 解释器
  parserOptions: {
    ecmaVersion: 12, // 当前ECMAscript版本
    sourceType: "module", // ECMAscript 模块
    ecmaFeatures: {
      // 语言特性
      jsx: true, // 启用jsx语法
    },
  },
  globals: {
    var1: "writable", // 可写
    var2: "readonly", // 不可变动
  }, // 全局变量
  rules: {
    semi: ["error", "always"], // 分号规则
    quotes: ["error", "double"], // 双引号规则
  },
};
