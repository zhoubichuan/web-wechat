const path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let CleanWebpackPlugin = require("clean-webpack-plugin");

let CopyWebpackPlugin = require("copy-webpack-plugin");

let webpack = require("webpack");
module.exports = {
  mode: "production",
  entry: {
    home: "./src/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([{ from: "./doc", to: "./" }]),
    new webpack.BannerPlugin("autor 2019 3 17")
  ]
};
