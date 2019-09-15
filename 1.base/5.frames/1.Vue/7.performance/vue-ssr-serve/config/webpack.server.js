let base = require("./webpack.base");
let merge = require("webpack-merge");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
let externals = require("webpack-node-externals");
let path = require("path");

module.exports = merge(base, {
  target: "node", //打包出来的结果给node用
  entry: {
    //入口文件
    server: path.resolve(__dirname, "../src/server-entry.js")
  },
  externals: [externals()], //第三方模块不需要打包
  output: {
    libraryTarget: "commonjs2" //modules.exports=sever.entry.js
  },
  plugins: [
    new VueSSRServerPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.ssr.html",
      template: path.resolve(__dirname, "../public/index.ssr.html"),
      excludeChunks: ["server"]
    })
  ]
});
