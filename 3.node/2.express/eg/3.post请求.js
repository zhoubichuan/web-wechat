let bodyParser = require("body-parser");
let express = require("express");
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.post("/login", (req, res) => {
  console.log(req.body.username);
});
