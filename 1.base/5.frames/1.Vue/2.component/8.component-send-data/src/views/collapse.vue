<template>
 <div class="wrap">
    <slot></slot>
 </div>
</template>
<script>
export default {
  methods: {
    cut (childId) { // 只要儿子点击了 我就知道当前点击的是谁
      this.$children.forEach(child => {
        if (child._uid !== childId) {
          child.show = false
        }
      })
    }
  }
}
</script>