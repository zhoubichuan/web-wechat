//match字符串y用来匹配正则的一个方法
var reg = /\d+?/g;
var str = "zhufneg2015xuexi2018";
// var ary = str._match(reg);
// console.log(ary);
//match一次性把符合大正则都存放在一个数组中，如果也需要捕获小分组中的内容，match是不活不到的
String.prototype._match = function(reg) {
  var ary = [];
  var res = reg.exec(this);
  while (res) {
    ary.push(res[0]);
    res = reg.exec(this);
  }
  return ary;
};
var ary = str._match(reg);
console.log(ary);

//分组捕获
//在正则捕获的时候，我们添加分组，不仅仅可以把大正则匹配的内容捕获，而且还可以把小分组代表的子正则匹配的内容一起捕获出来
//(?:xxx)分组只匹配不捕获
var str = "my name is {0},my age is {1},i come from {2},i love {3}~~";
var ary = ["易文", 28, "湖南", "javascript"];
// var ss=str.replace(/{(\d)}/g, function() {
//   return ary[arguments[1]]
// });
var ss = str.replace(/{(\d)}/g, function(l, s, i, t) {
  return ary[s];
});
console.log(ss);
