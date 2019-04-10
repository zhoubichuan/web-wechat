//解构赋值 声明和赋值都放到一起了
let arr = ['zhufeng',9]
let arr =arr[0]
let age=arr[1]

//解构 表示等号左边和右边解构类似
//数组必须位置相同
let [name,age]=['zhufeng',9]
console.log(name,age)

let [,age]=['zhufeng',9]

//对象解构时名字必须相同
let {length}=['zhufeng',0]
console.log(length)

//如果有关键字可以采用：的形式更改名字
let {name,age,default:d}={name:'zhufeng',age:9,default:'xxx'}
console.log(name,age,d)

//取2，如果想设置某个属性的默认值， 必须采用=的形式
let [,{address:[,a]},hobby="游泳"]=[
    {name:'zfpx'},
    {age:9,address:[1,2,4]}
]
console.log(a,hobby)
//解构的应用
function test(){
    return [1,2,34]
}
let [a,b,c]=test()

//ajax默认值
function ajax({url=new Error('url without'),type='get',data='xxx'}){
    console.log(url,type,data)
}
ajax({
    url:'/test',
    type:'get',
    data:{}
})