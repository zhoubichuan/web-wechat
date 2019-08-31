<template>
  <div>
    <div class="">
      <div class="nav nav-stacked col-md-3">
        <li><router-link :to="{ name: 'userAdd' }">添加用户</router-link></li>
        <li><router-link :to="{ name: 'userList' }">用户列表</router-link></li>
      </div>
      <div class="col-md-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
