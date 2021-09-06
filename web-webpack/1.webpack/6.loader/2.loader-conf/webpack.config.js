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
    // //别名
    // alias: {
    //   loader1: path.resolve(__dirname, "loaders", "loader1.js")
    // }
  },
  module: {
    rules: [
      //loader的顺序问题，从右向左，从下向上
      //loader的分类 pre在前面的 post 在后面的 normal
      //loader的顺序 pre+normal+inline+post
      {
        test: /\.js$/,
        use: {
          loader: "loader3"
        },
        enforce: "pre"
      },
      {
        test: /\.js$/,
        use: {
          loader: "loader2"
        },
        enforce: "post"
      },
      {
        test: /\.js$/,
        use: {
          loader: "loader1"
        }
      }
      // {
      //   test: /\.js$/,
      //   use: ["loader3", "loader2", "loader1"]
      // }
    ]
  }
};
