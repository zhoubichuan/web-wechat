<template>
  <div>
    eventBus:跨组件通知
    <child ></child>
  </div>
</template>
<script>
import child from "./child8";
export default {
  components: {
    child
  },
  mounted() {
    this.$nextTick(() => {
      this.$bus.$emit("my", "我是Grandson1");
    });
  }
};
</script>