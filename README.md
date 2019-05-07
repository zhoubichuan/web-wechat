> # 前端知识体系

# `一.基础知识`

## [1.算法](./1.base/1.arith)

## [2.数据结构](./1.base/2.structure)

## [3.面向对象](./1.base/3.object)

## [4.设计模式](./1.base/4.design)

## 5.相关框架

### [1.Angular](./1.base/5.frames/1.Angular)

### [2.Vue](./1.base/5.frames/2.Vue)

### [3.React](./1.base/5.frames/3.React)

# `二.标准`

## 1.ECMA

### 1.原型和原型链

### 2.作用域和闭包

### 3.异步

### 4.ES6

#### 1.模块化

#### 2.Class

#### 3.Promise

### 5.扩展库

#### 1.jquery

## 2.W3C

### 1.HTML

#### canvas

#### table

### 2.CSS

### 3.JS Web API

#### 1.DOM 操作

#### 2.BOM 操作

#### 3.事件绑定

#### 4.ajax

#### 5.扩展库

### 4.HTTP

### 5.存储

#### 1.cookie

#### 2.session

#### 3.token

#### 4.localstorage

#### 5.sessionStorage

#### 6.indexDB

### 6.websocket

# `三.开发环境`

## 1.git

## 2.IDE

### 1.vscode

### 2.webstrom

### 3.hbuilder

### 4.sublime

### 5.Atom

## 3.脚手架

### 1.vue-cli

## 4.构建工具
### 1.webpack
- 1.webpack基础
    - [1.webpack配置开发服务](./3.dev/3.scaffolding/1.webpack/1.base/1.server)
    - [2.webpack打包js](./3.dev/3.scaffolding/1.webpack/1.base/2.js)
    - [3.webpack中html相关的插件](./3.dev/3.scaffolding/1.webpack/1.base/3.html)
    - [4.webpack打包一个css文件](./3.dev/3.scaffolding/1.webpack/1.base/4.css)
    - [5.webpack抽离css样式文件](./3.dev/3.scaffolding/1.webpack/1.base/5.style)
    - [6.webpack将es6语法转化为es5语法](./3.dev/3.scaffolding/1.webpack/1.base/6.es6)
    - [7.webpack处理js语法以及校验](./3.dev/3.scaffolding/1.webpack/1.base/7.grammar)
    - [8.webpack全局变量引入的问题](./3.dev/3.scaffolding/1.webpack/1.base/8.global)
    - [9.webpack图片处理](./3.dev/3.scaffolding/1.webpack/1.base/9.image)
    - [10.webpack打包文件分类](./3.dev/3.scaffolding/1.webpack/1.base/10.classify)
- 2.webpack配置
    - [1.webpack打包多页应用](./3.dev/3.scaffolding/1.webpack/2.config/1.page)
    - [2.webpack配置sourceMap](./3.dev/3.scaffolding/1.webpack/2.config/2.map)
    - [3.webpack配置页面监听](./3.dev/3.scaffolding/1.webpack/2.config/3.watch)
    - [4.小插件应用](./3.dev/3.scaffolding/1.webpack/2.config/4.plugin)
    - [5.webpack跨域问题](./3.dev/3.scaffolding/1.webpack/2.config/5.cors)
    - [6.resolve属性的配置](./3.dev/3.scaffolding/1.webpack/2.config/6.resolve)
    - [7.webpack定义环境变量](./3.dev/3.scaffolding/1.webpack/2.config/7.defineEnv)
    - [8.webpack区分不同的开发环境](./3.dev/3.scaffolding/1.webpack/2.config/8.disEnv)
