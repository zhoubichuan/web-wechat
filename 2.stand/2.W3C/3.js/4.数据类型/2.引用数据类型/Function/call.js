var ary = [12, 23, 34];
//ary.slice -->ary这个实列通过原型链的查找机制找到Array.prototype上的slice方法
//ary.slice()-->让找到的slice方法执行，在执行slice方法的过程中，才把ary数组进行了截取

// Function.prototype.call = function(){

// }
var obj = { name: "123" };
function fn() {
  console.log(this);
}
fn(); //-->this-->window
fn.call(obj);

Function.prototype.myCall = function(context) {
  //1、将fn中的this变成obj
  eval(this.toString().replace("this", context));
  //2、让fn方法执行
};
fn.myCall(obj);

/* 思考题 */
function fn1() {
  console.log(1);
}
function fn2() {
  console.log(2);
}
fn1.call(fn2); //-->1

fn1.call.call(fn2); //fn1.call 首先通过原型链找到Function.prototype上的call方法，然后再让call方法通过原型找到Function原型上的call（因为call本身的值也是一个函数，所以可以找到Function.prototype）,在第二次找到call的时候让方法执行，方法中的this

fn.call()//-->window 严格模式下window
fn.call(null)//-->window 严格模式下null
fn.call(undefined)//-->window 严格模式下undefined

//apply和call方法的作用是一模一样的，都是用来改变方法的this关键字并且把方法执行：而且在严格模式下和非严格模式下对于第一个参数是null/underfined这种情况的规律也是一样的
fn.call(obj,100,200)
fn.apply(obj,[100,200])//-->call在给fn传递参数的时候，是一个个的传递值得，而apply不是一个个传，而是把要给fn传递的参数统一的放在一个数组中进行操作--》但是也相当于一个个的给fn形参赋值


//bind:这个方法在ie6-8下不兼容-->和call/apply类似都是用来改变this关键字的

//预处理：事先把fn的this改变为我们想要的结果，并且把对应的参数值也准备好，以后要用到了，直接的执行即可
fn.call(obj,1,2)//改变this和执行fn函数是一起都完成了
var tempFn = fn.bind(obj,1,2)//只是改变了fn中的this为obj，并且给fn传递了两个参数值1、2，但是此时并没有把fn这个函数执行,执行bind会有一个返回值，这个返回值tempFnv就是我们把fn的this改变后的那个结果
tempFn()

/* 获取数组的最大值 */
var ary =[12,32,11,3,43,5,12,23,43]
//1
var sum = ary.sort(function(a,b){
  return a-b
})
var min = sum[0]
var max = sum[sum.length-1
]
//2
var min = ary[0]
var max = ary[0]
for(var i =1;i<ary.length;i++){
  ary[i]<min ? min=ary[i]:null
  ary[i] > max ? max = ary[i] : null
}
//3
var min = eval("Math.min("+ary.toString()+")")
var max = eval("Math.max(" + ary.toString() + ")")

//4
var max = Math.max.apply(null,ary)
var min = Math.min.apply(null,ary)
//6-->括号表达式
function fn1(){
  console.log(1)
}
function fn2() {
  console.log(2)
}
;(fn1,fn2)()//只有fn2执行了 （x1,x2,x3）括号表达式，一个括号中出现多项内容，中间用“，”隔开，但是我们最后获取到的结果只有最后一项
(fn2,obj.fn)()//执行的是obj.fn，但是执行的时候里面的this变为了window而不是obj
(obj.fn)()//this还是obj

/* 获取平均数 */
function avgFn(){
  //将类数组转换为数组
  // var ary = []
  // for(var i = 0;i<arguments.length;i++){
  //   ary[ary.length] = arguments[i]
  // }
  // ary.sort(function(a,b){
  //   return a-b
  // })
  var ary = Array.prototype.slice.call(arguments)
  //或者ary = [].slice.apply(arguments)
}
ary.pop()
ary.unshift()
return (eval(ary.join("+"))/ary.length).toFixed(2)

//2种方法
function avgFn(){
  Array.prototype.sort.call(arguments,function(a,b){
    return a - b
  });
  [].shift.call(arguments);
  [].pop.call(arguments)
  return eval([].join.call(arguments,"+")/arguments.length).toFixed(2)
}