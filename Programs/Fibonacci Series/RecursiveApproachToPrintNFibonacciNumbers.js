/*
 * Output:
   Enter the length of the Fibonacci Series:
   10
   0 
   1 
   1 
   2 
   3 
   5 
   8 
   13 
   21 
   34 
*/

const prompt = require('prompt-sync')();

var length = prompt("Enter the length of the Fibonacci Series: ");
FibonacciSeries(0, 1, 1, length);

function FibonacciSeries(firstNumber, secondNumber, count, length) {
    console.log(firstNumber);
    if (count < length) {
        FibonacciSeries(secondNumber, firstNumber + secondNumber, count + 1, length);
    }
}