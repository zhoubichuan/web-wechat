const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: "3306",
  database: "test"
});

connection.connect();
let userSearchSql = "SELECT * FROM userinfo";
connection.query(userSearchSql, function(err, result) {
  console.log("查" + JSON.stringify(result));
});

connection.end();
