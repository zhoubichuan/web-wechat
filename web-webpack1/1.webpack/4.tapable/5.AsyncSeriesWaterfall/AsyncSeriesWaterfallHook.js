let { AsyncSeriesWaterfallHook } = require("tapable");
class Lesson {
  constructor() {
    this.index = 0;
    this.hooks = { arch: new AsyncSeriesWaterfallHook(["name"]) };
  }
  tap() {
    this.hooks.arch.tapAsync("node", (name, cb) => {
      setTimeout(() => {
        console.log("node", name);
        cb(null, "result");
      }, 1000);
    });
    this.hooks.arch.tapAsync("react", (name, cb) => {
      setTimeout(() => {
        console.log("react", name);
        cb("asdf");
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
l.statr(); //启动钩子;
