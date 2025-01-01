/*
 * Output:
   Enter a number to check Pallindrome: 2112
   The number 2112 is a Pallindrome. 
*/

const prompt = require('prompt-sync')();

var number = prompt("Enter a number to check Pallindrome: ");
var temp = number;
var remainder;
var sum = 0;
while (number > 0) {
    remainder = number % 10;
    sum = (sum * 10) + remainder;
    number = parseInt(number / 10);
}
if (temp == sum) 
{
    console.log("The number " + temp + " is a Pallindrome.");
}
else
{
    console.log("The number " + temp + " is not a Pallindrome.");
}