class AsyncPlugin {
  apply(complier) {
    complier.hooks.emit.tapAsync("AsyncPlugin", (compliation, cb) => {
      setTimeout(() => {
        console.log("文件发射出来");
        cb();
      }, 1000);
    });
    complier.hooks.emit.tapPromise("AsyncPlugin", (compliation) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("等一秒");
          resolve();
        }, 1000);
      });
    });
  }
}
module.exports = AsyncPlugin;
