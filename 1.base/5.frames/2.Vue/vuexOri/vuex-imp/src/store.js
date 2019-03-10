import Vue from "vue";
import Vuex from "./vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    a: {
      state: {
        count: 200
      },
      modules: {
        b: {
          state: {
            count: 300
          }
        }
      }
    }
  },
  state: {
    count: 100
  },
  getters: {
    newCount(state) {
      return state.count + 100;
    }
  },
  mutations: {
    change(state) {
      state.count += 10;
    }
  },
  actions: {
    change({ commit }) {
      setTimeout(() => {
        commit("change");
      }, 1000);
    }
  }
});
