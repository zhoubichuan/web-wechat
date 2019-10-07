<template>
  <div>
    Provide:在父级中注入数据
    Inject:在任意子组件总可以注入父级数据
    <child></child>
  </div>
</template>
<script>
import child from './child7'
export default {
  components: {
    child
  },
  provide(){
    return {parentMsg:'父亲'}
  }
}
</script>