/*
* Output:
  Enter a string : Google
  Gogle   
*/

const prompt = require('prompt-sync')();

var inputString = prompt("Enter a string : ");
var resultString = "";
for (var i = 0; i < inputString.length; i++) {
    if (!resultString.includes(inputString[i])) {
        resultString += inputString[i];
    }
}
console.log(resultString);