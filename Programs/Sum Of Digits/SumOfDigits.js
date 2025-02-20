/*
* Output:
  Enter a number: 123
  Sum of digits is: 6
*/

const prompt = require('prompt-sync')();

let number = parseInt(prompt('Enter a number: '));
var remainder;
var sum = 0;
while (number > 0)
{
    remainder = number % 10;
    sum = sum + remainder;
    number = parseInt(number / 10);
}
console.log("Sum of digits is: " + sum);