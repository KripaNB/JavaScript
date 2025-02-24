/*
* Output:
  Enter a string : hello world! this is a test.
  Capitalized Words: Hello World! This Is A Test.
*/

const prompt = require("prompt-sync")();

function capitalizeWords(str) {
  let result = "";
  let capitalizeNext = true;

  for (let i = 0; i < str.length; i++) {
      let char = str[i];

      if (capitalizeNext && char >= 'a' && char <= 'z') {
          // Convert lowercase to uppercase manually
          result += String.fromCharCode(char.charCodeAt(0) - 32);
      } else {
          result += char;
      }

      // Set capitalizeNext to true if current char is a space or punctuation
      capitalizeNext = (char === ' ' || char === '\t' || char === '\n');
  }

  return result;
}


const input = prompt("Enter a string: ");
const output = capitalizeWords(input);
console.log("Capitalized Words: " + output);