//箭头函数 es6 写起来简单 可以解决this问题
// 函数 高阶函数

//普通函数
fn();
function fn(a) {
  return a;
}

//预解释

//1.箭头函数没有function的关键字
//2.小括号和大括号之间有个箭头
//3.如果参数是一个 可以省略小括号
//4.如果没有return 可以不写大括号
// 5.如果直接返回的是对象类型，需要小括号包裹
let fn1=(a)=>{
    return a
}
let fn2=a =>a

function a(c){
    return function(d){
        return c+d
    }
}
let a =c=>d => c+d


function a(c){
    return function(d){
        return {a:c+d}
    }
}
let a =c=>d => ({a:c+d})

//可以解决this问题 看this指代的是谁 看前面的.是谁就是谁
//1.解决this问题 var that =this
//2.通过bind方式绑定this（call,apply）
//3.箭头函数 箭头函数没有this会向上找
let obj={
    a:function(){
        console.log(this)
    }
}
console.log(obj.a())

let fn=obj.a;
fn()

let obj={
    b:1,
    a:function(){
        let that=this;
        setTimeout(function(){
            console.log(that)
        },1000)
    }
}

let obj={
    b:1,
    a:function(){
        setTimeout(function(){
            console.log(this)
        }.bind(this),1000)
    }
}

let obj={
    b:1,
    a:function(){
        setTimeout(()=>{
            console.log(this)
        },1000)
    }
}

//对象不是作用域 let声明的也不会被声明到全局上
let obj={
    b:1,
    a:()=>{
        setTimeout(()=>{
            console.log(this)
        },1000)
    }
}

obj.a()

let a =1;
let obj={
    a:2,
    b:()=>{
        console.log(this.a)
    }
}
obj.b()

//箭头函数中没有arguments
//...叫剩余运算符，就是把多余的都放到数组中
let  fn=(x,...args)=>{
    console.log(arguments)
}
fn('x',1,2,3,4,5)

//函数可以赋予默认参数
let fn=(a=1,b=2)=>{
    console.log(a,b)
}
fn();