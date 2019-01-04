//如果使用tcp协议服务器模拟一共websocket服务器
let net = require("net");
const crypto = require("crypto");
const CODE = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
//创建了一个tcp服务器，参数是一个socket对象
//tcp服务器传输层，可以接受http请求和websocket请求
let server = net.createServer(socket => {
  console.log('socket')
  //once表示值监听一次就销毁了
  socket.once("data", data => {
    //data就是消息内容，是一个buffer
    data = data.toString();
    //判断正则是否匹配，如果匹配的话，则认为这个请求是一个升级协议的请求
    if (data.match(/Upgrade:websocket/)) {
      let rows = data.split("\r\n");
      rows = rows.slice(1, -2);
      const headers = {};
      rows.forEach(row => {
        let [key, val] = row.split(":");
        headers[key] = val;
      });
      if(headers[`Sec-WebSocket-Version`]==13){
        let SecWebSocketKey=headers['Sec-WebSocket-key'];
        let SecWebSocketAccept=crypto.createHash('sha').update(SocWebSocketKey+CODE).digest("base64");
        let response=[
          `HTTP/1.1 101 Switching Protocols`,
          `Upgrade:websocket`,
          `Connection:Upgrade`,
          `Sec-WebSocket-Accept:${SecWebSocketAccept}`,
          `\r\n`
        ].join('\r\n');
        socket.write(response);
        //握手只有一次，后面就是不停的收发消息了，这个data就是消息了
        socket.on('data',buffers=>{
          //判断是否是结束帧——fin是一个boolean
          let _fin=(buffers[0]&0b10000000)===0b10000000;
          //取得第一个字节的后四位，得到是一个十进制数
          let _opcode=buffers[0]&0b10001111;
          //判断是否有掩码操作
          let _isMask=(buffers[1]&0b10000000)===0b10000000;
          //buffer1的后七位代表负载的长度
          let _payloadLength=buffers[1]&0b01111111
          //取得掩码，跳过前两个字段 取四个字节
          let _mask=buffers.slice(2,6);
          //hello经过掩码处理过的hello
          let _payload=buffers.slice(6);
          if(_isMask){
            mask(_payload,_mask)
          }
          //拼响应数据
          let response=Buffer.alloc(_payload.length+2)
          response[0]=_opcode | 0b10000000;
          response[1]=_payload.length;
          _payload.copy(response,2);
          socket.write(response);
        })
    }
    }
  });
});
function mask(buffers,mask){
  for(let i=0;i<buffers.length;i++){
    buffers[i] ^=mask[i%4];
  }
}
server.listen(9999);
