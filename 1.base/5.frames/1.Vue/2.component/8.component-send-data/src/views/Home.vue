<template>
  <div>
    props:父组件传递子组件属性
    <child :a='1' :b='4'></child>
  </div>
</template>
<script>
import child from './child'
export default {
  components: {
    child
  }
}
</script>