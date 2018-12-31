const mongoose = require("mongoose");

const conn = mongoose.createConnection("mongodb://localhost:27017/school", {
  useNewUrlParser: true
});

conn.on("error", err => {
  console.log("连接失败");
});

conn.on("open", () => {
  console.log("数据库连接成功");
});
//1.创建一个集合的Schema，Schama规定了集合的文档属性名和属性类型
let UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});
//2.基于Schema创建模型
let User = conn.model("User", UserSchema);
// User这个模型有多种方法，可以操作数据库
//传递的字段如果比Schema中定义的多的话，会被忽略掉
//传递的字段如果比Schama中定义的少的话，则有几个保存几个
User.create({ name: "zbc", age: 1, home: "beijing" }, (err, doc) => {
  //err错误对象， doc是保存后的文档对象
  console.log(doc);
});
//entity实体 实体代表某一个实例个体
//User也是一个构造函数，也可以创建实列，创建出来的实列我们称为Entity
let user = new User({
  name: "zbc",
  age: 4
});
user.save((err, doc) => {
  console.log(doc);
  doc.age = 44;
  doc.save();
});
let user2 = new User({
  name: 4,
  age: "w"
});
user2.save((err, doc) => {
  console.log(err);
});

