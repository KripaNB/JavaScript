/*
* Output:
  Enter number : 245639
  Number of digits is : 6  
*/

const prompt = require('prompt-sync')();

var number = prompt("Enter number : ");
var count = 0;
while (number > 0)
{
    number = Math.floor(number / 10);
    count++;
}
console.log("Number of digits is : " + count);