/* function breakingArray splits an array (first argument) into groups the length of size (second argument) and returns them as a 
two-dimensional array. */


function breakingArray(arr, size) {
  // Break it up.
  var newArray = [];
  for (var i = 0; i < arr.length; i+=size) {
    newArray.push(arr.slice(i, i + size));
  }
  return newArray;
}

breakingArray(["a", "b", "c", "d"], 2);
