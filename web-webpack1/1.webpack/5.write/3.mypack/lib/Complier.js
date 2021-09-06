let fs = require("fs");
let path = require("path");
class Complier {
  constructor(config) {
    //entry output
    this.config = config;
    //需要保存入口文件的路径
    this.entryId;
    //需要保存所有的模块依赖
    this.modules = {};
    this.entry = config.entry;
    this.root = process.cwd();
  }
  getSource(modulePath) {
    let content = fs.readFileSync(modulePath, "utf8");
    return content;
  }
  //解析源码 AST解析语法树
  parse(source, parentPath) {
    console.log(source, parentPath);
  }
  buildModule(modulePath, isEntry) {
    let source = this.getSource(modulePath);
    //模块id modulePath = modulePath-this.root
    let moduleName = "./" + path.relative(this.root, modulePath);
    console.log(source, moduleName);
    if (isEntry) {
      this.entryId = moduleName;
    }
    //解析需要把source源码进行改造 返回一个依赖列表
    this.parse(source, path.dirname(moduleName));
    //把相对路径和模块中的内容 对应起来
    this.modules[moduleName] = sourceCode;
  }
  emitFile() {}
  run() {
    //执行
    this.buildModule(path.resolve(this.root, this.entry), true);
    this.emitFile();
  }
}
module.exports = Complier;
