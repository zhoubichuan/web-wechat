let express = require("express");
let app = express();
app.use(express.static(__dirname));
app.get("/clock", (req, res) => {
  setInterval(() => {
    let date = new Date().toLocaleString();
    res.write(`
        <script type="text/javascript">
        parent.document.getElementById('clock').innerHTML="${date}"
        </script>
        `);
  }, 1000);
});
app.listen(3000, () => {
  console.log(3000);
});
