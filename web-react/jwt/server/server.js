let express = require("express");
let bodyParser = require("body-parser");
let jwt = require("jwt");
let app = express();
const JWT_SECRET = "zbc";
let moment = require("moment");
app.use(bodyParser.json());
let users = [];
app.post("/singup", function(req, res) {
  let user = req.body;
  users.push(user);
  res.json(user);
});
app.post("/singin", function(req, res) {
  let user = req.body;
  let oldUser = users.find(
    item => user.username == item.username && user.password == item.password
  );
  if (oldUser) {
    let exp = moment()
      .add(7, "days")
      .valueOf();
    let token = jwt.encode(
      {
        user: oldUser,
        exp
      },
      JWT_SECRET
    );
    res.json({ code: 0, data: token });
  } else {
    res.json({ code: 1, error: "登录失败" });
  }
});
app.get("/user", function(req, res) {
  let authorization = req.headers["authorization"];
  let token = authorization.split(" ")[1];
  let { user, exp } = jwt.decode(token, JWT_SECRET);
});
app.listen(8080, () => {
  console.log(8080);
});
