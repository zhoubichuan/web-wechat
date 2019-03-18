//正则的捕获:正则的exec方法、字符串的match方法、字符串的replace方法

//replace：将原有的字符替换成我们的新的字符
var str = "zhufengpeixun~zhufengjiaoyu~";

var str = str.replace(/zhufeng/g, "珠峰");
console.log(str);
//原理：先按照正则制定的规则，到我们的字符串中把正则匹配的内容捕获到，然后在每一次捕获到之后，都把捕获的内容替换成新的内容
//1、我们正则表达式捕获到几次，对应后面的function就要执行几次
//2、每一次执行function 的时候，我们都可以获取我们捕获的内容-->和我们单独执行一次exec捕获的内容一致
//argument[0] -->exec捕获数组的第一项 -->大正则捕获的内容
//argument[0] -->exec捕获数组的index -->开始捕获的索引
//argument[0] -->exec捕获数组input -->捕获的原始字符串
//不仅如此，我们小分组捕获的内容，在这里同样也可以获取到
//3、我们在function中，通过return来返回我们要替换额内容 -->return是啥就把大正则捕获的内容进行替换
//不写return ,默认是用undefined来进行替换的
//如果不写实现替换的话，捕获内容是啥，我们就返回啥 return argumnets[0]
str = str.replace(/(zhu)(feng)/, function() {});
str.replace(/(zhu)(feng)/, function() {});

/* 实战应用1、将小写的数字替换成大写的中文数字 */
var str = "全日制第七期学费:9800";
var ary = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
str = str.replace(/\d/g, function() {
  return ary[arguments[0]];
});
console.log(str);

/* 实战应用2、获取一个字符串中出现次数最多的字符，并且获取出现的次数 */
var str = "zhufengpeixunwolaixuexijs";
var obj = {};
str.replace(/[a-z]/gi, function() {
  var val = arguments[0];
  obj[val] >= 1 ? (obj[val] += 1) : (obj[val] = 1);
});
console.log(obj);

//2、获取最多出现的次数
var maxNum = 0;
for (var key in obj) {
  obj[key] > maxNum && (maxNum = obj[key]);
}
console.log(maxNum);
//3、获取最多出现次数的字符
var array = [];
for (var key in obj) {
  obj[key] === maxNum && array.push(key);
}
console.log(array);

/* 实战引用3、模板引擎实现的初步原理 */
// var str = "my name is {0},my age is {1},i come from {2},i love {3}~";
// var ary = ["催军力", 18, "china", "javaScript"];
// str = str.replace(/{(\d+)}/g, function() {
//   return ary[arguments[1]];
// });
// console.log(str);

var str = "my name is {0},my age is {1},i come from {2},i love {3}~";
var ary = ["催军力", "18", "china", "javaScript"];
str = str.replace(/{(\d+)}/g, function() {
  return ary[RegExp.$1];
});
console.log(str);

/* 思考题： */
//1、"2015-9-22 13:10:0" -->"2015年09月22日 13时10分00秒"
var ary = [];
var str = "2015-9-22 13:10:0";
str.replace(/\d+/g, function() {
  ary.push(arguments[0]);
});
console.log(ary);
var moduleStr = "{0}年{1}月{2}日 {3}时{4}分{5}秒";
moduleStr = moduleStr.replace(/{(\d+)}/g, function() {
  if (+ary[arguments[1]] < 10) {
    return "0" + ary[arguments[1]];
  } else {
    return ary[arguments[1]];
  }
});
console.log(moduleStr);

//2、把一个字符串中所有的单词的首字母大写 "Zhu Feng Pei Xun";
var str = "zhu feng pei xun";
str = " " + str;
str = str
  .replace(/\s[a-z]/g, function() {
    return arguments[0].toLocaleUpperCase();
  })
  .replace(" ", "");
console.log(str);

/* 需求：queryURLParameter */
//var str = "http://kbs.sports.qq.com/kbsweb/game.html?mid=100000&cid-1234343&app=1.0";
/* 
-->把ur中的参数都获取到，并且保存成如下格式
var obj ={
    mid:"100000",
    cid:"1467086",
    app:"1.0"
}
*/
var str =
  "http://kbs.sports.qq.com/kbsweb/game.html?mid=100000&cid=1234343&app=1.0";
var reg = /([^?=&]+)=([^?=&]+)/g;
var obj = {};
str.replace(reg, function() {
  obj[arguments[1]] = arguments[2];
});
console.log(obj);
