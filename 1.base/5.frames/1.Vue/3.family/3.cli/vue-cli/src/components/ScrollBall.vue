<template>
  <div class="ball" :style="style" :id="ballId">
    <slot></slot>
  </div>
</template>
<script>
// 组件的id问题 _uid
//属性校验 --> 计算属性
//双向通信 props + emit / v-model / .sync
//数据绑定问题 $refs 拿到组件内部的方法 来调用组件中的方法
export default {
  name: "scroll-ball",
  props: {
    color: {
      type: String,
      default: "white"
    },
    value: {
      type: Number,
      default: 0
    },
    target: {
      type: Number,
      target: 300
    }
  },
  methods: {
    stop() {
      this.$emit("end");
      cancelAnimationFrame(this.timer);
    }
  },
  mounted() {
    //单向数据流 子组件通知父亲 当前自己的位置 ，父亲更新位置 再传递给子组件
    let ball = document.getElementById(this.ballId);
    this.timer;
    let fn = () => {
      let left = this.value;
      if (left >= this.target) {
        return cancelAnimationFrame(this.timer);
      }
      this.$emit("input", left + 2);
      this.$emit("update:value", left + 2);
      ball.style.transform = `translate(${left}px)`;
      this.timer = requestAnimationFrame(fn);
    };
    this.timer = requestAnimationFrame(fn);
  },
  computed: {
    ballId() {
      return "ball" + this._uid;
    },
    style() {
      return {
        background: this.color
      };
    }
  }
};
</script>

<style lang="less" scoped>
.ball {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
  line-height: 100%;
  border: 1px solid red;
  line-height: 100px;
}
</style>
