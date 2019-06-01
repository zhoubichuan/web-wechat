import createApp from "./app.js";

//服务端调用此函数，产生一个新的app实列
export default context => {
  return new Promise((resolve, reject) => {
    let { app, router, store } = createApp();
    router.push(context.url); //跳转到路由
    //如果服务端启动时 直接访问 /foo 返回的页面永远都是 index.html 需要通过路由跳转到指定路径
    //为了防止路由中的异步逻辑所以采用异步逻辑

    //需要把当前页面中匹配到的组件 找到他的asyncData方法让它执行
    router.onReady(() => {
      //获取当前路径匹配到的组件看一下这个组件中 有没有asyncData方法
      let matchesComponents = router.getMatchedComponents();
      Promise.all(
        matchesComponents.map(component => {
          if (component.asyncData) {
            return component.asyncData({ store });
          }
        })
      ).then(() => {
        //把vuex中的状态 挂载在上下文中state上
        context.state = store.state;
        context.meta = app.$meta();
        resolve(app);
      });
    });
  });
};
