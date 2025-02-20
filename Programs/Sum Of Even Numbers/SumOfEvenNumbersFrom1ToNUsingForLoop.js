/*
* Enter a number: 100
  Sum of even numbers from 1 to 100 is: 2550
*/

const prompt = require('prompt-sync')();

var number = parseInt(prompt('Enter a number: '));
var sum = 0;
for (var i = 2; i <= number; i += 2) {
    sum = sum + i;
}
console.log("Sum of even numbers from 1 to " + number + " is: " + sum);