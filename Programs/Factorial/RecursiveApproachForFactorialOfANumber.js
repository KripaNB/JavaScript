/*
 * Output:
   Enter a Number : 5
   Factorial of 5 is: 120 
*/

const prompt = require('prompt-sync')();

var number = prompt("Enter a Number : ");
var factorial = RecursiveFactorial(number);
console.log(`Factorial of ${number} is: ${factorial}`);

function RecursiveFactorial(number) {
    if (number == 1) {
        return 1;
    }
    else {
        return number * RecursiveFactorial(number - 1);
    }
}