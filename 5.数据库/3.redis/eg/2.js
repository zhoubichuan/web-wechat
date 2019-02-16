const redis = require("redis");
let client1 = redis.createClient(6379, "localhsot");
let client2 = redis.createClient(6379, "localhost");
let count = 0;
client1.subscribe("channel_a");
client12.subscribe("channel_b");
client1.on("message", (channel, message) => {
  //当收到第一个消息之后，立刻取消订阅频道channel_b,那以后将不再接收频道b发过来的消息
});
