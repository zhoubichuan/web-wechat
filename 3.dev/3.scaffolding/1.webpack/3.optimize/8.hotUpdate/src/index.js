import str from "./source";
console.log(str);
if (module.hot) {
  module.hot.accept("./source", () => {
    let a = require("./source");
    console.log(a);
  });
}
