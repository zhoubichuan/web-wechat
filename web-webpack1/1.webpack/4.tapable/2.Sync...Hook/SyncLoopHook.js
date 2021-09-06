let { SyncLoopHook } = require("tapable");

class Lesson {
  constructor() {
    this.hooks = { arch: new SyncLoopHook(["name"]) };
  }
  tap() {
    //注册监听函数
    this.hooks.arch.tap("node", name => {
      console.log("node", name);
      return ++this.index === 3 ? undefined : "继续";
    });
    this.hooks.arch.tap("react", name => {
      console.log("react", name);
    });
  }
  statr() {
    this.hooks.arch.call("123");
  }
}
let l = new Lesson();
l.tap(); //注册这两个事件
l.statr(); //启动钩子
