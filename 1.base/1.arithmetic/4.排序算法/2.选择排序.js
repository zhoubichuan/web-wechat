function selectSort(arr) {
  var temp;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i] + arr[j];
        arr[j] = arr[i];
        arr[i] = temp - arr[i];
      }
    }
    i++;
  }
  return arr;
}
let arr = [1, 310, 23, 4, 52, 2, 2.3, 4, 56, 1];
selectSort(arr);
