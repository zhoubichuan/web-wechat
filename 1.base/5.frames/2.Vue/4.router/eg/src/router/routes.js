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
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => "@component/login"
  },
  {
    path: "/profile",
    name: "profile",
    component: () => "@component/profile"
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => "@component/UserDetail.vue"
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
      next();
    }
  },
  {
    path: "*",
    component: () => import("@/components/404.vue")
  }
];
