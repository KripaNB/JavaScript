/*
 * Output:
   Enter a string: Archer
   The Reverse string is: rehcrA
*/

const prompt = require('prompt-sync')();

var name = prompt("Enter a string: ");
var reverse = name.split('').reverse().join('');
console.log("The Reverse string is: " + reverse);