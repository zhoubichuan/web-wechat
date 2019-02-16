const redis = require("redis");

//列表
client.lpush("links", "a", redis.print);
client.lpush("links", "b", redis.print);
client.lrange("links", 0, -1, redis.print);
//集合
client.sadd("tags", "a", redis.print);
//如何在redis中模拟对象操作
client.hset("person", "name", "zfpx", redis.print);
client.hset("person", "age", "10", redis.print);
client.hset("person", "home", "beijing", redis.print);
client.hkeys("person", (err, replies) => {
  console.log(replies);
});
