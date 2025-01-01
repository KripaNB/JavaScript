/*
 * Output:
   Enter a number: 3
   The number is Prime 
*/

const prompt = require('prompt-sync')();

var number = prompt("Enter a number: ");
var isPrime = true;
for (var i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) 
{
    console.log("The number is Prime ");
}
else 
{
    console.log("The number is not Prime ");
}