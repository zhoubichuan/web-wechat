const path = require("path");
module.exports = {
  //入口，可以是相对路径
  entry: "./src/index.js",
  //输出的文件夹，只能是绝对路径
  output: {
    path: path.join(__dirname, "dist"),
    //打包后的文件名
    //name是entry名字，hash根据打包后的文件内容计算出来的一个值
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        //转换文件的匹配正则
        test: /\.css$/,
        //css-loader用来解析处理css文件中的url路径
        //style-loader可以把css文件变成style标签插入header中
        //多个loader是有顺序的，从右往左写，因为转换是从右向左转换
        loader: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [],
  //配置此静态文件服务器，可以用来预览打包后的项目
  devServer: {
    contentBase: "./dist",
    host: "localhost",
    port: 8080,
    //服务器返回给浏览器的时候是否启动gzip压缩
    compress: true
  }
};
