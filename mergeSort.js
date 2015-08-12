function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  return merge(mergeSort(arr.slice(0, Math.floor(arr.length / 2))), mergeSort(arr.slice(Math.floor(arr.length / 2))));
}

function merge(arr1, arr2) {
  var p1 = 0;
  var p2 = 0;
  var arr3 = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      arr3.push(arr1[p1]);
      p1++;
    } else {
      arr3.push(arr2[p2]);
      p2++;
    }
  }

  while (p1 < arr1.length) {
    arr3.push(arr1[p1]);
    p1++;
  }

  while (p2 < arr2.length) {
    arr3.push(arr2[p2]);
    p2++;
  }

  return arr3;
}

var a1 = [10, 15, 2, 4, 28, 3, 19, 30];
console.log(mergeSort(a1));
// var a2 = [1, 2];

