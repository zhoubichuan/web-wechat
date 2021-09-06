function loader(source){
    let reg=/url\((.+?)\)/g
    let pos=0
    let current;
    let arr = ['let list =[]']
    while(current=reg.exec(source)){
        let [matchUrl,g]=current
        console.log(matchUrl,g)
        let last=reg.lastIndex - matchUrl.length
        arr.push(`list.push(${JSON.stringify(source.slice(pos,last))})`)
        pos=reg.lastIndex;
        arr.push(`list.push('url('+require(${g})+')')`)
    }
    arr.push(`list.push(${JSON.stringify(source.slice(pos))})`)
    arr.push(`module.exports=list.join('')`)
    console.log(arr.join('\r\n'))

return arr.join('\r\n')
}
module.exports=loader