<template>
  <div>
    <div>UserDetail{{ this.$route.query.id }}</div>
    问号传参 {{ this.$route.params.id }}通过路径
  </div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log("enter");
    next();
  },
  //
  beforeRouteUpdate(to, from, next) {
    alert(1);
    next();
  }
  //可以通过监控$route 实现加载数据
  //   watch:{
  //       $route(){
  //           alert(1)
  //       }
  //   }
};
</script>
