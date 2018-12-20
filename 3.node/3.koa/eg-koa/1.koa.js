const Koa = require("Koa");
const app = new Koa();
app.use(async ctx => {
  ctx.body = "Hello World";
});
app.on("error", err => {
  log.error("server eror", err);
});
app.listen(3000, function() {
  console.log(3000);
});
