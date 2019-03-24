import "./style.css";
import "./index.less";

// import $ from "expose-loader?$!jquery";
import $ from "jquery";
//expose-loader 暴露 全局的loader 内联的loader
//pre 前面执行的loader normal 普通的loader 内联loader 后置
console.log($);
console.log(window.$);

let fn = () => {
  console.log("log");
};
fn();
@log
class MyClass {}

function log(target) {
  // 这个 target 在这里就是 MyClass 这个类
  target.prototype.logger = () => `${target.name} 被调用`;
}
const test = new MyClass();
