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
  buildModule(modulePath, isEntry) {
      
  }
  emitFile() {}
  run() {
    //执行
    this.buildModule(path.resolve(this.root, this.entry), true);
    this.emitFile();
  }
}
module.exports = Complier;
