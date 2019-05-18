let express = require("express");

let app = express();

let bodyParser = require("body-parser");
let jwt = require("jsonwebtoken");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  if (req.method.toLowerCase() === "options") {
    return res.end();
  }
  next();
});

app.use(bodyParser.json());
let secret = "zfxpx";
app.post("/login", (req, res) => {
  let { username } = req.body;
  if (username === "admin") {
    res.json({
      code: 0,
      username: "admin",
      token: jwt.sign({ username: "admin" }, secret, {
        expiresIn: 20
      })
    });
  } else {
    res.json({
      code: 1,
      data: "用户不存在"
    });
  }
});
app.get("/validate", (req, res) => {
  let token = req.headers.authorization;
  jwt.verify(token, secret, (err, decode) => {
    if (err) {
      return res.json({
        code: 1,
        data: "token失效了"
      });
    } else {
      res.json({
        //需要把token的失效延长
        username: decode.username,
        code: 0,
        token: jwt.sign({ username: "admin" }, secret, {
          expiresIn: 20
        })
      });
    }
  });
});
app.listen(3000, function() {
  console.log("已经启动3000端口");
});
