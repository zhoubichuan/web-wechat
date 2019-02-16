# iframe
### 通过在html页面里嵌入一个隐藏的iframe，然后将这个iframe的src属性设为对一个长连接的请求，服务器端就能源源不断地向客户端推送数据。

![](./iframeflow.png)

##案例
### 客户端代码
- html
```
<div id="clock"></div>
<iframe src="/clock" frameborder="0" style="display:none"></iframe>
```
### 服务端代码
```
let express = require("express");
let app = express();
app.use(express.static(__dirname));
app.get("/clock", (req, res) => {
  setInterval(() => {
    let date = new Date().toLocaleString();
    res.write(`
        <script type="text/javascript">
        parent.document.getElementById('clock').innerHTML="${date}"
        </script>
        `);
  }, 1000);
});
app.listen(3000, () => {
  console.log(3000);
});
```
