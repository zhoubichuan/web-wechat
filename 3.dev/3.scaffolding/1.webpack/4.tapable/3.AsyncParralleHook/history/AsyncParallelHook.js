let { AsyncParallelHook } = require("tapable");
//异步的钩子（串行）并行
class Lesson {
  constructor() {
    this.hooks = { arch: new AsyncParallelHook(["name"]) };
  }
  tap() {
    //注册监听函数
    this.hooks.arch.tapAsync("node", (name, cb) => {
      setTimeout(() => {
        console.log("node", name);
        cb();
      }, 1000);
    });
    this.hooks.arch.tapAsync("react", (name, cb) => {
      setTimeout(() => {
        cb();
        console.log("react", name);
      }, 1000);
    });
  }
  statr() {
    this.hooks.arch.callAsync("123", function() {
      console.log("end");
    });
  }
}
let l = new Lesson();
l.tap(); //注册这两个事件
l.statr(); //启动钩子
