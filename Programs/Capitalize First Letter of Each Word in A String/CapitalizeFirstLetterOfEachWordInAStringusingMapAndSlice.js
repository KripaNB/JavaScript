/*
* Output:
  Enter a string : hello world! this is a test.
  Capitalized Words: Hello World! This Is A Test.
*/

const prompt = require("prompt-sync")();

function capitalizeWords(str) {
  let words = str.split(' ');
  let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
}


const input = prompt("Enter a string: ");
const output = capitalizeWords(input);
console.log("Capitalized Words: " + output);