//冒泡排序的思想：当前项和后一项进行比较，如果当前项大于后一项，两者交换位置
var ary = [1, 3, 4, 6, 3, 2, 5];

function bubbleSort(ary) {
  for (var i = 0; i < ary.length - 1; i++) {
    for (var j = 0; j < ary.length - 1 - i; j++) {
      if (ary[j] > ary[j + 1]) {
        ary[j] = ary[j] + ary[j + 1];
        ary[j + 1] = ary[j] - ary[j + 1];
        ary[j] = ary[j] - ary[j + 1];
      }
    }
  }
  return ary;
}
console.log(bubbleSort(ary));

//-->优化:
var ary = [2, 1, 3, 5, 4];

function bubbleSort(ary) {
  var onoff = true;
  for (var i = 0; i < ary.length - 1; i++) {
    for (var j = 0; j < ary.length - 1 - i; j++) {
      if (ary[j] > ary[j + 1]) {
        onoff = true;
        ary[j] = ary[j] + ary[j + 1];
        ary[j + 1] = ary[j] - ary[j + 1];
        ary[j] = ary[j] - ary[j + 1];
      }
    }
    if (onoff) {
      onoff = false;
    } else {
      break;
    }
  }
  return ary;
}
