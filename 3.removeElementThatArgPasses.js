// Seek and Destroy

// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

function destroyer(arr) {
  var filteredArray = []

  const valsToRemove = Object.values(arguments).slice(1);
  for(let i = 0;i<arr.length;i++){
    let removeElement = false
    for(let j=0;j<valsToRemove.length;j++){
      if(arr[i]===valsToRemove[j]){
        removeElement = true

      }
    }
    if(!removeElement){
      filteredArray.push(arr[i])
    }
  }
console.log(filteredArray)
  return filteredArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);



// Using filter method

function destroyer(arr) {
    const valsToRemove = Object.values(arguments).slice(1);
    return arr.filter((x)=>!valsToRemove.includes(x))

}


