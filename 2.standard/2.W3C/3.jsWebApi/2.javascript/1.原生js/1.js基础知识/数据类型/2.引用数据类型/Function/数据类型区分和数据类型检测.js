//基本数据类型和引用数据类型的区别
var num1 = 12;
var num2 = num1
num2++
console.log(num1)//12
var obj1={age:'12'}
var obj2=obj1
obj2.age=13
console.log(obj1.age)//13
//基本数据类型的值没有变，引用数据类型的值变了
//基本数据类型和引用数据类型的本质区别
//基本数据类型是把值直接给变量，接下来在操作的过程中，直接拿这个值操作的，可能两个变量存储一样的值，但是你的是你的，我的是我的，之间没有关系，其中一个改变，另一个没有任何影响
//引用数据类型：
//定义一个变量
//开辟一个新的空间，然后把属性名和属性值保存在这个空间中，并且有一个空间地址
//把空间的地址给了这个变量，变量并没有存储这个数值，而是存储的是对这个空间引用地址
//接下来我们把这个地址，又告诉另外一个变量，另外一个变量存储的也是这个地址，此时两个变量操作的是同一个空间
//其中一个改变了空间的内容，另外一个也跟着改变了

//js中检查数据类型的方式
//typeof运算符    -->返回值：是一个字符串，包含了数据类型字符"number","string","object","boolean","undefined","function"
//typeof null 的结果是"object"
//typeof的局限性：不能细分object下细分的类型
var num2 = 12
console.log(typeof num2)

/* 试题 */
console.log(typeof typeof typeof typeof [])//"string"
//instanceof运算符
//constructor
//Object.prototype.toString.call()