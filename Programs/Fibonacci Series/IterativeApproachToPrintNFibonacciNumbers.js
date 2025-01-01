/*
 * Output:
   Enter the number of elements to print: 10
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

const prompt = require("prompt-sync")();

var numberOfElements = prompt("Enter the number of elements to print: ");
var firstNumber = 0;
var secondNumber = 1;
var nextNumber;

if (numberOfElements < 2)
{
  console.log("Enter a number greater than 2");
}
else
{
  console.log(firstNumber + "\n" + secondNumber);
  for (var i = 2; i < numberOfElements; i++)
  {
    nextNumber = firstNumber + secondNumber;
    console.log(nextNumber);
    firstNumber = secondNumber;
    secondNumber = nextNumber;
  }
}