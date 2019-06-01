<template>
  <div @click="show" class="red">
    bar components
    {{$store.state.username}}
  </div>
</template>
<script>
export default {
  asyncData({ store }) {
    //异步数据 这个方法只在服务端运行客户端是不会执行的
    return store.dispatch("set_username");
  },
  mounted() {
    setTimeout(() => {
      this.$bus.$emit("dinner", "ssssss");
    }, 2000);
    this.$bus.$on("dinner", data => {
      console.log(data);
    });
    this.$store.dispatch("set_username");
  },
  methods: {
    show() {
      alert(1);
    }
  }
};
</script>
<style scoped>
.red {
  background: red;
}
</style>
