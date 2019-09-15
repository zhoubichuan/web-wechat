<template>
  <div id="app">
    <router-link to="/">bar</router-link>
    <router-link to="/foo">foo</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  components: {},
  metaInfo: {
    title: "default title"
  }
};
</script>
