# 正则表达式的 exec 方法简介

## 1.语法

```
reg.exec(str)
```

### 其中 str 为要执行正则表达式的目标字符串

## 2.元字符详解及应用实例

### 1.c{n}匹配固定的 n 个

```
var reg=/c{3}/
var str='cssscsss'
reg.exec(str)
//["c", index: 0, input: "cssscsss", groups: undefined]
```

## 2.c{m,n}匹配最少 m 个，最多 n 个

```
var reg=/m{2,6}/
var str='middle mmmm'
reg.exec(str)
//["mmmm", index: 7, input: "middle mmmm", groups: undefined]
```

## 3.c{n}表示最少匹配 n 个 c，最多不限制

```
var reg=/c{2,}/
var str='cccmdddccc'
reg.exec(str)
//["ccc", index: 0, input: "cccmdddccc", groups: undefined]
```
