//crypto 加密 md5(摘要算法)
//md5的特点 不可逆
//不同的内容加密长度是一样的
//如果内容不相同 那么摘要的结果肯定也是不同的
let crypto = require("crypto");
let r = crypto
  .createHash("md5")
  .update("123456")
  .digest("base64");
console.log(r);

//加盐算法
//弄一个密码 根据我的密码进行加密 加密cookie
let fs = requier("fs");
let s = fs.readFileSync();
let r2 = crypto
  .createHmac("sha1", s)
  .update("123456")
  .digest("hex");
console.log(r2);
