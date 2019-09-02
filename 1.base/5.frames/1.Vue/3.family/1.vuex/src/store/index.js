import Vue from 'vue'
import vuex from './vuex.js'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'
import user from './modules/user'

Vue.use(vuex)

export default new vuex.Store({
    modules: {
        user
    },
    // strict:process.env.NODE_ENV !=='production',
    actions,
    mutations,
    state,
    getters
})