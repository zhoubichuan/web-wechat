let Vue;

class Store {
  constructor(options) {
    let state = options.state
    this.getters = {}
    this.mutations = {}
    this.actions = {}
    this._vm = new Vue({
      data: {
        state
      }
    })
    if (options.getters) {
      let getters = options.getters
      forEach(getters, (gettersName, getterFn) => {
        Object.defineProperties(this.getters, gettersName, {
          get: () => {
            return getterFn(state)
          }
        })
      })
    }
  }
  get state() {
    return this._vm.state
  }
}

function forEach(obj, callback) {
  Object.keys(obj).forEach(item => callback(item, obj[item]))
}
let install = _Vue => {
  Vue = _Vue
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.store) {
        this.$store = this.$options.store
      } else {
        this.$store = this.$parent && this.$parent.$store
      }
    }
  })
};

export default {
  Store,
  install
}