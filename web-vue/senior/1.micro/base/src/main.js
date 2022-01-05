import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from "qiankun";
import microApps from "./micro-app";

createApp(App).use(store).use(router).mount('#app')

const config = {
  // 挂载前回调
  beforeLoad: [
    (app) => {
      console.log("beforeload", app);
    },
  ],
  // 挂载后回调
  beforeMount: [
    (app) => {
      console.log("beforeMount", app);
    },
  ],
  // 卸载后回调
  afterUnmount: [
    (app) => {
      console.log("afterMount", app);
    },
  ],
};

registerMicroApps(microApps, config);
start();
