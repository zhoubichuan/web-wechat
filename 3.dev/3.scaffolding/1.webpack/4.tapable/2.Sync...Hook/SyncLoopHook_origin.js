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
    this.tasks.forEach(task => {
      let ret;
      do {
        ret = task(...args);
      } while (ret !== undefined);
    });
  }
}
let hook = new SyncWaterfallHook(["name"]);
let total = 0;
hook.tap("node", function(name) {
  console.log("node", name);
  return ++total == 3 ? undefined : "continue";
});
hook.tap("react", function(name) {
  console.log("react", name);
});
hook.tap("webpack", function(name) {
  console.log("webpack", name);
});
hook.call("123");
