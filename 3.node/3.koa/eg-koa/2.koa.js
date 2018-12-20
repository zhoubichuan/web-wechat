let Koa = require("koa");
let app = new Koa();
app.use((ctx, next) => {
  ctx.body = "hello";
  next();
});
app.use((ctx, next) => {
  ctx.body = "world";
});
app.use((ctx, next) => {
  ctx.body = "1024";
});
app.listen(4000, () => {
  console.log(4000);
});
