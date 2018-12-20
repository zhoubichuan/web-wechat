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
//迭代 删除目录

let app = {};
app.middleware = [];
app.use = function(fn) {
  this.middleware.push(fn);
};
app.use(next => {
  console.log(1);
  next();
  console.log(2);
});
app.use(next => {
  console.log(3);
  next();
  console.log(4);
});
app.use(next => {
  console.log(5);
  next();
  console.log(6);
});
function dispatch(index) {
  if (index === app.middlewares.length) return;
  let middle = app.middlewares[index]; //默认调用第一个
  //将第二个数组总的方法传入
  middle(() => dispatch(index + 1)); //默认调用第一个
}
dispatch(0);
