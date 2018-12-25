"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = "hi, egg";
  }
  async query() {
    this.ctx.body = "查询";
  }
  async delete() {
    console.log("删除");
    this.ctx.body = "删除";
  }
  async update() {
    console.log("修改");
    this.ctx.body = "修改";
  }
  async add() {
    console.log("添加");
    this.ctx.body = "添加";
  }
}

module.exports = HomeController;
