//Promise es6的
// generator async await
//koa generator async await
//axios redux-saga promise

//Promise 是一种异步流程的控制手段
//1.回调地狱，代码难以维护 第一个的输出时第二个的输入
//promise链式调用

//2.promise可以支持多个并发的请求，获取并发请求中的数据

//3.promise可以解决异步的问题

//promise（承诺）关键字 resolve成功 reject失败 pending等待
//如果一旦promise成功了就不能失败，相反也是一样的
//只有状态是等待的状态时 才可以转化状态
//每一个promise的实列上都有一个then方法，then方法中有两个参数，一个参数叫成功的函数，一个叫失败的函数

//事件环
//Promise只有一个参数 叫excutor执行器 默认new时就会调用
let p = new Promise((resolve, reject) => {
  //默认Promise中的excutor是同步执行的
  console.log(1);
});
p.then(value => {}, err => {});
console.log(2);




