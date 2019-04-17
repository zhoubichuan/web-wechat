//Object.assign 合并对象

let name={name:'zbc'}
let age={age:9}
let obj=Object.assign(name,age)//浅拷贝
console.log(obj)


//__proto__ 链
console.log('1'.__proto__)


let name={name:'zbc'}
let age={age:9}
name.__proto__=age
console.log(name.age)

//设置
Object.setPrototypeOf(name,age)
//获取
Object.getPrototypeOf(name)

let age={
    age:8,
    name:123
}
let obj={
    name:'zbc',
    getName(){//可以通过super关键字获取父属性
        return super.name
    },
    __proto__:age
}