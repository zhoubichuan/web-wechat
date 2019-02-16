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

io.on("connection", async socket => {
  let username;
  let rooms=[];
  socket.on('message',async message=>{
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
        }else{
          socket.emit('message',{
            username:SYSTEM,
            content:`你想私聊的用户名${toUser}不存在`,
            createAt:new Date()
          })
        }
      }else{
        let doc={
          username,
          content:message
        }

        if(rooms.length>0){
          rooms.forEach(room=>{
            io.in(room).emit('message',doc)
          })
        }else{
          io.emit('message',doc)
        }
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
  //加入某个房间 一个客户端可以同时在多个房间内
  socket.on('join',roomName=>{
    let index=rooms.findIndex(item=>item === roomName);
    if(index == -1){
      socket.join(roomName)
      rooms.push(roomName);
      socket.emit('message',{
        username:SYSTEM,
        content:`你已经成功的加入到了${roomName}房间内`,
        createAt:new Date()
      })
      socket.broadcast.to(roomName).emit('message',{
        username:SYSTEM,
        content:`${username}已经成功进入了${roomName}房间`,
        createAt:new Date()
      });
      //告诉 客户端我已经成功的进入了某个房间
      socket.emit('joined',roomName)
    }else{
      socket.emit('message',{
        username:SYSTEM,
        content:`别闹!你已经在这个房间内了`,
        createAt:new Date()
      })
    }
  })
  //离开某个房间
  socket.on('leave',roomName=>{
    let index=rooms.findIndex(item=>item===roomName);
    if(index==-1){
      socket.emit('message',{
        username:SYSTEM,
        content:`别闹！你根本就不在这个房间内`,
        createAt:new Date()
      })
    }else{
      socket.leave(roomName);
      rooms.splice(index,1);
      socket.emit('message',{
        username:SYSTEM,
        content:`你已经成功的离开了${roomName}房间`,
        createAt:new Date()
      })

      socket.broadcast.to(roomName).emit('message',{
        username:SYSTEM,
        content:`${username}已经成功的离开了${roomName}房间`,
        createAt:new Date()
      })

      socket.emit('leaved',roomName)
    }
  })

  socket.on('getAllMessages',async ()=>{
    // let messages=await Message.find().sort({createAt:-1}.limit(20));
    // messages.reverse();
    let message={msg:'ok'}
    socket.emit('allMessages',messages)
  })

  socket.on('room',roomName=>{
    let sockets=io.sockets.adapter.rooms[roomName].sockets;
    let count=Object.keys(sockets)
  })
});
