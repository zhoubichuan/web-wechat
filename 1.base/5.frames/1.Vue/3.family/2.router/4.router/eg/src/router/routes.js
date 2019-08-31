import Home from "@/components/Home";
import Name from "@/components/Name";
import Version from "@/components/Version";

export default [
  {
    path: "/",
    redirect: { path: "/home" }
  },
  {
    path: "/home",
    name: "home",
    components: {
      default: Home,
      name: Name,
      version: Version
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/components/Login")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/components/Profile"),
    meta: { needLogin: true } //路由元信息
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => import("@/components/UserDetail.vue")
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/components/User"),
    children: [
      {
        path: "",
        component: () => import("@/components/UserAdd.vue")
      },
      {
        path: "add",
        name: "userAdd",
        component: () => import("@/components/UserAdd.vue")
      },
      {
        path: "list",
        name: "userList",
        component: () => import("@/components/UserList.vue")
      },
      {
        path: "detail/:id",
        name: "userDetail",
        component: () => import("@/components/UserDetail.vue"),
        boforeEnter(to, from, next) {
          console.log("xxxx");
          next();
        }
      }
    ],
    beforeEnter(to, from, next) {
      console.log("user");
      next();
    }
  },
  {
    path: "*",
    component: () => import("@/components/404.vue")
  }
];
