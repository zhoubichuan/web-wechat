let immutable = require("immutable");
//统计个数
let arr1 = immutable.fromJS([1, 2, 3]);
console.log(arr1.size);
//添加
let arr2 = arr1.push(4);
console.log(arr2);
//弹出最后一个
let arr3 = arr2.pop();
console.log(arr3);
//更新
let arr4 = arr3.update(2, x => x + 1);
console.log('updata',arr4);
//合并
let arr5 = arr4.concat([5, 6]);
console.log(arr5);
//映射
let arr6 = arr5.map(item => item >= 10);
console.log(arr6);
//过滤
let arr7 = arr6.filter(item => item >= 10);
console.log(arr7);
//获取
console.log(arr7.get(0));
//判断包含
console.log(arr7.includes(10));
//最后一个
console.log(arr7.last());
//计算总和
let val = arr7.reduce((val, item) => val + item, 0);
console.log(val);
//统计个数
console.log(arr7.count());
let ret = immutable
  .Range(1, 6)
  .skip(3)
  .map(n => n * 2)
  .filter(n => n % 2 == 0)
  .take(2)
  .reduce((a, b) => a + b, 0);
console.log(ret);
