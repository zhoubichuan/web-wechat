## 三大数据库

* mysql 关系型数据库 存的是表，表里面存的是记录行
* mongodb 非关系型数据库 存的是集合 集合里存的是文档
* redis key-valuse 数据库
  * 集中式会话管理
  * 缓存服务器

### redis 优势

* 性能极高 redis 能度的速度是 110000 次/s，写的速度是 81000 次/s.

### 配置

### 数据类型

* 字符串
  * 设置


  ```
  set name zfpx
  ```
  * 得到


  ```
  get name
  ```
  * 一个一个取


  ```
  getrange name 1 2
  ```
  ```
  getrange name 1 3
  ```
  * 加


  ```
  set age 1
  ```
  * 减


  ```
  decr age
  ```
  ```
  decrby age 2
  ```
  * 是否存在


  ```
  exists age
  ```
  * 删除


  ```
  del age
  ```
  * 设置 homepage


  ```
  set homepage index.html
  ```
  * 设置过期时间


  ```expire homepage 10

  ```
  * 查看过期时间


  ```
  ttl homepage
  ```
* 哈希值
  * 存


  ```
  hset user name zfpx
  ```
  ```
  hset user age 9
  ```
  *
