//1、typeof 用来检测数据类型的运算符
console.log(typeof 12);
var num = "zhufeng";
console.log(typeof num);
//-->使用typeof检测数据类型，首先返回的都是一个字符串，其次字符串中包含了对应的数据类型
//例如：""number"、"string""、"boolean""、"undefined"、"function"、"object"
console.log(typeof typeof typeof function() {}); //-->"string"
//局限性
//--》typeof null -->"null"
//-->不能具体的细分是数组还是正则，还是对象中其他的值，因为使用typeof检测数据类型，对于对象数据类型中的左右的值，最后返回的结果都是"object"
function fn(num1, num2) {
  if (typeof num2 === "undefined") {
    num2 = 0;
  }
}

function fn(callback) {
  typeof callback === "function" ? callback() : null;
}
fn();
