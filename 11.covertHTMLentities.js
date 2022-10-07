// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


function convertHTML(str) {
  var temp = str.split("")
  for(let i=0;i<temp.length;i++){
    switch(temp[i]){

      case "<" :
      temp[i] = "&lt;"
      break

      case ">" :
      temp[i] = "&gt;"
      break

      case "&" :
      temp[i] = "&amp;"
      break

      case "'" :
      temp[i] = "&apos;"
      break

      case '"' :
      temp[i] = "&quot;"
    }
  }
  temp = temp.join("")
  console.log(temp)
  return temp
}

convertHTML("Dolce & Gabbana");