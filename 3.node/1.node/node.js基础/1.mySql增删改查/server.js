const Koa = require("koa");
const app = new Koa();

app.use(async ctx => {
  ctx.body = "hello body";
});

app.listen(3000);

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test"
});
connection.connect();

let userAddSql = "INSERT INTO userinfo(Id,UserName,UserPass) VALUES(0,?,?)";
let userAddSql_Params = ["我的名字", "123"];
connection.query(userAddSql, userAddSql_Params, function(err, result) {
  console.log("增" + JSON.stringify(result));
});
let userDeleteSql = "DELETE FROM userinfo";
connection.query(userDeleteSql, function(err, result) {
  console.log("删" + JSON.stringify(result));
});
let userChangeSql =
  "UPDATA userinfo SET UserName = ?,UserPass = ? WHERE Id = ?";
let userChangeSql_Params = ["我的名字", "12344", 21];
connection.query(userChangeSql, userChangeSql_Params, function(err, result) {
  console.log("改" + JSON.stringify(result));
});
let userSearchSql = "SELECT * FROM userinfo";
connection.query(userSearchSql, function(err, result) {
  console.log("查" + JSON.stringify(result));
});
connection.end();
