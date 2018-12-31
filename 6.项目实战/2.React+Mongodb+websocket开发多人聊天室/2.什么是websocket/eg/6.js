/* 请求头
GET ws://localhost:8888/ HTTP/1.1
Host: localhost:8888
Connection: Upgrade
Pragma: no-cache
Cache-Control: no-cache
User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36
Upgrade: websocket
Origin: http://localhost:3000
Sec-WebSocket-Version: 13
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8
Cookie: UM_distinctid=165fca0a2af3d0-0f501090bb29f9-1d67446b-25800-165fca0a2b05e7; CNZZDATA1254020586=1375640483-1537541642-%7C1537541642; _ga=GA1.1.1745777516.1537541711
Sec-WebSocket-Key: xl0sD4LsfBfipcm8jULjYA==
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
 */

/*
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: QVi4FvBm2f5rkYzKe4E4ObfpDOE=
 */
let crypto = require("crypto");
const CODE = "";
const secWebsocketKey = "xl0sD4LsfBfipcm8jULjYA==";
const websocketAccept = crypto
  .createHash("sha1")
  .update(secWebsocketKey + CODE)
  .digest("base64");
console.log(websocketAccept);
