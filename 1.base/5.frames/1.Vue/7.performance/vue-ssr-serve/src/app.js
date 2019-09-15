import Vue from "vue";
import App from "./App.vue";
import createRouter from "./router";
import createStore from "./store";

import bus from "./libs/eventBus";
//为了兼容服务端 要把这个方法改造成函数
export default () => {
  let router = createRouter();
  let store = createStore();
  //创建实例
  let app = new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
  });
  return { app, router, store };
};
