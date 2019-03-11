// -->1、递归：当前函数自己调用自己执行
//-->实现1-100之间，把所有不能被三整除的数相加

function sum(num) {
  if (num === 0) {
    return 0;
  }
  if (num % 3 === 0) {
    return sum(num - 1);
  }
  return num + sum(num - 1);
}
var total = sum(100);
console.log(total);

//-->从1到10把所有能被2整除的进行相乘

function cheng(num) {
  if (num === 1) {
    return 1;
  }
  if (num % 2 !== 0) {
    return cheng(num - 1);
  }
  return num * cheng(num - 1);
}
var total2 = cheng(10);
console.log(total2);

//
var count = 0;
var timer = null;
function move() {
  window.setTimeout(timer);
  count++;
  console.log(count);
  if (count === 10) {
    return;
  }
  timer = window.setTimeout(arguments.callee, 1000);
  //arguments.callee等价于move（）
}
