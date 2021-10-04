module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // "usage" | "entry" | false 默认false
        useBuiltIns: "entry", // usage==>依据源代码所需要的新语法进行填充，entry==>依据浏览器需要什么依赖,需要入口文件引入相关依赖
        corejs: 3, // 默认版本是2
      },
    ],
  ],
};
