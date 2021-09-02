const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'src/main.js'),
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  resolve: {
    // 后缀省略
    extensions: ['.vue', '.tsx', '.ts', '.jsx', '.js', '.json'],
    // 创建别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    static: './dist',
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      hash: true
    })
  ]
};
