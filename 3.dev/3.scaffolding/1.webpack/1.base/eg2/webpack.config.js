const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//开发服务器配置
module.exports = {
  mode: "development",
  //入口，可以是相对路径
  entry: "./src/index.js",
  //输出的文件夹，只能是绝对路径
  output: {
    path: path.resolve(__dirname, "dist"),
    //打包后的文件名
    //name是entry名字，hash根据打包后的文件内容计算出来的一个值
    filename: "[name].[hash:8].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true
      },
      hash: true
    })
  ]
};
