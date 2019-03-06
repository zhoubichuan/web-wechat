//3、constructor 构造函数
//作用和instanceof非常的相似

var obj = [];
console.log(obj.constructor === Array);
console.log(obj.constructor === RegExp);
//constructor可以处理基本数据类型
console.log(new Number(1).constructor === Number);

//constructor检测Object和instance不一样，一般情况下是检测不了的
var reg = /^$/;
console.log(reg.constructor === RegExp);
console.log(reg.constructor === Object);

//局限性：我们可以把类的原型进行重写，在重写的过程中很有可能出现吧之前的constructor给覆盖掉
function fn() {}
fn.prototype = new Array();
var f = new fn();
console.log(f.constructor);
//对于特殊的数据类型null和undefined，他们的所属类是Null和Undefined，但是浏览器吧这两个类保护起来了，不允许我们在外面访问使用
