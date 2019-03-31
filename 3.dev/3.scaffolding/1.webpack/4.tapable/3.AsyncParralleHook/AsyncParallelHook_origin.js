class AsyncParallelHook {
  //同步方法
  constructor(args) {
    //args => ['name']
    this.tasks = [];
  }
  tapPromise(name, task) {
    this.tasks.push(task);
  }
  promise(...args) {
    let tasks = this.tasks.map(task => task(...args));
    return Promise.all(tasks);
  }
}
let hook = new AsyncParallelHook(["name"]);
let total = 0;
hook.tapPromise("node", name => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("node", name);
      resolve();
    }, 1000);
  });
});
hook.tapPromise("react", name => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("react", name);
      resolve();
    }, 1000);
  });
});

hook.promise("123").then(function() {
  console.log("end");
});
