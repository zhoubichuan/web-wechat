//子类继承父类
function _inherits(subClass, superClass) {
  //继承公有属性
  subClass.prototype = Object.create(superClass.prototype, {
    constructor: { value: subClass }
  });
  //继承静态方法
  Object.setPrototypeOf(subClass, superClass);
}
let Child = (function(Parent) {
  //先实现继承父类的公有属性和静态方法
  _inherits(C, Parent);
  function C() {
    _classCallCheck(this, C);
    let obj = Parent.call(this);
    if (typeof obj === "object") {
      return obj.age = 9;
    } else {
      return this.age = 9;//解决了父类返回了一个引用类型的问题
    }
  }
  return C;
})(Parent);
let child=new Child()
console.log(child.b())
