/*
 * Output:
   Enter a string to check Pallindrome: historic
   historic is not a Pallindrome.
*/

const prompt = require('prompt-sync')();

var name = prompt("Enter a string to check Pallindrome: ");
var reverse = name.split('').reverse().join('');
if (name == reverse)
    console.log(name + " is a Pallindrome.");
else
    console.log(name + " is not a Pallindrome.");
