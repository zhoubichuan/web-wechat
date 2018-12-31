//304走浏览器的缓存
//缓存的类型 有两种 强制缓存 + 对比缓存
let http = require("http");
//页面 可能内部引用一个css 我希望css缓存

let url = require("url"); // pathname,query
let path = require("path");
let fs = require("fs");
let util = require("util");
let stat = util.promisify(fs.stat);
let mime = require("mime");
let crypto = require("crypto");
let server = http.createServer(async function(req, res) {
  console.log(req.url);
  //告诉浏览器十秒内不要找我
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Exipres", new Date(Date.now() + 10 * 1000).toLocaleString());

  //第一次访问的时候， 要给浏览器加一个头last-modified
  //第二次请求的时候，会自动带一个头 if-modify
  //如果当前带过来的头和文件当前的状态有出入，说明文件

  //第一次来访问 给你一个文件的签名 Etag ：各种
  //下次你再来访问 会带上这个标签 if-none-match
  //我在去拿文件当前的内容 在生成一个标签 如果相等 返回304

  let { pathname } = url.parse(req.url);
  let realPath = path.join(__dirname, pathname); // 拼接真实文件的路径
  try {
    let statObj = await stat(realPath); // 判断文件是否存在
    if (statObj.isFile()) {
      res.setHeader('Etag');
crypto.createHash('md5')
      let prev = req.headers["if-modified-since"];
      let current = statObj.citime.toGMTString();
      if (prev === current) {
        res.statusCode = 304;
        res.end();
      }
      // 是文件 返回文件
      res.setHeader("Content-Type", mime.getType(realPath) + ";charset=utf-8");
      fs.createReadStream(realPath).pipe(res);
    } else {
      res.setHeader("Last-Modified", statObj.ctime.toGMTString());
      let url = path.join(realPath, "index.html"); // 目录找html
      res.setHeader("Content-Type", "text/html;charset=utf-8");
      fs.createReadStream(url).pipe(res);
    }
  } catch (e) {
    // 不存在返回404
    res.statusCode = 404;
    res.end("Not found");
  }
});

server.listen(3000, function() {
  console.log(`server start 3000`);
});

//第一次来先来个强制缓存Cache-Control + expires
//过了10s再刷新 此时会再次发送请求 启用对比缓存
// 1) Last-Modified:ctime 2)if-modified-since
//1) Etag 2)if-none-match