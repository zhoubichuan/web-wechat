let context = {
  //如果去context上取值，我希望取context.request上取
};
//js 一个方法 Object.defieProperty变种

function definegetter(key, property) {
  context.__defineGetter__("path", () => this[key][property]);
}
//代理 把取属性的值 通过reqeust来取
definegetter("request", "path");
definegetter("request", "url");
definegetter("request", "query");
definegetter("response", "body");
module.exports = context;
