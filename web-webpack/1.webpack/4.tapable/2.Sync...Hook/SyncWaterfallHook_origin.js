class SyncWaterfallHook {
  //同步方法
  constructor(args) {
    //args => ['name']
    this.tasks = [];
  }
  tap(name, task) {
    this.tasks.push(task);
  }
  call(...args) {
    let [first, ...others] = this.tasks;
    let ret = first(...args);
    others.reduce((a, b) => {
      return b(a);
    }, ret);
  }
}
let hook = new SyncWaterfallHook(["name"]);
hook.tap("node", function(name) {
  console.log("node", name);
  return "node";
});
hook.tap("react", function(name) {
  console.log("react", name);
  return "react";
});
hook.tap("webpack", function(name) {
  console.log("webpack", name);
});
hook.call("123");
