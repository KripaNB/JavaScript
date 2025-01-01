/*
* Output:
  Enter the Nth number of the Fibonacci Series to be printed: 10
  34
*/

const prompt = require('prompt-sync')();

var NthNumber = prompt("Enter the Nth number of the Fibonacci Series to be printed: ");
NthNumber = NthNumber - 1;
console.log(NthFibonacciNumber(NthNumber));

function NthFibonacciNumber(number) {
    var firstNumber = 0;
    var secondNumber = 1;
    if (number == 0) {
        return firstNumber;
    }
    for (var i = 2; i <= number; i++) {
        nextNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = nextNumber;
    }
    return secondNumber;
}