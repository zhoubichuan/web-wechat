let button = document.createElement("button");
button.innerHTML = "hello";
//vue懒加载 react懒加载都是这样的形式
button.addEventListener("click", function() {
  //es6 草案中的语法 jsonp实现动态加载文件
  import("./source.js").then(data => {
    console.log(data); //返回一个promise
  });
});
document.body.appendChild(button);
