const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const TerserPlugin = require("terser-webpack-plugin");
// 抽离css成单独文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 压缩输出
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
  entry: {
    canvas: {
      import: path.resolve(__dirname, "src/canvas.js"),
      // dependOn: "share",
    },
    drag: path.resolve(__dirname, "src/drag.js"), // 相对路径和绝对路径都可以
    audio: path.resolve(__dirname, "src/audio.js"),
    less: path.resolve(__dirname, "src/less.js"),
    // 可写成键值对形式
    main: {
      import: path.resolve(__dirname, "src/main.js"),
      // dependOn: "share",
    },
    /*
    // 第三方包单独打包,，如果没有使用splitchunk
    // lodash: "lodash",可以单独写一个字符串
    share: ["lodash", "jquery"],// 也可以写一个数组
    */
  },
  mode: "development",
  devtool: "eval-source-map",
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"), // 要求绝对路径
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
        test: /\.js$/i,
        exclude: /node_modules/, // 不包含node_modules
        use: ["babel-loader"],
      },
      {
        test: /\.vue$/i,
        use: ["vue-loader"],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        // 处理图片文件
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "static/images/[name]_[hash].[ext]",
        },
      },
      {
        // 处理字体文件
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "static/fonts/[name]_[hash].[ext]",
        },
      },
    ],
  },
  devServer: {
    static: "./dist",
    hot: true,
    port: 4000,
    compress: true, // 开启gip
  },
  // 优化
  optimization: {
    minimize: true,
    runtimeChunk: true,
    minimizer: [
      new TerserPlugin({
        // 禁止剥离注释
        extractComments: false,
      }),
      new CssMinimizerPlugin({
        parallel: true, // 可省略，默认开启并行
        minimizerOptions: {
          //  cssnano-preset-advanced需额外安装
          preset: "advanced"
        },
      }),
    ],
    // 代码分割
    splitChunks: {
      chunks: "initial", // async==>异步引入 initial==>同步 all ==>两者都
      // minSize: 20000,
      // maxSize: 20000,
      minChunks: 1, // 最小引用次数
      cacheGroups: {
        // 匹配node__module里的文件
        defaultVendors: {
          minChunks: 1,
          test: /[\\/]node_modules[\\/]/,
          filename: "js/[contenthash:8]_vendor.js",
          priority: -10, // 优先级
        },
        // 其他默认文件
        default: {
          minChunks: 2, // 最小引用2次
          filename: "js/[contenthash:8]_qjdyyds.js",
          priority: -20,
        },
      },
    },
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
    new HtmlWebpackPlugin({
      template: "public/less.html",
      filename: "less.html",
      hash: true,
      chunks: ["less"],
      minify: {
        collapseInlineTagWhitespace: true, // 折叠空白压缩代码
      },
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
      hash: true,
      chunks: ["main"],
      minify: {
        collapseInlineTagWhitespace: true, // 折叠空白压缩代码
      },
    }),
    new VueLoaderPlugin(),
    // css 抽离
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash:8].css",
      chunkFilename: "static/css/[id].css",
    }),
  ],
};
