import "./style.css";
import "./index.less";

//webpack打包我们的图片
//1)在js中创建图片来引入
//file-loader 默认会在内部生成一张图片 到build目录下
//把生成的图片的名字返回回来
import logo from "./logo.png";
console.log(logo);
let image = new Image();
image.src = logo;
document.body.appendChild(image);
//2)在css中引入 background('url')
//3)<img src="" alt="" />
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
