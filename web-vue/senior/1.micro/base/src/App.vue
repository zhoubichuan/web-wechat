<template>
  <div>
    <el-menu id="nav" mode="horizontal" router=true>
      <el-menu-item index="/base">Home</el-menu-item>
      <el-menu-item index="/base/about">About</el-menu-item>
      <el-menu-item index="/sub1">sub1(vue3)</el-menu-item>
      <el-menu-item index="/sub2">sub2(react)</el-menu-item>
    </el-menu>
    <router-view v-show="$route.name" />
    <div id="sub1" v-show="!$route.name"></div>
    <div id="sub2" v-show="!$route.name"></div>
  </div>
</template>

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
