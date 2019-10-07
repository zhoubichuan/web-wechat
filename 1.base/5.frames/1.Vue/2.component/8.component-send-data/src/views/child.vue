<template>
  <button style="width:150px">{{msg}}{{a}}{{b}}</button>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      default: '点我啊'
    },
    a: {
      type: Number
    },
    b: {
      type: Number,
      validator (value) {
        // 属性校验
        return value > 3
      }
    },
    arr: {
      type: Array,
      default: () => [1, 2] // 属性校验中 如果是数组/对象 需要将默认值返回
    }
  }
}
</script>