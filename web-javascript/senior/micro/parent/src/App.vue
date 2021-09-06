<template>
  <div>
    <div id="nav">
      <router-link to="/">首页 parent</router-link> |
      <router-link to="/react-deom">react deom</router-link> |
      <router-link to="/vue-demo">vue 2.x deom</router-link>
    </div>
    <router-view />
    <div id="subapp-viewport"></div>
  </div>
</template>
<script>
export default {
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
