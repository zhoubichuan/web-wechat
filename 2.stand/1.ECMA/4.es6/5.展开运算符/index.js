//1.剩余运算符
//2.展开运算符
function spread(x, ...args) {
  // sum.apply(null,args)
  sum(...args);
}
function sum(a, b, c, d) {
  console.log(a, b, c, d);
}
spread("x", 1, 2, 3, 4);

// let arr =[1,2,3,4,5].concat([6,7,8])
let arr = [...[1, 2, 3, 4, 5], ...[5, 6, 7]];
console.log(arr);

// Math.min(1,2,3,4)
Math.min(...[1, 2, 3, 4]);

//...是浅拷贝
let name = { name: "zpx" };
let age = { age: 9 };
let school = { ...name, ...age };
console.log(school);

//slice是浅拷贝 如果拷贝一层就是深拷贝
//...也是浅拷贝
let b = [1, 2, 3, 4];
let a = [b];
let c = a.slice(0);
b[0] = 100;
console.log(c);

//深拷贝的实现
let obj = { a: 1 };
console.log(JSON.parse(JSON.stringify(obj)));
//只针对JSON如果不是，就不显示 function 正则不认

//实现深拷贝 保留继承关系 可以实现各种类型的拷贝 实现递归拷贝
function deepClone(obj) {
  if (typeof obj !== "object") return obj;
  if (obj == null) return null;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  Object.prototype.toString.call(obj) === "[object Array]";
  let o = new obj.constructor();//保留类的继承关系
  for(let key in obj){
      o[key]=typeof obj[key]==='object'?deepClone(obj[key]):obj[key]
  }
}
let o = {a:{a:1}}
let newObj=deepClone(o);
o.a.a=2;
console.log(newObj)
