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

// let users = [];
// for (let i = 1; i < 10; i++) {
//   users.push({ id: i,age:i, name: `zbc${i}` });
// }
// (async function() {
//   let doc = await User.create(users);
//   console.log(doc);
// })();
// User.find({}, { name: 0 }, (err, docs) => {
//   console.log(err);
//   console.log(docs);
// });

// User.findOne({}, { name: 0 }, (err, docs) => {
//   console.log(err);
//   console.log(docs);
// });

// User.findById("5c287a90828986304ca1bf79", (err, docs) => {
//   console.log(err);
//   console.log(docs);
// });

// User.find({ age: { $get: 3, $lt: 6 } }, (err, docs) => {
//   console.log(err);
//   console.log(docs);
// });

// //判断某个字段是否存在
// User.find({ age: { $exist: true } }, (err, docs) => {
//   console.log(err);
//   console.log(docs);
// });

// let pageNum = 2;
// let pageSize = 3;
// User.find({})
//   .sort({ age: 1 })
//   .skip((pageNum - 1) * pageSize)
//   .limit(pageSize)
//   .exec((err, docs) => {
//     console.log(docs);
//   });

//总条数
User.count((err, total) => {
  console.log(total);
});
