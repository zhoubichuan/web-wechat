class SyncHook {
  //同步方法
  constructor(args) {
    //args => ['name']
    this.tasks = [];
  }
  tap() {
    this.tasks.push(task);
  }
  call(...args) {
    this.tasks.forEach(element => {
      element(...args);
    });
  }
}
let hook = new SyncHook(["name"]);
hook.tap("node", function(name) {
  console.log("node", name);
});
hook.tap("react", function(name) {
  console.log("react", name);
});
hook.call("123");
