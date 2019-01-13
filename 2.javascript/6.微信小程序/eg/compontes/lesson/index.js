Component({
  properties:{
    info:{
      type:Object,
      value:{
        name:"zhou"
      }
    }
  },
  data:{

  },
  methods:{
    onTap(){
      let param={
        name:"vue"
      }
      this.triggerEvent("myEvent",detail);
    }
  }
})