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
      // {//file-loader会根据路径
      //   test:/\.png$/,
      //   //目的就是根据图片生成一个md5 发射到dist目录下，file-loader还会返回当前的图片
      //   use:'file-loader'
      // },
      {
        test:/\.png$/,
        use:{
          loader:'url-loader',
          options:{
            limit:200*1024
          }
        }
      }
    ]
  }
};
