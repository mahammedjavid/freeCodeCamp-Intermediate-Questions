// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.


function whatIsInAName(collection, source) {
  const arr = [];
  const sourceKeys = Object.keys(source)
var a = collection.filter((x)=> sourceKeys.every((key)=>x.hasOwnProperty(key) && x[key] === source[key]))
  console.log(a)
  return a
  
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });