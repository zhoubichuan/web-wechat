let http = require("http");
let url = require("url");
let path = require("path");
let fs = require("fs");
let util = require("util");
let stat = util.promisify(fs.stat);
let mime=require('mime')

let server = http.createServer(function(req, res) {
  let { pathname } = url.parse(req.url);
  //拼接真实文件路径
  let realPath = path.join(__dirname, pathname);
try{
let statObj=await stat(realPath)
//是文件 返回文件
if(statObj.isFile()){
//类型库mime
res.setHeader('Content-Type',mime.getType(ealPaht)+';charset=utf8')
    fs.createReadStream(realPath).pipe(res)
    

}else{
//目录找html
    let url=path.join(realPath,'index/html')
    res.setHeader('Content-Type','text/html;charset=utf8')
    fs.createReadStream(url).pipe(res)
}
}catch(e){
    res.statusCode=404
    res.end('Not found')
}






//   fs.stat(realPath, function(err, statObj) {
//     if (err) {
//       res.statusCode = 404;
//       res.end("Not found");
//     } else {
//       if (statObj.isFile()) {
//         res.setHeader("Content-Type", "text/html;charset=utf8");
//         fs.createReadStream(realPath).pipe(res);
//       } else {
//         let url = path.join(realPath, "index.html");
//         fs.createReadStream(realPath).pipe(res);
//       }
//     }
//   });
});
server.listen(3000, function() {
  console.log("3000");
});
