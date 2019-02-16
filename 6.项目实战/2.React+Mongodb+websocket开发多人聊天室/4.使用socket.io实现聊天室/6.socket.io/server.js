let express = require("express");
let app=express();
let path = require("path");
app.use(express.static(__dirname));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});
let server = require("http").createServer(app);
server.listen(80);

//http://localhost:80
//ws://localhost:808
let io = require("socket.io")(server);
io.on("connection", socket => {
  console.log("客户端已连接");
  socket.on("message", message => {
    console.log(message);
    socket.send("server" + message);
  });
});
