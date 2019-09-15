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
        user,
        a: {
            state: {
                count: 200
            },
            mutations: {
                change(state) {
                    console.log('----')
                }
            },
            modules: {
                b: {
                    state: {
                        count: 3000
                    }
                }
            }
        },
    },
    // strict:process.env.NODE_ENV !=='production',
    actions,
    mutations,
    state,
    getters
})