/*
* Enter a number: 100
  Sum of odd numbers from 1 to 100 is: 2500
*/

const prompt = require('prompt-sync')();

var number = parseInt(prompt('Enter a number: '));
var sum = 0;
var i = 1;
while (i <= number) {
    sum += i;
    i += 2;
}
console.log("Sum of odd numbers from 1 to " + number + " is: " + sum);