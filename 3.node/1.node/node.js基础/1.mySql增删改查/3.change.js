const mysql = require("mysql");
const connection = mysql.createConnection({
  localhost: "localhost",
  user: "root",
  password: "root",
  port: "3306",
  database: "test"
});
connection.connect();

let userChangeSql =
  "UPDATA userinfo SET UserName = ?,UserPass = ? WHERE Id = ?";
let userChangeSql_Params = ["我的名字", "12344", 21];
connection.query(userChangeSql, userChangeSql_Params, function(err, result) {
  console.log("改" + JSON.stringify(result));
});

connection.end();
