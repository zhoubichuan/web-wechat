let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.end("welcome to index");
});

app.get("/about", (req, res) => {
  res.end("welcome to about");
});

app.listen("3000", () => {
  console.log("你已经成功连接3000端口");
});
