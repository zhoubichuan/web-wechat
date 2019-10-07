<template>
  <div style="color:red">{{this.parentMsg}}</div>
</template>
<script>
export default {
  inject: ["parentMsg"]
};
</script>
