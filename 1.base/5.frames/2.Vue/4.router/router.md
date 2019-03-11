## router

当组件切换时

* 会触发离开的钩子
  beforeRouteLeave
* 如果进入到新的页面 beforeEach
* beforeEnter 进到路由的配置中
* beforeRouteEnter 组件进入时的钩子
* 解析完成 beforeResolve

- afterEach 当前进入完毕
- 当属性变化时 并没有重新加载组件会触发 beforeRouteUpdate 方法
- 组件渲染完成后 会调用当前 beforeRouteEnter 回调方法
