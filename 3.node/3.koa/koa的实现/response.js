let response = {
  set body(value) {
    this._body = value;
  },
  get body() {
    return this._body;
  }
};
ctx.body
module.exports=response