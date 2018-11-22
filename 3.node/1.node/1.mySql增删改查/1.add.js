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
connection.end();
