let express = require("express");

let app = express();

app.get("/user", (req, res) => {
  res.json({ name: "这是我" });
});
app.listen(3000);
