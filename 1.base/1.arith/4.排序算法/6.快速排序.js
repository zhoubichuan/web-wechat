//快速排序：首先从中间分割成两部分，左边放大的，中间放分割的那个数，右边放小的；左边和右边的数组重复上述循环。
var ary = [12, 13, 23, 12, 24, 14, 45, 23, 15, 17];
function quickSort(ary) {
  if (ary.length <= 1) {
    return ary;
  }
  var pointIndex = Math.floor(ary.length / 2);
  var pointValue = ary.splice(pointIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < ary.length; i++) {
    var cur = ary[i];
    cur < pointValue ? left.push(cur) : right.push(cur);
  }
  return quickSort(left).concat([pointValue], quickSort(right));
}
var sort = quickSort(ary);
console.log(sort);
