//我们在js中主要研究的都是函数中的this
//js中的this代表的是当前行为执行的主体，js中的context代表的是当前行为执行的环境（区域）
//this是谁和函数在哪定义的和在哪执行的都没有任何关系，如何区分this呢
//1、函数执行，首先看函数名前面是否有"."，有的话，"."前面是谁this就是谁，没有的话this就是windwo
function fn() {
  console.log(this);
}
var obj = { fn: fn };
f(); //this -->window
obj.fn(); //this-->obj

function sum() {
  //this-->windwo
  fn();
}
sum(); //this-->window

var oo = {
  sum: function() {
    //this-->oo
    fn();
  }
};
oo.sum(); //this-->window

//2、自执行函数中的this永远都是window
//3、给元素的某一个事件绑定方法，当事件触发的时候，执行对应的方法，方法中的this是当前的元素
document.getElementById("div").onclick = fn; //fn-->this -->div
document.getElementById("div").onclick = function() {
  //this-->div
  fn(); //this-->window
};

/* 练习题 */
var num = 20
var obj = {
    num:30,
    fn:(function(num){
        this.num *=3;
        num += 45
        var num = 45
        return function(){
            this.num *=4
            num +=20
            console.log(num)
        }
    })(num)//把全局变量num的值20赋值给自执行函数的形参，而不是obj的30，如果想是obj下的30,我们要写成obj.num
} 
var fn = obj.fn

fn()//-->65
obj.fn()//-->85
console.log(window.num,obj.num)//-->240,120
//window
!function(){}()