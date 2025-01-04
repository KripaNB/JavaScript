/*
 * Output:
   Enter a Number: 241234
   The Reverse order is: 432142    
*/

const prompt = require('prompt-sync')();

var number = prompt("Enter a Number: ");
var remainder, reverse = 0;
while (number > 0) {
    remainder = number % 10;
    reverse = reverse * 10 + remainder;
    number = parseInt(number / 10);
}
console.log("The Reverse order is: " + reverse);