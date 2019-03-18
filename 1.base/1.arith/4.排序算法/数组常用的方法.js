/* 学习数组中常用的方法，我们需要按照四个维度去探讨 */
/* 1）方法的作用
2）需要传那些参数
3）是否有返回值，返回值时什么
4）通过此方法是否对原来的数组产生了改变

*/
//1、关于数组的增加、修改、删除

//1>push：向数组的末尾增加新的内容
//->参数：想向末尾增加那些内容就传递谁，而且可以传递多个值，统一向末尾增加多项
//->返回:新增加后数组的长度
//->原来的数据已经发生了改变

var pushAry = [12, 23, 34];
var pushRes = pushAry.push(100);
console.log("push", pushAry, pushRes);

//扩展：不想使用push,也想向数组的末尾增加内容
ary[ary.length] = 10;

//2》pop：删除数组最后一项的内容
//->参数：没有
//->返回:被删除的那一项内容
//->原有的数组也发生了改变
var res = ary.pop();
console.log(res, ary);

//->扩展：不用pop想删除最后一项的内容
ary.length--;
ary.length -= 1;
ary.length = ary.length - 1;

//3>shift:删除数组中的第一项
var res = ary.shift();
console.log(res, ary);

//4>unshift：向数组的开头增加一项
var res = ary.unshift(100);
console.log(res, ary);

//5>splice:它既能实现删除，也能实现增加，还能实现修改
var ary = [1, 3, 6, 8];
//删除
// ary.splice(n, m);从索引n开始，删除m个元素，把删除的内容以一个新的数组的方式返回，原来的数组改变
var res = ary.splice(1, 3);
console.log(res, ary);
//ary,splice(n)从索引n开始，删除到数组的末尾
//ary.splice(0)把原来的数组中的每一项都删除，把之前的删除的每一项的值以一个新的数组返回（把之前的数组克隆了一份，并且清空了原来的数组）
//ary.splice()返回空数组
//ary.splice(ary.length-1,0)

//修改
//splice(n,m,x)从索引n开始，删除m个，用x替代删除的部分
var res = ary.splice(2, 4, 1000);

//增加
//splice(n,0,x)从索引n开始，一个都不删除，把x增加到n的前面，原来的数组改变
//splice(ary.length,0,x)

//2.关于数组的截取和拼接
//1>slice：实现数组的截取，在原来的数组中截取某一部分
//->slice（n,m)从索引n开始，找到索引为m出(不包含m)，将找到的部分已一个新的数组返回，原来的数组不变
//->slice(n)从索引n开始一直找到数组的末尾
//slice(0),克隆一份一模一样的数组原来的数组不变
//slice(-n)
//slice(n,-m)
//slice(n,m)n大于m
//slice(-n,-m)
//slice(n,m)n大于arr.length
//slice(n,m)m大于arr.length

//2>concat:把两个数组拼接到一起，原来的数组不变
//->ary1.concat(ary2)把ary2和ary1拼接ary2在后面
//->ary1.concat()把ary1克隆一份一模一样的数组

newArry = ary.concat(ary2);

//3、把数组转化为字符串
//1)toString：把数组转换为字符串
//->toString()加参数没有作用
var ary = [1, 3, 5];
var res = ary.toString();
console.log(ary, res);

//2>join:按照每一个分隔符，把数组中的每一个项拼接成一个字符串，原来的数组不变
var res = ary.join("+");
console.log(res); //“1+3+5”
//-->扩展：eval->js中把字符串变为js表达式执行的一个方法

eval(ary.join("+"));

//4、数组额排列和排序
//1->reverse:把数组倒过来排列原数组也改变
var ary = [2, 4, 523, 6, 7, 766, 23, 34];
var res = ary.reverse();
console.log(res, ary);

//2:sort给数组进行排序，原有的数组会改变
//->ary.sort()这样的话只能处理10以内的数组，因为他是安装unicode编码的值排列的
var res = ary.sort(function(a, b) {
  return a - b;
});
//这样写由小到大排序由大到小b-a

//5、只有在标准浏览器中才兼容的方法，在ie678中不兼容的方法
//1:indexOf/lastIndexOf(字符串中也有这两个方法，但是字符串的这两个方法兼容所有的浏览器，耳数组中的这两个方法是不兼容的)
//->当前Neri在数组中第一次/最后一次出现位置的索引，如果数组中没有这一项，返回的结果-1，如果有这一项，索引是几返回几原来是的数组不变

if (ary.indexOf("我") > -1) {
  //c存在
} else {
  //不存在
}

//2:forEach / map都是用来变量数组中的每一项的
//forEach：数组中有几项函数就执行几次，原来的数组不变

ary.forEach(function(item, index) {
  console.log(item, index);
});

//map和forEach的语法是一样的，但是比forEach多加了一个把原来数组替换的功能
//->原来的数组不变，返回的新数组会变
var newArry = ary.map(function(item) {
  return item * 10;
});

//更多的数组方法:console.dir(Array.prototype)
//是不是兼容所有的浏览器
