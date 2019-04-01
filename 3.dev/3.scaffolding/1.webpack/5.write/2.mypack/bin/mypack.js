#! /usr/bin/env node

//1)需要找到当前执行名的路径 拿到webpack.config.js

let path = require("path");

//config配置文件
let config = require(path.resolve(__dirname));

let Compiler = require("../lib/Complier");
let complier = new complier(config);

//标识运行编译
complier.run();
