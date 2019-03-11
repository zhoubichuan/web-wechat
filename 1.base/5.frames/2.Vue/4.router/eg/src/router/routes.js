import Home from "@component/Home";

export default [
  {
    path: "/",
    redirect: { path: "/home" }
  },
  {
    path: "/home",
    name: "home",
    component: () => "@component/Name",
    beforeEnter(to, from, next) {
      console.log("home");
    }
  }
];
