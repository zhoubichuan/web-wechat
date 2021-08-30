class AsyncParallelHook {
  //同步方法
  constructor(args) {
    //args => ['name']
    this.tasks = [];
  }
  tapAsync(name, task) {
    this.tasks.push(task);
  }
  callAsync(...args) {
    let finalCallback = args.pop();
    let index = 0;
    let done = () => {
      index++;
      if (index == this.tasks.length) {
        finalCallback();
      }
    };
    this.tasks.forEach(task => {
      task(...args, done);
    });
  }
}
let hook = new AsyncParallelHook(["name"]);
let total = 0;
hook.tapAsync("node", (name, cb) => {
  setTimeout(() => {
    console.log("node", name);
    cb();
  }, 1000);
});
hook.tapAsync("react", (name, cb) => {
  setTimeout(() => {
    console.log("react", name);
    cb();
  }, 1000);
});

hook.callAsync("123", function() {
  console.log("end");
});
