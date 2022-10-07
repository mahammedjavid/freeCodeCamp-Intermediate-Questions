function sumFibs(num) { 
  var numberOne = 0
  var numberTwo = 1
  var nextTerm;
  for(let i=0;i<num;i++){

    nextTerm = numberOne + numberTwo
    numberOne = numberTwo
    numberTwo = nextTerm
  }

  return numberTwo;
}

console.log(sumFibs(2));