let path = require("path");
let VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = {
  mode: "production",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-syntax-dynamic-import"]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
