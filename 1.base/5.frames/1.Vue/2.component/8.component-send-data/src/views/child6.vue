<template>
  <div @click="$parent.handleClick">B</div>
</template>
<script>
export default {
  data() {
    return {
      msg: "99"
    };
  },
  methods: {
    todo() {
      console.log("todo事件");
    }
  }
};
</script>
