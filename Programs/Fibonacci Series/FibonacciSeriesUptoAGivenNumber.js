/*
 * Output:
   Enter a number upto which print the Fibonacci Series: 13
   0 
   1 
   1 
   2 
   3 
   5 
   8
*/

const prompt = require("prompt-sync")();

var number = prompt("Enter a number upto which print the Fibonacci Series: ");
var firstNumber = 0;
var secondNumber = 1;
var nextNumber;
console.log(firstNumber + "\n" + secondNumber);
nextNumber = firstNumber + secondNumber;
while (nextNumber < number) {
  console.log(nextNumber);
  firstNumber = secondNumber;
  secondNumber = nextNumber;
  nextNumber = firstNumber + secondNumber;
}