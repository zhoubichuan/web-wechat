<template>
  <div id="app">
    <!--v-model = :value + input  -->
    <!-- :xxx.sync="xxx" = :"xxx" +this.$emit('update:xxx') -->
    <ScrollBall color="red" :target="500" :value.sync="pos4" ref="ball4"
      >红球</ScrollBall
    >
    <ScrollBall
      color="red"
      :value="pos4"
      :target="500"
      @update:value="value => (pos4 = value)"
      >红球</ScrollBall
    >
    <ScrollBall color="red" v-model="pos3" :target="500">红球</ScrollBall>
    <ScrollBall color="red" :value="pos1" :target="500" @input="input"
      >红球</ScrollBall
    >
    <ScrollBall color="blue" :value="pos2" :target="500">蓝球</ScrollBall>
    <button @click="getPostion">获取球1的位置</button>
    <button @click="stop">位置</button>
  </div>
</template>

<script>
import ScrollBall from "./components/ScrollBall.vue";
export default {
  name: "app",
  components: {
    ScrollBall
  },
  data() {
    return {
      pos1: 50,
      pos2: 60,
      pos3: 100,
      pos4: 200
    };
  },
  methods: {
    input(value) {
      this.pos1 = value;
    },
    stop() {
      this.$refs.ball4.stop();
    },
    getPostion(value) {
      console.log(value);
    }
  }
};
</script>

<style lang="less"></style>
