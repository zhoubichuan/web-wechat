let name2 ='zfpx'
let age2=9
let str2= 'hello${name2}今年${age2}岁了'
str2=str2.replace(/\$\{([^}]*)\}/g,function(){
    return eval(arguments[1])
})
console.log(str2)