function loader(source) {
  console.log("loader1");
  return source;
}
loader.pitch = function() {
  console.log("loader-pitch1");
  return "ss";
};
module.exports = loader;
