const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:8].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true
      },
      hash: true
    })
  ],
  //模块
  module: {
    //规则 css-loader 解析 @import这种语法
    //loader的特点 希望单一
    //loader的用法 字符串只用一个loader
    //多个loader需要 []
    //loader的顺序 默认是从右向左执行 从下向上执行
    rules: [
      { test: /\.css$/, use: [{ loader: "style-loader" }, "css-loader"] },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
            options: {
              insertAt: "top"
            }
          },
          "css-loader", //@import 解析路径
          "less-loader" // 把less -> css
        ]
      }
    ]
  }
};
