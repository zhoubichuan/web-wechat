const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//开发服务器配置
module.exports = {
  devServer: {
    contentBase: "./dist",
    host: "localhost",
    port: 8080,
    //服务器返回给浏览器的时候是否启动gzip压缩
    compress: true
  },
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
  //配置此静态文件服务器，可以用来预览打包后的项目
};
