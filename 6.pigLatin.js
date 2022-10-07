// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.


function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) {
    return str + "way";
  }
  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  console.log(consonantCluster)
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

console.log(translatePigLatin("consonant"));