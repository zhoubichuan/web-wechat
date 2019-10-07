<template>
  <div>
    <button >点我啊</button>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$bus.$on("my", data => {
      console.log(data);
    });
  }
};
</script>