const path = require("path");
module.exports = {
  //入口，可以是相对路径
  entry: "./src/index.js",
  //输出的文件夹，只能是绝对路径
  output: {
    path: path.join(__dirname, "dist"),
    //打包后的文件名
    filename: "bundle.js"
  },
  module: {},
  plugins: []
};

