let { AsyncSeriesHook } = require("tapable");
class Lesson {
  constructor() {
    this.index = 0;
    this.hooks = { arch: new AsyncSeriesHook(["name"]) };
  }
  tap() {
    this.hooks.arch.tapPromise("node", name => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("node", name);
          resolve();
        }, 1000);
      });
    });
    this.hooks.arch.tapPromise("react", name => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("react", name);
          resolve();
        }, 1000);
      });
    });
  }
  statr() {
    this.hooks.arch.promise("123").then(function() {
      console.log("end");
    });
  }
}
let l = new Lesson();
l.tap(); //注册这两个事件
l.statr(); //启动钩子
