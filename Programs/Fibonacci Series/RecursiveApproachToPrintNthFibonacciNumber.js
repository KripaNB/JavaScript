/*
 * Output:
   Enter the Nth number of the Fibonacci Series: 10
   34
*/

const prompt = require('prompt-sync')();

var NthNumber = prompt("Enter the Nth number of the Fibonacci Series: ");
NthNumber = NthNumber - 1;
console.log(NthFibonacciNumber(NthNumber));

function NthFibonacciNumber(number) {
    if (number == 0 || number == 1)
    {
        return number;
    }
    else
    {
        return NthFibonacciNumber(number - 1) + NthFibonacciNumber(number - 2);
    }
}