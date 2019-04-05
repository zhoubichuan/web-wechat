let path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "dist")
  },
  resolveLoader: {
    modules: ["node_modules", path.resolve(__dirname, "loaders")]

  },
  watch:true,
  devtool:'source-map',
  module: {
    rules: [
      {
        test:/\.js$/,
        use:{
          loader:'banner-loader',
          options:{
            text:'123',
            filename:path.resolve(__dirname,'banner.js')
          }
        }
      }
    ]
  }
};
