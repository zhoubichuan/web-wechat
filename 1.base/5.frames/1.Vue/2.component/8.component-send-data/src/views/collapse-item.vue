<template>
  <div>
      <div class="title" @click="change">{{title}}</div>
      <div v-show="show">
          <slot></slot>
      </div>
  </div>
</template>
<script>
export default {
  props: ['title'],
  data () {
    return { show: false }
  },
  methods: {
    change () {
      this.$parent.cut(this._uid)
      this.show = !this.show
    }
  }
}
</script>