const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: "3306",
  database: "test"
});
connection.connect();

let userDeleteSql = "DELETE FROM userinfo";
connection.query(userDeleteSql, function(err, result) {
  console.log("删" + JSON.stringify(result));
});
connection.end();
