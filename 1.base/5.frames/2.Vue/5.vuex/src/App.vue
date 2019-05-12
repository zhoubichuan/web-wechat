<template>
  <div id="app">
    1{{lesson}}
    2{{className}}
    3{{u}}
    4{{getNewName}}
    5{{getNewUserName}}
    <button @click="change">修改状态</button>
  </div>
</template>

<script>
import { mapState, mapGetters,  mapActions } from "vuex";
export default {
  name: "app",
  methods: {
    ...mapActions("user", ["change_user"]),
    change() {
      this.$store.state.user.userName = "hello world";
      this['change_user']('jw')
      this.$store.commit('user/change_user','jw')
      this.$store.dispatch('user/change_user','jw')
    }
  },
  computed: {
    ...mapState(['lesson','className']),
    ...mapState("user", { u: s => s.userName }),
    ...mapGetters(['getNewName']),
    ...mapGetters('user',['getNewUserName'])
  }
};
</script> 
