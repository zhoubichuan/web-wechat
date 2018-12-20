const Koa = require("koa");
const path = require("path");
const static = require("koa-static");
const app = new Koa();
app.use(static(path.join(__dirname, "public")));
app.use(async ctx => {
  ctx.body = "Not Found";
});
app.listen(3000);
