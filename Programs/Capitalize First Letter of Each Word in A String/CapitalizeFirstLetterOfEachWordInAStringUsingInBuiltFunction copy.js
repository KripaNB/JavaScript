/*
* Output:
  Enter a string : hello world! this is a test.
  Capitalized Words: Hello World! This Is A Test.
*/

const prompt = require("prompt-sync")();

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

const input = prompt("Enter a string: ");
const output = capitalizeWords(input);
console.log("Capitalized Words: " + output);