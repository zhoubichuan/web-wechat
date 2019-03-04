let Vue;

class ModuleCollection {
  constructor(options) {
    this.register([], options);
  }
  register(path, rawModule) {
    let newModule = {
      _raw: rawModule,
      _children: {},
      state: rawModule.state
    };
    if (path.length == 0) {
      this.root = newModule;
    } else {
      let parent = path.slice(0, -1).reduce((root, current) => {
        return root._children[current];
      }, this.root);
      parent._children[path[path.length - 1]] = newModule;
    }
    if (rawModule.modules) {
      forEach(rawModule.modules, (childName, module) => {
        this.register(path.concat(childName), module);
      });
    }
  }
}

class Store {
  constructor(options) {
    let state = options.state;
    this.getters = {};
    this.mutations = {};
    this.actions = {};
    this._vm = new Vue({
      data: {
        state
      }
    });
    this.modules = new ModuleCollection(options);
    if (options.getters) {
      let getters = options.getters;
      forEach(getters, (getterName, getterFn) => {
        Object.defineProperty(this.getters, getterName, {
          get: () => {
            return getterFn(state);
          }
        });
      });
    }
    let mutations = options.mutations;
    forEach(mutations, (mutationName, mutationFn) => {
      this.mutations[mutationName] = () => {
        mutationFn.call(this, state);
      };
    });
    let actions = options.actions;
    forEach(actions, (actionName, actionFn) => {
      this.actions[actionName] = () => {
        actionFn.call(this, this);
      };
    });
    let { commit, dispatch } = this;
    this.commit = type => {
      commit.call(this, type);
    };
    this.dispatch = type => {
      dispatch.call(this, type);
    };
  }
  get state() {
    return this._vm.state;
  }
  commit(type) {
    this.mutations[type]();
  }
  dispatch(type) {
    this.actions[type]();
  }
}
function forEach(obj, callback) {
  Object.keys(obj).forEach(item => callback(item, obj[item]));
}
let install = _Vue => {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.store) {
        this.$store = this.$options.store;
      } else {
        this.$store = this.$parent && this.$parent.$store;
      }
    }
  });
};
export default {
  Store,
  install
};
