let http = require("http");
//建立客户端 有get request
// 可以爬虫 可以做中间层
let client = http.request(
  {
    method: "POST",
    hostname: "localhost",
    path: "/a=1#top",
    headers: {
      "Contetn-Type": "application/x-www-form-urlencoded"
    },
    port: 3000
  },
  function(res) {
    console.log(res.headers);
    res.on("data", function(chunk) {
      console.log(chunk);
    });
  }
);
//把请求真正的发出
//end方法中可以写入请求体
client.end('{ "name":"zpxf" }');
