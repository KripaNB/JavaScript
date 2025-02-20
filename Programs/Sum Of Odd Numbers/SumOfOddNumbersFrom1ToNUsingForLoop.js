/*
* Enter a number: 100
  Sum of odd numbers from 1 to 100 is: 2500
*/

const prompt = require('prompt-sync')();

var number = parseInt(prompt('Enter a number: '));
var sum = 0;
for (var i = 1; i <= number; i += 2) {
    sum = sum + i;
}
console.log("Sum of odd numbers from 1 to " + number + " is: " + sum);