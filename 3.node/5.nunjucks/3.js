let express = require("express");
const path = require("path");
const nunjucks = require("nunjucks");
let app = express();
nunjucks.configure(path.join(__dirname, "views"), {
  autoescape: true,
  express: app
});

app.get("/", (req, res) => {
  res.render("index.html", { name: "zpxs" });
});
app.listen("3000");
