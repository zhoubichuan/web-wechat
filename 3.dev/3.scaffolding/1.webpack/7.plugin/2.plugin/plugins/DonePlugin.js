class DonePlugin {
  apply(complier) {
    complier.hooks.done.tap("DonePlugin", stats => {
      console.log("编译完成");
    });
  }
}
module.exports=DonePlugin