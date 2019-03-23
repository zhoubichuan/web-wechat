import "./style.css";
import "./index.less";
let fn = () => {
  console.log("log");
};
fn();

@log
class A {
  a = 1;
}
let a = new A();
console.log(a.a);

function log(target) {
  console.log(target);
}
