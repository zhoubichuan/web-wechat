<template>
  <div>
    $attrs:批量向下传入属性
    <child name="小明" age="23"></child>
  </div>
</template>
<script>
import child from './child3'
export default {
  components: {
    child
  }
}
</script>