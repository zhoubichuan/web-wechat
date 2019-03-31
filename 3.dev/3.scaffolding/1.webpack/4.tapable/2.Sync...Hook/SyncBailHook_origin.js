class SyncBailHook {
  //同步方法
  constructor(args) {
    //args => ['name']
    this.tasks = [];
  }
  tap(name, task) {
    this.tasks.push(task);
  }
  call(...args) {
    let ret; //当前这个函数的返回值
    let index = 0; //当前要执行第一个
    do {
      ret = this.tasks[index++](...args);
    } while (ret === undefined && index < this.tasks.length);
  }
}
let hook = new SyncBailHook(["name"]);
hook.tap("node", function(name) {            5
  console.log("node", name);
  return "stop";
});
hook.tap("react", function(name) {
  console.log("react", name);
});
hook.call("123");
