## node 和 mysql 实现增删改查

### 1.安装 mysql npm 包

```
npm install mysql -S
```

### 2.新建 add.js 实现数据库增加功能

* [完整代码](./1.add.js)

```
let userAddSql = "INSERT INTO userinfo(Id,UserName,UserPass) VALUES(0,?,?)";
let userAddSql_Params = ["我的名字", "123"];
connection.query(userAddSql, userAddSql_Params, function(err, result) {
  console.log("增" + JSON.stringify(result));
});
```

### 3.新建 delete.js 实现数据库的删除功能

* [完整代码](./1.delete.js)

```
let userDeleteSql = "DELETE FROM userinfo";
connection.query(userDeleteSql, function(err, result) {
  console.log("删" + JSON.stringify(result));
});
```

### 4.新建 change.js 实现数据库的更新功能

* [完整代码](./1.change.js)

```
let userChangeSql =
  "UPDATA userinfo SET UserName = ?,UserPass = ? WHERE Id = ?";
let userChangeSql_Params = ["我的名字", "12344", 21];
connection.query(userChangeSql, userChangeSql_Params, function(err, result) {
  console.log("改" + JSON.stringify(result));
});
```

### 4.新建 search.js 实现数据库的查找功能

* [完整代码](./1.search.js)

```
let userSearchSql = "SELECT * FROM userinfo";
connection.query(userSearchSql, function(err, result) {
  console.log("查" + JSON.stringify(result));
});
```

### 5.实现一个完整的项目
