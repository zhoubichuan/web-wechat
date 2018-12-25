let express = require("express");
let app = express();

app.use("person", person);
app.get("/", function() {
    res.send('')
});
app.listen(3000);
