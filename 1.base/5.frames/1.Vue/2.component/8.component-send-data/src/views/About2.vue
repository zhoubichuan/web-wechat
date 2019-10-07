<template>
<div>
  $refs:获取组件实例
  <child ref="com"></child>
</div>
</template>
<script>
import child from './child5'
export default {
  components: {
    child
  },
  mounted () {
    console.log(this.$refs.my)
    console.log(this.$refs.com.show())
  }
}
</script>