# immutable

* 创建一个不共享的数据

## 优势

### 1.降低复杂度

```

```

### 2.节省内存

```
let Immutable=require("immutable")
let p1=Immutable.fromJS({name:"xx",
home:{name:"sss"}})
let p2=p1.set("name","xx2")
console.log(p1.get("home")==p2.get("home"))
```

### 3.方便回溯

* 只要把每次的状态都放在一个数组中就可以很方便的实现撤销重做功能
