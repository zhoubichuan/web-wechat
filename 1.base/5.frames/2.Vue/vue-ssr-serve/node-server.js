let express = require("express");
let app = express();
let Vue = require("vue");
let fs = require("fs");
let path = require("path");
let VueServerRenderer = require("vue-server-renderer");
// let serverBundle = fs.readFileSync("./dist/server.bundle.js", "utf8");
let serverBundle = require("./dist/vue-ssr-server-bundle.json");
let clientManifest = require("./dist/vue-ssr-client-manifest.json");
let template = fs.readFileSync("./dist/index.ssr.html", "utf8");
let render = VueServerRenderer.createBundleRenderer(serverBundle, {
  template,
  clientManifest
});
app.get("/", (req, res) => {
  let context = { url: req.url };
  render.renderToString(context, (err, html) => {
    res.send(html);
  });
});
app.use(express.static(path.resolve(__dirname, "dist")));

//如果访问的路径不存在 默认渲染index.ssr.html 并且把路由定向到当前请求的路径
app.get("*", (req, res) => {
  let context = { url: req.url };
  render.renderToString(context, function(err, html) {
    res.send(html);
  });
});
app.listen(4000, () => [console.log(4000)]);
