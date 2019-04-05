function loader(source){
//我们可以在style-loader中导出一个脚本
 let str=`
        let style=document.createElement('style');
        style.innerHTML=${JSON.stringify(source)};
        document.head.appendChild(style)
        `
 return str;
}
module.exports=loader