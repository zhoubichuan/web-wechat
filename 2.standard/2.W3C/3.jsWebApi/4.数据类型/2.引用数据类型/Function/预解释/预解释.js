/* js中的数据类型 */
//1、基本数据类型：number、strting、boolean、null、undefined
//2、引用数据类型：object：{}、[]、/^$/、Date   function
var num = 12;
var obj = { name: "珠峰培训", age: 7 };
function fn() {
  console.log("......");
}
console.log(fn); //-->把整个函数的定义部分（函数本身）在控制台输出
console.log(fn()); //-->把当前函数执行的返回结果（return后面写的是啥，返回值就是啥），如果没有return,默认返回值就是undefined

//1、当浏览器加载HTML页面的时候，首先会提供一个供全局JS代码执行的环境 -->全局作用域（global/window）

//2、预解释（变量提升）
// 在当前的作用域中，js代码执行之前，浏览器首先会默认的把所有带var 和function的进行提前的声明或者定义
//1)理解声明和定义
//var num = 12
//声明（declare）：var num -->告诉浏览器在全局作用域中有一个num的变量了-->如果一个变量只是声明但是没有赋值，undefined
//定义（defined）：num = 12 -->给我们的变量进行赋值

//2）对于带var 和 function 关键字的在预解释的时候操作还是不一样的
//var -->在预解释的时候只是提前声明
//function -->在预解释的时候提前的声明+定义都完成了

//3)预解释只发生在当前作用域下，例如：开始只对window下的进行预解释，只有函数执行的时候才会对函数中的进行预解释
var num = 12;
var obj = { name: "珠峰培训", age: 7 };
function fn(num1, num2) {
  var total = num1 + num2;
  console.log(total);
}
console.log(fn);
console.log(fn());

//3、js中内存的分类
//栈内存：用来提供一个供js代码执行的环境 -->作用域（全局作用域/私有的作用域）
//堆内存：用来存储引用数据类型的值 -->对象存储的是属性名和属性值，函数存储的是代码字符串
console.log(num); //undefined
var num = 12;
var obj = { name: "珠峰培训", age: 7 };
fn(100, 200); //可以执行，因为声明和定义都完成了
function fn(num1, num2) {
  var total = num1 + num2;
  console.log(total);
}
console.log(fn);
console.log(fn());

/* 预解释是一种毫无节操的机制 */
//in：""num" in window 判断num是否为window这个对象的是一个属性，是的话返回true
//1、预解释的时候不管你的条件是否成立，都要把带var 的进行提前声明
// window的预解释：var num -->window.num
if(!("num" in windwo)){
    var num = 12
}
console.log(num)//undefined

//2、预解释的时候只预解释“=”左边的，右边的是值，不参与预解释
fn()//-->ok
function fn(){
    console.log("ok")
}
fn()//ok

//匿名函数之函数表达式：把函数定义的部分当做一个值赋值给我们的变量/元素的某一个事件
fn()//-->fn is not a function
var fn = function(){
    console.log("ok")
}


// 3、执行函数定义的那个function在全局作用域下不进行预解释，当代码执行到这个位置的时候定义和执行一起完成了
// 自执行函数：定义和执行一起完成了
(function(num){})(100)
~function (num) { }(100)
+(function(num) {})(100);
-(function(num) {})(100);
!(function(num) {})(100);

//4、函数体中return下面的代码虽然不再执行，但是需要进行预解释;return后面跟着的都是我们返回的值，所以不进行预解释
function fn(){
    // 预解释:var num
    console.log(num)//-->undefined
    return function(){
        
    }
    var num = 100
}
fn()

// 5、在预解释的时候，如果名字已经声明过了，不需要重写再声明，但是需要重写的赋值
//在js中如果变量的名字和函数的名字重复了，也算冲突
//预解释：var fn；window。fn；fn=xxxfff000；window.fn = xxxfff000

var fn = 13
function fn(){
    console.log("ok")
}

//window预解释
//声明+定义 fn = xxxfff111
//声明 var fn；（不需要重新声明）
//声明（不重复进行）+定义 fn = xxxfff222
fn()//-->2
function fn(){
    console.log(1)
}
fn()//-->2
var fn = 10//fn = 10
fn()//10() -->fn is not a function
function fn(){
    console.log(2)
}
fn()

