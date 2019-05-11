import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;

router.beforeEach((to, form, next) => {
  let flag = to.matched.some(match => match.meta && match.meta.needLogin);
  //如果用户已经登录 并且访问 的还是登录页面
  let isLogin = localStorage.getItem("login");

  if (flag) {
    if (isLogin) {
      if (to.name == "login") {
        next("/");
      } else {
        next();
      }
    } else {
      next("/");
    }
  } else if (to.name == "login") {
    if (isLogin) {
      next("/");
    } else {
      next();
    }
  } else {
    next();
  }
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
//钩子函数
//router route
//meta
