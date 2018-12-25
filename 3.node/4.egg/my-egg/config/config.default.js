"use strict";

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1545310931758_6614";

  exports.security = {
    csrf: false
  };
  // add your config here
  config.middleware = [];

  config.mysql = {
    client: {
      host: "localhost",
      //端口号
      // port:'3306',
      user: "root",
      passowrd: "root",
      database: "test1"
    },
    //是否加载到app上
    app: true,
    //是否加载到agent上
    agent: false
  };

  return config;
};
