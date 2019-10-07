<template>
  <collapse>
      <collapse-item title="react">内容1</collapse-item>
      <collapse-item title="vue">内容2</collapse-item>
      <collapse-item title="node">内容3</collapse-item>
  </collapse>
</template>
<script>
import collapse from './collapse'
import collapseItem from './collapse-item'
export default {
  components: {
    collapse,
    collapseItem
  }
}
</script>