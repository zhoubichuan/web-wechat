//-->柯里化函数思想：一个js预处理的思想-->利用函数执行可以形成一个不销毁的私有作用域的原理，把需要预先处理的内容都存储在这个不销毁的作用域中，并且返回一个小函数，以后我们执行的都是小函数，在小函数宏把之前预先存储的值进行相关的操作

function _bind(callback, context) {
  context = contenx || window;
  return function() {
    callback.call(context);
  };
}
var obj = { name: "珠峰培训" };
function fn() {
  console.log(this);
}
setTimeout(_bind(fn, obj), 0);
setTimeout(fn.bind(obj), 0);

//给元素的某一个行为绑定方法，当行为触发的时候，执行的对应的方法，此时方法中的this是当前元素本身，而且了浏览器还会给当前的方法默认的传递一个参数值，MouseEvent(鼠标事件对象)
document.body.onclick=function(){
    console.log(this)
}
document.body.onclick = function (num1,num2) {
    console.log(this,num1,num2)//body,MouseEvent，undefined
}
document.body.onclick = function () {
    console.log(this)
}.bind(obj,100,200)
//-->除了预先处理了this和需要手动传递的参数值以外，把浏览器默认给传递的鼠标事件对象也进行了预先处理了