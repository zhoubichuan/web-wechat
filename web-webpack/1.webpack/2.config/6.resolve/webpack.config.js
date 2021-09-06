const path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    home: "./src/index.js"
  },
  resolve: {
    modules: [path.resolve("node_modules")],
    extensions: [".js", ".css", ".json", ".vue"],
    mainFields: ["style", "main"]
    // mainFiles: ["index.js"],
    // alias: {
    //   bootstrap: "bootstrap/dist/css/bootstrap.css"
    // }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    })
  ]
};
