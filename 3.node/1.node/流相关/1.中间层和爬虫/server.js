//客户端 node充当的服务器 node

//当我访问我自己的node服务器时，我可以在发一个请求到别的网站上，请求到的结果响应给客户端

let http = require("http");
let server = http.createServer();
server.on("request", function(req, re) {
  http.get(
    {
      host: "news.baidu.com"
    },
    function(res) {
      let arr = [];
      res.on("data", function(data) {
        arr.push(data);
      });
      res.on("end", function() {
        let r = Buffer.concat(arr).toString();
        let arrs = r.match(/<li>(?:[\s\S]*?)<\/li>/gim);
        re.setHeader("Content-Type", "text/html;charset=utf8");
        re.end(arrs.join(""));
      });
    }
  );
});
server.listen(3000, "localhost", function() {
  console.log(`start port 3000`);
});
