let net = require("net");
const crypto = require("crypto");
const CODE = "";
//创建了一个tcp服务器，参数是一个socket对象
let server = net.createServer(socket => {
  //once表示值监听一次就销毁了
  socket.once("data", data => {
    data = data.toString();
    if (data.match(/Upgrade:websocket/)) {
      let rows = data.split("\r\n");
      rows = rows.slice(1, -2);
    }
    const headers = {};
    rows.forEach(row => {
      let [key, val] = row.split(":");
      headers[key] = val;
    });
    if(headers[`Sec-WebSocket-Version`]==13){
        let SecWebSocketKey=headers['Sec-WebSocket-key']
        let SecWebSocketAccept=crypto.createHash('sha').update(SocWebSocketKey+CODE).digest(
            
        )
    }
    console.log(data);
  });
});
server.listen(9999);
