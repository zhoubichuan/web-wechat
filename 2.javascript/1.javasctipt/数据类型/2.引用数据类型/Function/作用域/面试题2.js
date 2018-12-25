var n = 0;
function a() {
  var n = 10;
  function b() {
    a++;
    console.log(n);
  }
  b();
  return b;
}
var c = a();
c();
console.log(n);
