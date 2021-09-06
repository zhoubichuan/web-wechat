import "./style.css";
import "./index.less";
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