- 3.webpack优化
    - [1.noParse](./3.dev/3.scaffolding/1.webpack/3.optimize/1.noParse)
    - [2.lgnorePlugin](./3.dev/3.scaffolding/1.webpack/3.optimize/2.lgnorePlugin)
    - [3.dllPlugin](./3.dev/3.scaffolding/1.webpack/3.optimize/3.dllPlugin)
    - [4.happypack](./3.dev/3.scaffolding/1.webpack/3.optimize/4.happypack)
    - [5.webpack自带优化](./3.dev/3.scaffolding/1.webpack/3.optimize/5.selfOptimize)
    - [6.抽离公共代码](./3.dev/3.scaffolding/1.webpack/3.optimize/6.commonCode)
    - [7.懒加载](./3.dev/3.scaffolding/1.webpack/3.optimize/7.lazyload)
    - [8.热更新](./3.dev/3.scaffolding/1.webpack/3.optimize/8.hotUpdate)
- 4.webpack的tapable
    - [1.SyncHook介绍](./3.dev/3.scaffolding/1.webpack/4.tapable/1.SyncHook)
    - [2.Sync...Hook](./3.dev/3.scaffolding/1.webpack/4.tapable/2.Sync...Hook)
    - [3.AsyncParallelHook](./3.dev/3.scaffolding/1.webpack/4.tapable/3.AsyncParralleHook)
    - [4.AsyncSeriesHook](./3.dev/3.scaffolding/1.webpack/4.tapable/4.AsyncSeriesHook)
    - [5.AsyncSeriesWaterfall](./3.dev/3.scaffolding/1.webpack/4.tapable/5.AsyncSeriesWaterfall)
- 5.webpack手写
    - [1.writeByHand](./3.dev/3.scaffolding/1.webpack/5.write/1.writeByHand)
    - [2.analyse](./3.dev/3.scaffolding/1.webpack/5.write/2.analyse)
    - [3.relation](./3.dev/3.scaffolding/1.webpack/5.write/3.mypack)
    - [4.ast](./3.dev/3.scaffolding/1.webpack/5.write/4.mypack)
    - [5.build](./3.dev/3.scaffolding/1.webpack/5.write/5.mypack)
    - [6.loader](./3.dev/3.scaffolding/1.webpack/5.write/6.mypack)
    - [7.plugins](./3.dev/3.scaffolding/1.webpack/5.write/7.mypack)
- 6.手写loader
    - [1.loader](./3.dev/3.scaffolding/1.webpack/6.loader/1.loader)
    - [2.deploy](./3.dev/3.scaffolding/1.webpack/6.loader/2.loader-conf)
    - [3.babel](./3.dev/3.scaffolding/1.webpack/6.loader/3.babel-loader)
    - [4.banner](./3.dev/3.scaffolding/1.webpack/6.loader/4.banner-loader)
    - [5.file-url](./3.dev/3.scaffolding/1.webpack/6.loader/5.file-loader-url-loader)
    - [6.less-css](./3.dev/3.scaffolding/1.webpack/6.loader/6.less-loader)
    - [7.css](./3.dev/3.scaffolding/1.webpack/6.loader/7.css-loader)
- 7.webpack插件
    - [1.introduce](./3.dev/3.scaffolding/1.webpack/7.plugin/1.intorduce)
    - [2.plugin](./3.dev/3.scaffolding/1.webpack/7.plugin/2.plugin)
    - [3.document](./3.dev/3.scaffolding/1.webpack/7.plugin/3.document)
    - [4.inline](./3.dev/3.scaffolding/1.webpack/7.plugin/4.inline)
    - [5.auto](./3.dev/3.scaffolding/1.webpack/7.plugin/5.auto)
### [1.webpack](./3.dev/3.scaffolding/1.webpack/README.md)

### 2.Rollup

## 5.本地 server 和 mock

## 6.debug

## 7.部署测试

## 8.单元测试

## 9.测试机操作

# `四.运行环境`

## 1.标准浏览器

### 1.加载和渲染过程

### 2.性能优化

### 3.安全

### 4.兼容性

### 5.响应式

## 2.webview

### 1.hybrid

### 2.js-bridge
