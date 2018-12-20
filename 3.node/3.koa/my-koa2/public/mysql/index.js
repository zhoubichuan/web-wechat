const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test1"
});
connection.connect();
function sql_add(s_name, s_english, s_math) {
  console.log("sql-add", s_name, s_english, s_math);
  let userAddSql = "INSERT INTO student(s_name,s_english,s_math) VALUES(?,?,?)";
  let userAddSql_params = [s_name, s_english, s_math];
  return new Promise((resolve, reject) => {
    connection.query(userAddSql, userAddSql_params, function(err, result) {
      if (err) {
        console.log("添加失败", err);
      } else {
        console.log("增加", JSON.stringify(result));
        resolve(JSON.stringify(result));
      }
    });
  });
}
function sql_delete(id) {
  let userDeleteSql = `DELETE FROM student WHERE id=${id}`;
  return new Promise((resolve, reject) => {
    connection.query(userDeleteSql, function(err, result) {
      console.log("删除", JSON.stringify(result));
      resolve(JSON.stringify(result));
    });
  });
}
function sql_update(id, s_name, s_english, s_math) {
  console.log(typeof s_name);
  let userChangeSql = `UPDATE student SET s_name="${s_name}",s_english=${s_english},s_math=${s_math} WHERE id=${id}`;
  return new Promise((resolve, reject) => {
    connection.query(userChangeSql, function(err, result) {
      if (err) {
        console.log("更新失败", err);
      } else {
        console.log("修改", JSON.stringify(result));
        resolve(JSON.stringify(result));
      }
    });
  });
}
function sql_query() {
  let userSearchSql = "SELECT * FROM student";
  return new Promise((resolve, reject) => {
    connection.query(userSearchSql, function(err, result) {
      if (err) {
        console.log("查找失败", err);
      } else {
        console.log("查找", JSON.stringify(result));
        resolve(JSON.stringify(result));
      }
    });
  });
}
module.exports = {
  sql_add,
  sql_delete,
  sql_update,
  sql_query
};
