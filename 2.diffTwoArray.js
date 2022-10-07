// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  let newArr = [];
  newArr = arr1.concat(arr2).filter((x)=>!arr1.includes(x) || !arr2.includes(x))
  console.log(newArr)
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);