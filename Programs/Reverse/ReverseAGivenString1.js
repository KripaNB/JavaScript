/*
 * Output:
   Enter a string: Archer
   The Reverse string is: rehcrA
*/

const prompt = require('prompt-sync')();

var name = prompt("Enter a string: ");
var reverse = "";
for (var i = name.length - 1; i >= 0; i--) {
    reverse += name[i];
}
console.log("The Reverse string is: " + reverse);