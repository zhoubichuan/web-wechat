//4、Object.prototype.toString.call() 最准确最常用的方式
//首先获取Object原型上的toString方法，让方法执行，并且改变方法中的this关键字的指向
//Object.prototype.toString它的作用是返回当前方法的执行主体（方法中this）所属的类的详细信息
var obj = { name: "珠峰" };
console.log(obj.toString()); //-->toString中的this是谁obj，返回的是obj中所属类的信息""[object Object]"第一个object代表当前实列是对象数据类型的（这个是固定写死的）第二个Object代表的是obj所属的类是Object
//Math.toString() -->toString中的this是谁Math,那么返回的是Math所属类的信息-->"[object Math]"
var ary = [];
console.log(Object.prototype.toString.call(ary));
console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call(""));
console.log(Object.prototype.toString.call(1));
console.log(Object.prototype.toString.call(true));
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(undefined));
console.log(Object.prototype.toString.call(function fn() {}));
console.log(Object.prototype.toString.call(new RegExp()));

var reg = /^\[object Array\]$/;
console.log(reg.test(Object.prototype.toString.call(ary)));
//toString的理解
//-->乍一看应该是转换为字符串，但是某些toString方法不仅仅是转换为字符串
//-->对于Number、String、Boolean、Array、RegExp、Date、Function原型上的toString方法都是把当前的数据类型转换为字符串的类型(它们的作用仅仅是用来转换为字符串的)
console.log((1).toString()); //Number.prototype.toString-->转换为字符串
console.log((1).__proto__.__proto__.toString()); //-->Object.prototype.toString -->["Object","Object"]
console.log((128).toString(2 / 8 / 10)); //-->把数字转换为2/8/10进制
