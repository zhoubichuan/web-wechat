import Vue from "vue";
import App from "./App.vue";

// Vue.config.productionTip = false;

// let install = null;

// function render(props = {}) {
//   const { container } = props;
//   install = new Vue({
//     render: (h) => h(App),
//   }).$mount(container ? container.querySelector("#vue-demo") : "#vue-demo");
// }
// if (window.__POWERED_BY_QIANKUN__) {
//   window.__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
// } else {
//   render();
// }

// export async function bootstrap() {}
// export async function mount(props) {
//   render(props);
// }
// export async function unmount() {
//   install.$destroy();
// }

new Vue({
  render: (h) => h(App),
}).$mount("#vue-demo");
