const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  entry: {
    canvas: path.resolve(__dirname, "src/canvas.js"),
    drag: path.resolve(__dirname, "src/drag.js"),
    audio: path.resolve(__dirname, "src/audio.js"),
  },
  mode: "development",
  devtool: "eval-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    // 后缀省略
    extensions: [".vue", ".tsx", ".ts", ".jsx", ".js", ".json"],
    // 创建别名
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        // 处理图片文件
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        // 处理字体文件
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    static: "./dist",
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/canvas.html",
      filename: "canvas.html",
      hash: true,
      chunks: ["canvas"],
      minify: {
        collapseInlineTagWhitespace: true, // 折叠空白压缩代码
      },
    }),
    new HtmlWebpackPlugin({
      template: "public/drag.html",
      filename: "drag.html",
      hash: true,
      chunks: ["drag"],
      minify: {
        collapseInlineTagWhitespace: true, // 折叠空白压缩代码
      },
    }),
    new HtmlWebpackPlugin({
      template: "public/audio.html",
      filename: "audio.html",
      hash: true,
      chunks: ["audio"],
      minify: {
        collapseInlineTagWhitespace: true, // 折叠空白压缩代码
      },
    }),
  ],
};
