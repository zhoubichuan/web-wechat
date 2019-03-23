const path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    home: "./src/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new webpack.DefinePlugin({
      // DEV: "'dev'"
      DEV: JSON.stringify("production"),
      FLAG: "true",
      EXPORESSION: JSON.stringify("1+1")
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    })
  ]
};
