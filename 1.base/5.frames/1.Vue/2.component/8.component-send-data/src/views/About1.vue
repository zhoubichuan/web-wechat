<template>
  <div class="about">
    $listeners：批量向下传入方法
    <child @click="change" @mouseup='change'></child>
  </div>
</template>
<script>
import child from './child4'
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