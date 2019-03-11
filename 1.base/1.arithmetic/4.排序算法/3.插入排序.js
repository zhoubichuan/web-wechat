//插入排序：数组中先拿出一个数，然后再拿出一个数，像扑克牌一样按左小右大的方式比较后插入手中的牌；重复上述步骤。
//
var ary = [1, 23, 32, 12, 43, 54, 23, 434, 545, 56, 23];

// function insertSort(ary) {
//   var newAry = [];
//   newAry.push(ary[0]);
//   for (var i = 1; i < ary.length; i++) {
//     var cur = ary[i];
//     for (var j = newAry.length - 1; j >= 0; j--) {
//       var cur2 = newAry[j];
//       if (cur > cur2) {
//         newAry.splice(j + 1, 0, cur);
//         j = -1;
//       } else {
//         j--;
//         if (j == 0) {
//           newAry.unshift(cur);
//         }
//       }
//     }
//   }
//   return newAry;
// }
// var sort = insertSort(ary);
// console.log(sort);

//第二种方法
function insertSort(ary) {
  var key;
  var j;
  for (var i = 1; i < ary.length; i++) {
    key = ary[i];
    j = i - 1;
    while (j > -1 && ary[j] > key) {
      ary[j + 1] = ary[j];
      j--;
    }
    ary[j + 1] = key;
  }
  return ary;
}
console.log(insertSort(ary));
