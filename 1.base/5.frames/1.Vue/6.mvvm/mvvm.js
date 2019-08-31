// 观察者（发布订阅）观察者 被观察者
class Dep {
  constructor() {
    this.subs = []; //存放所有的watcher
  }
  //订阅
  addSub(watcher) {
    //添加watcher
    this.subs.push(watcher);
  }
  //发布
  notify() {
    this.subs.forEach(watcher => watcher.update());
  }
}
class Watcher {
  constructor(vm, expr, cb) {
    this.vm = vm;
    this.expr = expr;
    this.cb = cb;
    //默认先存放一个老值
    this.oldValue = this.get();
  }
  get() {
    Dep.target = this; //先把自己放在this上
    let value = CompileUtil.getVal(this.vm, this.expr);
    Dep.target = null; //不取消 任何值都会添加watcher
    return value;
  }
  update() {
    //更新操作 数据变化后 会调用观察者的update方法
    let newVal = CompileUtil.getVal(this.vm, this.expr);
    if (newVal != this.oldValue) {
      this.cb(newVal);
    }
  }
}

class Observer {
  constructor(data) {
    this.observer(data);
  }
  observer(data) {
    if (data && typeof data == "object") {
      for (let key in data) {
        this.defineReactive(data, key, data[key]);
      }
    }
  }
  defineReactive(obj, key, value) {
    this.observer(value);
    let dep = new Dep(); //给每一个属性 都加一个具有发布订阅的功能
    Object.defineProperty(obj, key, {
      get() {
        //创建watcher时 会取到对应的内容 并且把watcher放到全局上
        Dep.target && dep.addSub(Dep.target);
        return value;
      },
      set: newVal => {
        if (newVal != value) {
          this.observer(newVal);
          value = newVal;
          dep.notify();
        }
      }
    });
  }
}
class Compiler {
  constructor(el, vm) {
    //判断el属性是不是一个元素，如果不是元素就获取
    this.el = this.isElementNode(el) ? el : document.querySelector(el);
    //把当前节点中的元素 获取到 放到内存中
    this.vm = vm;
    let fragment = this.node2fragment(this.el);
    //把节点中的内容进行替换

    //编译模板 用数据编译
    this.compile(fragment);
    //把内容在塞到页面中

    this.el.appendChild(fragment);
  }
  isDirective(attrName) {
    return attrName.startsWith("v-");
  }
  //编译元素
  compileElement(node) {
    let attributes = node.attributes;
    [...attributes].forEach(attr => {
      let { name, value: expr } = attr;
      if (this.isDirective(name)) {
        let [, directive] = name.split("-");
        let [directiveName, eventName] = directive.split(":");
        //需要调用不同的指令来处理
        CompileUtil[directiveName](node, expr, this.vm, eventName);
      }
    });
  }
  //编译文本
  compileText(node) {
    let content = node.textContent;
    if (/\{\{(.+?)\}\}/.test(content)) {
      CompileUtil["text"](node, content, this.vm);
    }
  }
  //核心的编译方法
  compile(node) {
    //用来编译内存中的dom节点
    let childNodes = node.childNodes;
    [...childNodes].forEach(child => {
      if (this.isElementNode(child)) {
        this.compileElement(child);
        //如果是元素的话 需要把自己传进去 再遍历子节点
        this.compile(child);
      } else {
        this.compileText(child);
      }
    });
  }
  //把节点移动到内存中
  node2fragment(node) {
    let fragment = document.createDocumentFragment();
    let firstChild;
    while ((firstChild = node.firstChild)) {
      //appendChild具有移动性
      fragment.appendChild(firstChild);
    }
    return fragment;
  }
  isElementNode(node) {
    //是不是元素节点
    return node.nodeType === 1;
  }
}
CompileUtil = {
  getVal(vm, expr) {
    return expr.split(".").reduce((data, current) => {
      return data[current];
    }, vm.$data);
  },
  setValue(vm, expr, value) {
    expr.split(".").reduce((data, current, index, arr) => {
      if (index == Array.length - 1) {
        return (data[current] = value);
      }
      return data[current];
    }, vm.$data);
  },
  //解析v-mode这个指令
  model(node, expr, vm) {
    //mode是节点 expr是表达式 vm是当前实列 给输入框赋予value属性
    let fn = this.updater["modelUpdater"];
    new Watcher(vm, expr, newVal => {
      //给输入框加一个观察者 如果稍后数据更新了会触发此方法 会拿新值 给输入框赋值
      fn(node, newVal);
    });
    node.addEventListener("input", e => {
      //获取用户输入的内容
      let value = e.target.value;
      this.setValue(vm, expr, value);
    });
    let value = this.getVal(vm, expr);
    fn(node, value);
  },
  html(node, expr, vm) {
    //mode是节点 expr是表达式 vm是当前实列 给输入框赋予value属性
    let fn = this.updater["htmlUpdater"];
    new Watcher(vm, expr, newVal => {
      //给输入框加一个观察者 如果稍后数据更新了会触发此方法 会拿新值 给输入框赋值
      fn(node, newVal);
    });

    let value = this.getVal(vm, expr);
    fn(node, value);
  },
  getContentValue(vm, expr) {
    expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      return this.getVal(args[1]);
    });
  },
  on(node, expr, vm, eventName) {
    node.addEventListener(eventName, e => {
      vm[expr].call(vm, e);
    });
  },
  text(node, expr, vm) {
    let fn = this.updater["textUpdater"];
    let content = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      //给表达式每个{{}} 都加上观察者
      new Watcher(vm, args[1], () => {
        this.getContentValue(vm, expr); //返回了一个全的字符串
      });
      return this.getVal(vm, args[1]);
    });
    fn(node, content);
  },
  updater: {
    //把数据插入到节点中
    modelUpdater(node, value) {
      node.value = value;
    },
    htmlUpdater(node, value) {
      node.innerHTML = value;
    },
    textUpdater(node, value) {
      node.textContent = value;
    }
  }
};
class Vue {
  constructor(options) {
    //this.$el $data $options
    this.$el = options.el;
    this.$data = options.data;
    let computed = options.computed;
    let methods = options.methods;
    //这个根元素 存在 编译模板
    if (this.$el) {
      //把数据 全部转化成用Object。defineProperty来定义

      //{{getNewName}} reduce vm.$data.getNewName
      new Observer(this.$data);
      for (let key in computed) {
        Object.defineProperty(this.$data, key, {
          get: () => {
            return computed[key].call(this);
          }
        });
      }
      for (let key in methods) {
        Object.defineProperty(this, key, {
          get() {
            return methods[key];
          }
        });
      }
      this.proxyVm(this.$data);

      new Compiler(this.$el, this);
    }
  }
  proxyVm(data) {
    for (let key in data) {
      //{school:{name,age}}
      Object.defineProperty(this, key, {
        //实现可以通过vm取到对应的内容
        get() {
          return data[key]; //进行了转换操作
        },
        set(newVal) {
          data[key] = newVal;
        }
      });
    }
  }
}
