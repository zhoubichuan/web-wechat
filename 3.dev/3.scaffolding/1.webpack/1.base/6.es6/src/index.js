import "./style.css";
import "./index.less";
let fn = () => {
  console.log("log");
};
fn();

// @log
// class A {
//   a = 1;
// }
// let a = new A();
// console.log(a.a);

// function log(target) {
//   console.log(target, "23");
// }

@log
class MyClass {}

function log(target) {
  // 这个 target 在这里就是 MyClass 这个类
  target.prototype.logger = () => `${target.name} 被调用`;
}

const test = new MyClass();
