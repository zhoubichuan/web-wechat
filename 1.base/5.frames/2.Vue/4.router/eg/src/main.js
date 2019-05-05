import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;

router.beforeEach((to, form, next) => {
  console.log("each");
  next();
});
router.beforeResolve((to, from, next) => {
  console.log("resolve");
  next();
});
router.afterEach(() => {
  console.log("after");
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
