<template>
  <div class="home">
    <HelloWorld msg="这里是sub1项目home页面，页面基于vue3.x开发"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
