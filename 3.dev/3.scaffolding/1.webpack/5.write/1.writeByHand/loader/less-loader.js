let less = require("less");
function loader(source) {
  let css = "";
  less.render(source, function(err, c) {
    css = c.css;
  });
  css = css.replace(/\n/g, "\\n");
}
module.exports = loader;
