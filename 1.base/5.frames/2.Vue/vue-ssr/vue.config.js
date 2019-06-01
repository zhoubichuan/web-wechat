let PrerenderSPAPlugin = require("prerender-spa-plugin");
let path = require("path");
//会默认下载一个开发版的chrome
module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, "dist"),
        routes: ["/", "/about"]
      })
    ]
  }
};
