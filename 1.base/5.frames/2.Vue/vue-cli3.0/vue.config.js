//基于node node不支持import语法
let path = require("path");
module.exports = {
  //baseURL 3.0废弃
  publicPath:
    process.env.NODE_ENV === "production" ? "http://www.zhufeng.cn" : "/",

  assetsDir: "asserts",
  outputDir: "./my-dist",

  //使用模板方式 一般不使用
  runtimeCompiler: true,

  //打包 不再使用sourcemap
  productionSourceMap: false,

  chainWebpack: config => {
    config.resolve.alias.set("+", path.resolve(__dirname, "src"));
  },

  configureWebpack: {
    plugins: [],
    module: {}
  },

  devServer: {
    //开发 服务时使用
    proxy: {
      "/api/getUser": {
        target: "http://localhost:3000",
        pathRewrite: {
          "/api": ""
        }
      }
    }
  },
  // pluginOptions: {
  //   "style-resources-loader": {
  //     preProcessor: "less",
  //     patterns: [path.resolve(__dirname, "src/assets/common.less")]
  //   }
  // }
};
//vue add style-resources-loader
