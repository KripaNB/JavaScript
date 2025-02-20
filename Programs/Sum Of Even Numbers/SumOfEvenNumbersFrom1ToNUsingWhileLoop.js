/*
* Enter a number: 100
  Sum of even numbers from 1 to 100 is: 2550
*/

const prompt = require('prompt-sync')();

var number = parseInt(prompt('Enter a number: '));
var sum = 0;
var i = 2;
while (i <= number) {
    sum += i;
    i += 2;
}
console.log("Sum of even numbers from 1 to " + number + " is: " + sum);