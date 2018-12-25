//node为了实现服务器
let http = require("http"); //http内置模块
let querystring = require("querystring");
//req 指的是客户端的请求 可读流on('data')
//res 指的是 服务端的相应 可写流 write end
let server = http.createServer((req, res) => {
  //监听函数，客户端请求到了后会执行回调函数
  let arr = [];
  //方法
  let method = req.method;
  console.log("方法", method);
  //url
  let url = req.url;
  console.log(url);
  //版本号
  let version = req.httpVersion;
  //获取请求头，对象的所有key都是小写的
  let headers = req.headers;
  console.log("请求头", headers);
  req.on("data", function(chunk) {
    arr.push(chunk);
  });
  req.on("end", function() {
    let str = Buffer.concat(arr).toString();
    let obj;
    if (headers["content-type"] === "application/x-www-form-urlencoded") {
      obj = querystring.parse(str);
    } else {
      obj = JSON.parse(obj);
    }
    //设置状态
    res.statusCodeCode = 200;
    //设置头
    res.setHeader("Content-Type", "application/json");
    res.setHeader("a", "1");
    //在给客户端写入响应体
    res.end(JSON.stringify(obj));
    console.log(str);
  });
});
//listen EADDRINUSE :::3000端口被占用
let port = 3000;
server.listen(port, function(err) {
  console.log(`${port}端口连接成功`);
  server.on("error", function(err) {
    if (err.errno === "EADDRINUSE") {
      port++;
      server.listen(port);
    }
  });
});
//nodemon 自动启动node服务
//

//查询字符串 希望把a=b&c=d 格式转成对象格式{a:b,c:d}
// let querystring = require("querystring");
// let obj = querystring(str, "$", "==");
// let s = querystring.stringify(obj);
// console.log(obj, s);

// str.replace(/([^&=]*)=([^&=]*)/g,function(){
//     obj[arguments]
// });


//req
//req.method
//req.url
//req.headers
//req.on('data')


//res
//res.statusCode=200
//
//