let babel=require('@babel/core')
let laoderUtils=require('loader-utils')
function loader(source){//this loaderContext
    // console.log(Object.keys(this))
    console.log(this.resourcePath)
    let options=laoderUtils.getOptions(this)
    let cb=this.async()
    babel.transform(source,{
        ...options,
        sourceMap:true,
        filename:this.resourcePath.split('/').pop()
    },function(err,result){
        cb(err,result.code,result.map)//异步
    })
}
module.exports=loader