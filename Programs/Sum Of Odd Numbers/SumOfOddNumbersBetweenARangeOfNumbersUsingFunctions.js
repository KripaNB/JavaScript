/*
* Enter From number: 20
  Enter End number: 60
  Sum of odd numbers from 20 to 60 is: 800
*/

const prompt = require('prompt-sync')();

var fromNumber = parseInt(prompt('Enter From number: '));
var endNumber = parseInt(prompt('Enter End number: '));
var sum = FindSumOfEvenNumbers(fromNumber, endNumber);
console.log("Sum of odd numbers from " + fromNumber + " to " + endNumber + " is: " + sum);

function FindSumOfEvenNumbers(fromNumber, endNumber)
{
    var sum = 0;
    if(fromNumber < endNumber)
    {
        for (let i = fromNumber; i <= endNumber; i++) {
            if(i % 2 == 1)
            {
                sum = sum + i;
            }
        }
    }
    return sum;
}