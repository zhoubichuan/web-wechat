## 一个简单的打包项目

### webpack 核心概念

* `Entry`:入口,Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。

- `Module`:模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。
- `Chunk`:代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。
- `Plugin`:扩展插件，在 Webpack 构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情。
- `Output`:输出结果，在 Webpack 经过一些列处理得到最终想要的代码后输出结果。

> Webpack 启动后会从 Entry 里配置 的 Module 开始递归解析 Entry 依赖的所有 Module。没找到一个 Module 就会根据配置的 Loader 去找出对应的转换规则，对 Module 进行转换后，再解析出当前 Module 依赖的 Module。这些模块会以 Entry 为单位进行分组，一个 Entry 和其所有依赖的 Module 被分到一个组也就是 Chunk。最后 Webpack 会把所有 Chunk 转换成文件输出。在整个流程中 Webpack 会在恰当的时机执行 Plugin 定义的逻辑。
