//exec正则用来捕获的一个方法
//在正则捕获的时候，我们加修饰符“g”，可以取消捕获时候的懒惰性，原理：正则有一个lastindex属性，它代表下一次正则捕获的开始索引，但是默认这个值永远是0，也就是不管执行几次exec都用从新从头开始捕获，所以获取的都是同一个结果，而加了修饰符'g'，每次exec执行完成之后，我们的lastindex属性值都等于当前捕获内容的后一个索引，下一次从这之后继续查找捕获，这样就可以一次次的执行，把想要的结果都捕获到了

var reg = /\d+?/g;
var str = "zhufeng2015huiwang2014";
// var ary = reg.exec(str);
// console.log(ary);
// console.log(reg.lastIndex);
// var ary = reg.exec(str);
// console.log(ary);
// console.log(reg.lastIndex);
var res = reg.exec(str),
  ary = [];
while (res) {
  ary.push(res[0]);
  res=reg.exec(str);
}
console.log(ary);
