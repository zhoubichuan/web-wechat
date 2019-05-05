<template>
  <div>
      <input type="text" v-model="username">
      <button @click="toList">去列表页</button>
  </div>
</template>
<script>
export default {
  name: "add",
  methods: {
    toList() {
      this.$router.push("/user/List");
    }
  },
  //路由钩子函数
  beforeRouterLeave(to, from, next) {
    if (this.username) {
      let confirm = window.confirm("你确定要离开吗");
      if (confirm) {
        next();
      }
    } else {
      next();
    }
  },
  data() {
    return { username: "" };
  }
};
</script>
