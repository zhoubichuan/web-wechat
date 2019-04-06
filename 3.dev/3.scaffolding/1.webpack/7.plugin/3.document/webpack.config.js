let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let FileListPlugin = require("./plugins/FileListPlugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new FileListPlugin({
      filename:'list.md'
    })
  ]
};
