let path = require("path");
let fs = require("fs");
let context = require("context");
class Koa {
  constructor() {
    this.middleware; //Object.create(null)没有原型的对象
    this.context = Object.create(context);
    this.request = request;
    this.response = response;
  }
  use(fn) {
    this.middleware = fn;
  }
  //创建上下文
  createContext(req, res) {//自己封装的request和response属性
    let ctx = this.context;
    ctx.request = this.request;
    ctx.req = ctx.request.req = req; //请求相关的
    ctx.response = this.response;
    ctx.res = ctx.response.res = res; //响应相关的
  }
  //处理用户请求到来时
  handleRequest(req, res) {
    let ctx = this.createContext(req, res);
    this.middleware(ctx);
  }
}
