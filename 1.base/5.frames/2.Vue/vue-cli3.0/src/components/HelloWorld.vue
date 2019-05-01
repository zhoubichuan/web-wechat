<template>
  <div class="hello">
    123
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    axios.get("/api/getUser").then(data => {
      console.log(data);
    });
  }
};
</script>

<style lang="less">
@import "../assets/common.less";
.hello {
  color: @color;
}
</style>
