Component({
  properties:{
    item:{
      type:Object,
      value:{
      }
    }
  },
  data:{
  },
  methods:{
    onTap(e){
      let detail = e.currentTarget.dataset.detail;
      this.triggerEvent("myEvent",detail);
    }
  }
})