let path = require("path");
let webpack = require("webpack");
module.exports = {
  mode: "development",
  entry: {
    // test: "./src/test.js"
    react: ["react", "react-dom"]
  },
  output: {
    // filename: "[name].js",
    filename: "_dll_[name].js",
    path: path.resolve(__dirname, "dist"),
    // library: "ab",
    library: "_dll_[name]"
    // libraryTarget: "var" //commonjs umd
  },
  plugins: [
    new webpack.DllPlugin({
      name: "_dll_[name]",
      path: path.resolve(__dirname, "dist", "manifest.json")
    })
  ]
};
