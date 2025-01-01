/*
 * Output:
   Enter a string to check Pallindrome: madam
   madam is a Pallindrome.
*/

const prompt = require('prompt-sync')();

var name = prompt("Enter a string to check Pallindrome: ");
var reverse = '';
for (var i = name.length - 1; i >= 0; i--) {
    reverse = reverse + name[i];
}
if (name == reverse) 
{
    console.log(name + " is a Pallindrome.");
} 
else 
{
    console.log(name + " is not a Pallindrome.");
}