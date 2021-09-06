let path = require("path");
let DonePlugin = require("./plugins/DonePlugin");
let AsyncPlugin=require('./plugins/AsyncPlugin')
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new DonePlugin(),new AsyncPlugin()]
};
