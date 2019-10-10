<template>
  <div id="app">
    <h2>vue组件之间的八种传值方式</h2>
    <div id="nav">
      <router-link to="/">1.props父传子</router-link>
      <router-link to="/about">2.$emit子传父</router-link>
      <router-link to="/1">3.$attr</router-link>
      <router-link to="/about1">4.$listeners</router-link>
      <router-link to="/2">5.$parent</router-link>
      <router-link to="/about2">6.$refs</router-link>
      <router-link to="/3">7.EventBus</router-link>
      <router-link to="/about3">8.Provide&inject</router-link>
      <router-link to="#">9.vuex</router-link>
    </div>
    <router-view class="content" />
  </div>
</template>
<script>
export default {
  data(){
    return {a:1}
  }
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  text-align: left;
  width: 150px;
  background: #f2f2f2;
  float: left;
}

#nav a {
  display: block;
  font-weight: bold;
  color: #2c3e50;
  margin-top: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.content {
  width: calc(100% - 150px);
  margin-left: 150px;
}
</style>
