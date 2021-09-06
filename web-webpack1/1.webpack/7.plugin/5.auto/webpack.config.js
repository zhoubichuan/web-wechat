let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let FileListPlugin = require("./plugins/FileListPlugin");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let UploadPlugin=require('./plugins/UploadPlugin')
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath:'http://pplgarg0j.bkt.clouddn.com/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new FileListPlugin({
      filename: "list.md"
    }),
    new UploadPlugin({
      bucket:'imgstatic',
      domain:'pplgarg0j.bkt.clouddn.com',
      accessKey:'q5iDsC65UaWs8ni8quwboTq7Yth-4TipXSuiE3Ml',
      secretKey:'KAi4ewk1gSf_UPkS4PyMK-efL7GyIpDN0ESxQsyk'
    })
  ]
};
