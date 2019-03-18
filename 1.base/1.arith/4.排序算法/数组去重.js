//数组去重的思想 http://web.jobbole.com/83425/

var ary = [1, 2, 3, 4, 5, 3, 7, 55, 66, 33, 55, 22, 11, 33, 55, 1, 4];

//-->利用对象的键值对方法
//1）我们把数组中的每一项的值当做一个对象的属性名和属性值存储起来

var obj = {};
for (var i = 0; i < ary.length; i++) {
  var cur = ary[i];
  if (obj[cur] == cur) {
    //ary.splice(i,1)
    ary[i] = ary[ary.length - 1];
    ary.length--;
    i--;
    continue;
  }
  obj[cur] = cur;
}
console.log(ary);
