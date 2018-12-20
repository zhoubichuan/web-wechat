let Koa = require("koa");
app.use(ctx => {
  console.log(ctx.req.path);
  console.log(ctx.request.req.path);
  ctx.body = "hello";
  ctx.body = "world";
  console.log(ctx.response.body)
});
