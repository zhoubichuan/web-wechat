<template>
  <div id="app">
    <div class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a>管理</a>
        </div>
        <ul class="navbar-nav nav">
          <li>
            <router-link :to="{name:'home'}">首页</router-link>
          </li>
          <li>
            <router-link :to="{name:'profile'}">个人中心</router-link>
          </li>
          <li>
            <router-link :to="{path:'/user'}">用户</router-link>
          </li>
          <li>
            <router-link :to="{name:'login'}">登录</router-link>
          </li>
        </ul>
      </div>
      
    </div>
    <div class="container">
      <router-view></router-view>
       <router-view name="name"></router-view>
        <router-view name="version"></router-view>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
