// Spinal Tap Case

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


function spinalCase(str) {
  var a = str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase()
  console.log(a)
  return a;
}

spinalCase('This Is Spinal Tap');