function get(N) {
  return sum(0, N, []);
}
function sum(start, N, arr) {
  if (arr.length === N) {
    if (is_solution(arr, N)) {
      return [arr];
    } else {
      return [];
    }
  }
  var j = Math.floor(start / N);
  let solutions = [];
  for (var i = j * N; i < (j + 1) * N; i++) {
    const _q = [...arr, i];
    // console.log(i + N, N, _q);
    solutions = solutions.concat(sum(i + N, N, _q));
  }
  return solutions;
}
function is_solution(arr, N) {
  const h = [];
  const v = [];
  const xy = [];
  const y_x = [];
  for (var i = 0; i < arr.length; i++) {
    let sum = arr[i];
    let x = sum % N;
    let y = Math.floor(sum / N);
    let _y_x = x + y;
    let _xy = x - y + N;
    h[x] = h[x] ? h[x] + 1 : 1;
    v[y] = v[y] ? v[y] + 1 : 1;
    xy[_xy] = xy[_xy] ? xy[_xy] + 1 : 1;
    y_x[_y_x] = y_x[_y_x] ? y_x[_y_x] + 1 : 1;
    if (h[x] > 1 || v[y] > 1 || xy[_xy] > 1 || y_x[_y_x] > 1) {
      return false;
    }
  }
  return true;
}
console.log(get(4));
