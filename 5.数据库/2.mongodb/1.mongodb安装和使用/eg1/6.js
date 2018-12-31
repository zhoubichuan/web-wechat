class User {
  constructor() {
    let users = [];
    for(let i=0;){
        users.push({id:i,age:i,})
    }
  }
  skip(skip) {
    this.skip = skip;
    return this
  }
  limit(limit) {
    this.limit = limit;
      return this
  }
  sort(sort) {
    this.sort = sort;
      return this
  }
  exec(){
this.users.sort((a,b)=>{
    return a.age - b.age
})
  }
}
let user=new User()
let result=user.skip().limit().sort().exec()
console.log(result)