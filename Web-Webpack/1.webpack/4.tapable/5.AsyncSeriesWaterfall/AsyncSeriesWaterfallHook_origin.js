class AsyncSeriesWaterfallHook {
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
    let next = (err, data) => {
      let task = this.tasks[index];
      if (!task) return finalCallback();
      if (index == 0) {
        task(...args, next);
      } else {
        task(data, next);
      }
      index++;
    };
    next();
  }
}
let hook = new AsyncSeriesWaterfallHook(["name"]);
let total = 0;
hook.tapAsync("node", (name, cb) => {
  setTimeout(() => {
    console.log("node", name);
    cb(null, "结果");
  }, 1000);
});
hook.tapAsync("react", (data, cb) => {
  setTimeout(() => {
    console.log("react", data);
    cb(null);
  }, 1000);
});

hook.callAsync("123", function() {
  console.log("end");
});
