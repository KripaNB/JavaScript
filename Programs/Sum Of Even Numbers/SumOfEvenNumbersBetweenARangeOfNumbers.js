/*
* Enter From number: 20
  Enter End number: 60
  Sum of even numbers from 20 to 60 is: 840
*/

const prompt = require('prompt-sync')();

var fromNumber = parseInt(prompt('Enter From number: '));
var endNumber = parseInt(prompt('Enter End number: '));
var sum = 0;
if(fromNumber < endNumber)
{
    for (let i = fromNumber; i <= endNumber; i++) {
        if(i % 2 == 0)
        {
            sum = sum + i;
        }
    }
}
console.log("Sum of even numbers from " + fromNumber + " to " + endNumber + " is: " + sum);