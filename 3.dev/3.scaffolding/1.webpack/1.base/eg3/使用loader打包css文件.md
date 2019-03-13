## 5.启动一个静态服务器

### 1.安装

```
npm i webpack-dev-server -D
```

### 2.配置

* package.json

```
"scripts": {
    "build": "webpack --mode development",
  },
```

--> 转换

```
"scripts": {
    "build": "webpack --mode development",
    "dev": "webpack-dev-server --open --mode development"
  },
```

### 3.webpack 配置

* webpack.config.js

```
devServer: {
    contentBase: "./dist",
    host: "localhost",
    port: 8080,
    //服务器返回给浏览器的时候是否启动gzip压缩
    compress: true
  }
```
