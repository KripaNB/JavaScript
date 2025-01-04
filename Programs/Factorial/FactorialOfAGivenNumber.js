/*
 * Output:
   Enter a Number: 5
   Factorial of 5 is: 120
*/

const prompt = require('prompt-sync')();

var number = prompt("Enter a Number: ");
var factorial = 1;
for (var i = 1; i <= number; i++)
{
    factorial = factorial * i;
}
console.log("Factorial of " + number + " is: " + factorial);