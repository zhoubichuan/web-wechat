import Home from "@/components/Home";
import Login from "@/components/Login";
import Profile from "@/components/Profile";
import User from "@/components/User";
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
    component: {
      default: Home,
      name: Name,
      version: Version
    },
    beforeEnter(to, from, next) {
      console.log("home");
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => "@component/login",
    beforeEnter(to, from, next) {
      console.log("login");
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: () => "@component/profile",
    beforeEnter(to, from, next) {
      console.log("profile");
    }
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => "@component/UserDetail.vue",
    beforeEnter(to, from, next) {
      console.log("profile");
      next();
    }
  },
  {
    path: "/user",
    name: "user",
    component: () => "@component/user",
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
      }
    ],
    beforeEnter(to, from, next) {
      console.log("user");
    }
  },
  {
    path: "*",
    component: () => import("@/components/404.vue")
  }
];
