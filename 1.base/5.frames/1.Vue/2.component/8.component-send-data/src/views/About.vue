<template>
  <div>
    $emit:子组件触发父组件的方法，通过回调的方式将修改的内容传递给父组件，其实就是一个发布定阅模式
    <child @click="change"></child>
  </div>
</template>
<script>
import child from './child2'
export default {
  components: {
    child
  },
  methods: {
    change () {
      alert(1)
    }
  }
}
</script>