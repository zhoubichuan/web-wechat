export default {
  namespaced: true,
  state: {
    userName: "我"
  },
  getters: {
      getNewUserName(state){
          return '是'+state.userName
      }
  },
  mutations: {
      chage_user(state,payload){
          state.userName=payload
      }
  },
  actions: {
      change_user({commit},payload){
          setTimeout(()=>{
              commit('change_user',payload)
              //在action中可以多次触发mutation
          },1000)
          setTimeout(()=>{
              commit('change_user','hello')
              //在action中可以多次触发mutation
          },2000)
      }
  }
};
