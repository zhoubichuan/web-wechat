console.log("loader");

//-!不会让文件 再去通过pre+normal loader来处理了
//！没有normal
//!!什么都不要
let str = require("!!inline-loader!./a.js");

//loader 默认是由两部分组成 pitch normal
class Zbc{
    constructor(){
        this.name="zbc"
    }
    getName(){
        return this.name
    }
}
let zbc=new Zbc()
console.log(zbc.getName())