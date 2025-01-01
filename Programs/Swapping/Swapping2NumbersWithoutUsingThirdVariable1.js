/*
 * Output:
   Enter a number: 10
   Enter another number: 20
   The numbers before swapping : number1 = 10; number2 = 20
   The numbers after swapping  : number1 = 20; number2 = 10
*/

const prompt = require("prompt-sync")();

var number1 = prompt("Enter a number: ");
var number2 = prompt("Enter another number: ");
console.log("The numbers before swapping : number1 = " + number1 + "; number2 = " + number2);
number1 = number1 * number2;
number2 = number1 / number2;
number1 = number1 / number2;
console.log("The numbers after swapping : number1 = " + number1 + "; number2 = " + number2);