const microApps = [
  {
    name: "vue",
    entry: process.env.VUE_APP_SUB_VUE,
    activeRule: "/vue-demo",
  },
  {
    name: "react",
    entry: process.env.VUE_APP_SUB_REACT,
    activeRule: "/react-demo",
  },
];
const apps = microApps.map((item) => {
  return {
    ...item,
    container: "#subapp-viewport",
    props: {
      routerBase: item.activeRule,
    },
  };
});
export default apps
