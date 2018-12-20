let url = require("url");
let request = {
  //属性的访问器 Object.defineProperty({get})
  get url() {
    return this.req.url;
  },
  get path() {
    let { pathname } = url.parse(this.req.url);
    return pathname;
  },
  get query() {
    let { query } = url.parse(this.req.url, true);
    return query;
  }
};
