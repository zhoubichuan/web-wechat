import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import iView from "iview";
import "iview/dist/styles/iview.css";

Vue.use(iView);

Vue.config.productionTip = false;

let whiteList = ["/xxx"];
router.beforeEach(async (to, from, next) => {
  if (whiteList.includes(to.path)) {
    return next();
  }
  let isLogin = await store.dispatch("validate");
  let needLogin = to.matched.some(match => match.meta.needLogin);
  if (needLogin) {
    if (isLogin) {
      next();
    } else {
      next("/login");
    }
  } else {
    if (isLogin && to.name === "login") {
      next("/");
    } else {
      next();
    }
  }
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
