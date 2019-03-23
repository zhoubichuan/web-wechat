const path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    home: "./src/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  watch: true,
  //监控选项
  watchOptions: {
    poll: 1000, //每秒 问我 1000次
    aggregateTimeout: 500, //防抖 我一直输入代码
    ignored: /node_modules/ //忽略监控的文件夹
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    })
  ]
};
