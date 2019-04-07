//数据源
let obj = {
  name: "jw",
  age: {
    age: 19
  }
};
//数据劫持 Object.defineProperty

function obsever(obj) {
  if (typeof obj == "object") {
    for (let key in obj) {
      defineReactive(obj, key, obj[key]);
    }
  }
}
function defineReactive(obj, key, value) {
  obsever(value);
  Object.defineProperty(obj, key, {
    get() {
      return value;
    },
    set(val) {
      obsever(value);
      console.log("数据更新了");
      value = val;
    }
  });
}
obsever(obj);
// obj.age.age='zf'

// obj.age={
//     name:1
// }
// obj.age.name=3

// obj.age=[12,3,4,5]
// obj.age.push(6)
let arr = ["push", "slice", "shifit", "unshift"];
arr.forEach(method => {
  let oldPush = Array.prototype[method];
  Array.prototype[method] = function(value) {
    console.log("数据更新了");
    oldPush.call(this, value);
  };
});
// obj.age=[12,3,4,5]
// obj.age.push(5)
// obj.age.length--

console.log(obj.name);
//如果屬性不存在， 默認后增加的內容 并不會刷新視圖
//數組調用push是無效的 Object.defineProperty 不支持