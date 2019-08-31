# vue 中使用 axios

## eg:实现一个增删改查的功能

### 1、get 请求：没有问题

```
this.axios.get(url).then()
```

### 2、post 请求：有问题后端拿不到数据

```
let params={id:1}
this.axios.post(url,params)
```

* tips：

  * 改进 1:使用 qs

  ```
  const qs=require('qs')
  this.axios
  .post(url,qs.stringify(params))
  .then()
  ```

  ```
  this.axios({
      method:"post",
      url,
      data:qs.stringify(params)
      })
      .then()
  ```

  后台接收参数用 req.body

  * 改进 2:使用 URLSearchParams

  ```
  const param=new URLSearchParams()
  param.append('id',1)
  this.axios
  .post(url,param)
  .then()
  ```

  ```
  this.axios({
      method:"post",
      url,
      data:param})
      .then()
  ```

  后台接收参数用 req.body

  * 改进 3：使用请求地址中的参数"id=1&name=2"

  ```
  this.axios.post(url,"id=1")
  ```

  ```
  this.axios({
      method:"post",
      url,
      "id=1"
  })
  ```

  后台接收参数用 chunk

### 3、delete 请求：有问题后端拿不到数据

```
  let params={id:1}
  this.axios.delete(url,params)
```

* tips：

  * 改进 1:使用 qs

  ```
  const qs=require('qs')
  this.axios
  .delete(url,qs.stringify(params))
  .then()
  ```

  ```
  this.axios({
      method:"delete",
      url,
      data:qs.stringify(params)
      })
      .then()
  ```

  后台接收参数用 req.body

  * 改进 2:使用 URLSearchParams

  ```
  const param=new URLSearchParams()
  param.append('id',1)
  this.axios
  .delete(url,param)
  .then()
  ```

  ```
  this.axios({
      method:"delete",
      url,
      data:param})
      .then()
  ```

  后台接收参数用 req.body

  * 改进 3：使用请求地址中的参数"id=1&name=2"

  ```
  this.axios.delete(url,"id=1")
  ```

  ```
  this.axios({
      method:"delete",
      url,
      "id=1"
  })
  ```

  后台接收参数用 chunk

### 4、put 请求：有问题后端拿不到数据

```
  let params={id:1}
  this.axios.put(url,params)
```

* tips：

  * 改进 1:使用 qs

  ```
  const qs=require('qs')
  this.axios
  .put(url,qs.stringify(params))
  .then()
  ```

  ```
  this.axios({
      method:"put",
      url,
      data:qs.stringify(params)
      })
      .then()
  ```

  后台接收参数用 req.body

  * 改进 2:使用 URLSearchParams

  ```
  const param=new URLSearchParams()
  param.append('id',1)
  this.axios
  .put(url,param)
  .then()
  ```

  ```
  this.axios({
      method:"put",
      url,
      data:param})
      .then()
  ```

  后台接收参数用 req.body

  * 改进 3：使用请求地址中的参数"id=1&name=2"

  ```
  this.axios.put(url,"id=1")
  ```

  ```
  this.axios({
      method:"put",
      url,
      "id=1"
  })
  ```

  后台接收参数用 chunk
