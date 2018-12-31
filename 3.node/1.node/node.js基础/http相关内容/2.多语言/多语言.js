let http = require("http");
let url = require("url");
let path = require("path");
let fs = require("fs");
let obj = {
  zh: {
    data: "你好"
  },
  en: {
    data: "hello"
  },
  ja: {
    data: "1234"
  }
};
let defaultLanguage = "en";
let server = http.createServer(async function(req, res) {
  let lan = req.headers["accept-language"];
  res.setHeader("Content-Type", "text/plain;charset=utf8");
  if (lan) {
    let lans = lan
      .split(",")
      .map(l => {
        let [name, q = 1] = l.split(";");
        return {
          name,
          q: q === 1 ? 1 : Number(q.split("=")[1])
        };
      })
      .sort((a, b) => b.q - a.q);
    for (let i = 0; i < lans.length; i++) {
      let lanName = lans[i].name;
      if (obj[lanName]) {
        res.end(pobj[lanName].data);
      }
    }
    console.log(lans);
  } else {
    res.setHeader("Content-Type", "text/plain;charset=utf8");
    res.end(obj[defaultLanguage].data);
  }
});
server.listen(3000, function() {
  console.log(3000 + "连接成功");
});
