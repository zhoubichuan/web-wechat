//var 不支持封闭作用域,会声明到全局作用域上
//1.函数作用域名
//2.全局作用域
// (function() {
//   for (var i = 0; i < 3; i++) {
//     console.log(i);
//   }
// })();
// console.log(i);
// console.log(window.i);

// for (var i = 0; i < 3; i++) {
//   (function(i){
//     setTimeout(function() {
//         console.log(i);
//       }, 1000);
//   })(i)
// }

//let支持块级作用域声明的变量只会声明在当前的作用域内
for (let i = 0; i < 3; i++) {
  //let i=0
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
console.log(i)
//let 可以解决作用域污染的问题 和局部作用域的问题