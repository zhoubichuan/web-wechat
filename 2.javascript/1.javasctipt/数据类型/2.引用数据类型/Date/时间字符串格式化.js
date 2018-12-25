var str = "2015-6-10 14:53:00";
//2015年06月10日 14时53分00秒
var reg = /^(\d{4})[-/](\d{1,2})[-/](\d{1,2}) +(\d{1,2}):(\d{1,2}):(\d{1,2})$/g;
var ary = [];
str.replace(reg, function() {
  ary = [].slice.call(arguments).slice(1, 7);
});
console.log(ary);
var resStr = "{0}年{1}月{2}日 {3}时{4}分{5}秒";
reg = /{(\d+)}/g;
resStr = resStr.replace(reg, function() {
  var num = arguments[1],
    val = ary[num];
  return val.length == 1 ? "0" + val : val;
});
console.log(resStr);
