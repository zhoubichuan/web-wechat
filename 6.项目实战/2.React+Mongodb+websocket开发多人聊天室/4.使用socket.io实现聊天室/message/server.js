let express = require("express");
let app=express();
let path = require("path");
app.use(express.static(__dirname));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});
let server = require("http").createServer(app);
server.listen(8080);

//http://localhost:80
//ws://localhost:808
let io = require("socket.io")(server);
//监听客户端的连接
const SYSTEM='系统';
const ALL_USERS={};

io.on("connection", socket => {
  let username;
  socket.on('message',message=>{
    console.log('message',message)
    if(username){
      let changeNameReg=/^changename:(.+)$/;
      let changeNameResult=message.match(changeNameReg);
      let privateReg=/^@(.+) (.+)$/;
      let privateResult=message.match(privateReg);
      if(changeNameResult){
        let newName=changeNameResult[1];
        io.emit('message',{
          username:SYSTEM,
          content:`用户[${username}]改名为[${newName}]`,
          createAt:new Date()
        });
        let oldSocket=ALL_USERS[username];
        delete ALL_USERS[username];
        username=newName;
        ALL_USERS[username]=oldSocket;
      }else if(privateResult){
        let toUser=privateResult[1];
        let toContent=privateResult[2];
        let toScoket=ALL_USERS[toUser]
        if(toSocket){
          toSocket.emit('message',{
            username,
            content:toContent,
            createAt:new Date()
          })
        }
      }else{
        io.emit('message',{
          username,
          content:message,
          createAt:new Date()
        })
      }
    }else{
      username=message;
      ALL_USERS[username]=socket;
      io.emit('message',{
        username:SYSTEM,
        content:`欢迎${username}加入聊天室`,
        createAt:new Date()
      })
    }
  })
});
