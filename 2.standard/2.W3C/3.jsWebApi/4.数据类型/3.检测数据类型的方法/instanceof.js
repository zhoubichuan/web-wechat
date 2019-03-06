//2、instanceof 检测某一个实列是否属于某个类
var obj = [12, 4, 5];
console.log(obj instanceof Array);
console.log(obj instanceof RegExp);
//-->局限性
//1、不能用来检测和处理字面量方式创建出来的基本数据类型值
//-->对于基本数据类型来说，字面量方式创建出来的结果和实列方式创建出来的结果是有一定区别的，从严格意义上讲，只有实列创建出来的结果才是标准的对象数据类型，也是标准的Number这个类的一个实列：对于字面量方式创建出来的结果是基本的数据类型，不是严禁的实列，但是由于js的松散特点，导致了可以使用Number.prototype上提供的方法
console.log(1 instanceof Number);
console.log(new Number(1) instanceof Number);
console.log("" instanceof String);
//2、instanceof的特性：只要在当前实列的原型链上，我们用其检测出来的都有
var ary = [];
console.log(ary instanceof Array);
console.log(ary instanceof Object);
function fn() {}
console.log();

/* 思考题 ：写一个类，作用是创建一个类数组(索引和length)，但是可以使用数组的方法（在它的原型链上就应该有Array.prototype）*/
