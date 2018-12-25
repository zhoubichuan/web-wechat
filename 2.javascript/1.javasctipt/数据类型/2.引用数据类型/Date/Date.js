//获取当前自己电脑的时间：不能做重要的用途，例如：淘宝秒杀
var time = new Date();

function formatTime() {
  var time = new Date();
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  var day = time.getDate();
  var w = time.getDay(); //0-6周日到周六
  var wStr = "日一二三四五六";
  var week = wStr.charAt(w);
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  var msSeconds = time.getMilliseconds();
  return (
    year +
    "年" +
    zero(month) +
    "月" +
    zero(day) +
    "日" +
    "星期" +
    week +
    " " +
    zero(hours) +
    "时" +
    zero(minutes) +
    "分" +
    zero(seconds) +
    "秒" +
    zero(msSeconds) +
    "毫秒"
  );
}

function zero(value) {
  return value < 10 ? "0" + value : value;
}
console.log(formatTime());
