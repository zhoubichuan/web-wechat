let loaderUtils=require('loader-utils')
function loader(source){
   let filename= loaderUtils.interpolateName(this,'[hash].[ext]',{content:source})
    console.log(source)
    this.emitFile(filename,source)
    return `module.exports="${filename}"`
}
loader.raw=true//二进制
module.exports=loader