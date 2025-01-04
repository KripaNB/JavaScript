/*
 * Output:
   Enter a Number: 8
   Factorial is: 40320
*/

const prompt = require('prompt-sync')();

var number = prompt("Enter a Number: ");
var factorial = 1;
while(number != 1)
{
    factorial = factorial * number;
    number = number - 1;
}
console.log("Factorial is: " + factorial);