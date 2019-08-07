# number 数据类型知识点

## 1.js 中等号的三种情况

### 赋值

```
=
```

### 判断左右两边的值是否相等

```
==
```

#### 如果是两个值比较是否相等，遵循这个规则：

* val1 == val2 两个值可能不是同一个数据类型的，如果是 == 比较的话，会进行默认的数据类型转换
  /\_

- 1、对象 == 对象 永远不相等

```
var a={}
var b={}
a == b
//false
```

* 2、对象 == 字符串 先将对象转换成字符串（调用 toString 的方法），然后再进行比较

  * []转换成字符串""

```
var a={a:'a'}
var b="a"
a==b
//false
```

* {}转换为字符串"[object Object]"

```
var a={}
a=="[object Object]"
//true
```

* 3、对象 == 布尔类型 对象先转换为字符串（toString）,然后在转换为数字（Number"" 是 0），布尔类型也转换为数字（true 是 1，false 是 0），最后让两个数字比较

```
var a={}
a==false
//false
```

* 4、对象 == 数字 对象先转换为字符串（toString），然后把字符串转换为数字（Number）

```
var a={a:'a'}
a==10
//false
```

* 5、数字 == 布尔 布尔转换为数字

```
1=true
//true
```

* 6、数字 == 字符串 字符串转换为数字

```
1=='1'
//ture
```

[面试题](./面试题1.js)

* 7、字符串 == 布尔 都转换为数字

```
'1'== true
//ture
```

* 8、null == undefined 结果都是 true

```
null == undefined
//true
```

* 9、null 或者 undefined 和其他任何数据类型比较都不相等

```
null == '123'
//false
```

```
undefined == 'qqq'
//false
```

### 判断左右两边的值是否觉得相等（包含数据类型）

```
===
```

## 2.number 包含正数、负数、零、小数、NaN

### NaN 不是一个数，但是属于 number 数据类型

```
typeof NaN
//"number"
```

## 3.把其他数据类型转换成 number

### 1.严格转换：Number()

```
Number(true)
//1
```

```
Number(false)
//0
```

```
Number(null)
//0
```

```
Number("")
//0
```

* undefined 是不能转换为有效数字

```
Number(undefined)
//NaN
```

```
Number('12')
//12
```

* 如果是把一个字符串转换为数字，只有字符串中的每一个字符都是有效数字字符，才可以正常转换，相反只要有一个不是有效数字字符(除了空格符)，最后结构就是 NaN

```
Number('12px')
//NaN
```

```
Number('  1 ')
//1
```

### 2.非严格转换

### parseInt/parseFloat 从左到右一次查找，把有效的数字字符转换为数字，但是一旦遇到一个非有效的数字字符，立即停止查找（不管后面是否还有都不再查找了）

```
parseInt('12px')
//12
```

```
parseInt('12px13')
//12
```

```
parseInt('px12')
//NaN
```

```
parseInt('12.5px')
//12.5
```

```
parseFloat('12.5px')
//12.5
```

## 4.数字常用的方法

### toFixed(n):保留小数点后面 n 位

```
var num=3.1415
num.toFixed(2)
//3.14
```

## 5.检测是否为有效数字

### isNaN()用来检测是否为有效数字的方法，如果当前的值是有效数字返回的结果是 false,如果不是有效数字，返回的结果是 true

```
isNaN(12)
//false
```

```
isNaN('qwer')
//true
```

* 如果检测的值不是 number 类型的，浏览器会默认先通过 Number 把它强制转换为 number 类型，然后再检测是否为有效数字

```
isNaN('12')
//false
```

## 6.比较

### 1.是否相等

//数据类型转换规则：
//1、如果只有一个值，判断这个值是真还是假，遵循：只有 0、NaN、""、null、undefined 这五个是假的，其余的都是真

//3、除了 == 是比较 === 也是比较（绝对比较），
//val1 === val2 如果数据类型不一样肯定不相等
