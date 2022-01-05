function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}
const microApps = [
  {
    name: "sub1",
    entry: "//localhost:5501/#/",
    activeRule: genActiveRule("/sub1"),
    container: "#sub1",
  },
  {
    name: "sub2",
    entry: "//localhost:5052",
    activeRule: genActiveRule("/sub2"),
    container: "#sub2",
  },
];
const apps = microApps.map((item) => {
  return {
    ...item,
    // props: {
    //   routerBase: item.activeRule,
    // },
  };
});
export default apps
