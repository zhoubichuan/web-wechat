let merge = require("webpack-merge");
let base = require("./webpack.base");
let path = require("path");
let VueSSRServerPlugin = require("vue-server-renderer/client-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(base, {
  entry: {
    //入口文件
    client: path.resolve(__dirname, "../src/client-entry.js")
  },
  plugins: [
    new VueSSRServerPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../public/index.html")
    })
  ]
});
