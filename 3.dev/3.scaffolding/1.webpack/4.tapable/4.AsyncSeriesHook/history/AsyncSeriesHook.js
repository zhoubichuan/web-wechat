let { AsyncSeriesHook } = require("tapable");
class Lesson {
  constructor() {
    this.index = 0;
    this.hooks = { arch: new AsyncSeriesHook(["name"]) };
  }
  tap() {
    this.hooks.arch.tapAsync("node", (name, cb) => {
      setTimeout(() => {
        console.log("node", name);
        cb();
      }, 1000);
    });
    this.hooks.arch.tapAsync("react", (name, cb) => {
      setTimeout(() => {
        console.log("react", name);
        cb();
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
