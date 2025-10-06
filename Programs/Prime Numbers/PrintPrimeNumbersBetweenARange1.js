/*
 * Output:
   Enter the start number: 2
   Enter the end number: 10
   2 
   3 
   5 
   7
*/

const prompt = require('prompt-sync')();

var startNumber = parseInt(prompt("Enter the start number: "));
var endNumber = parseInt(prompt("Enter the end number: "));
for (var i = startNumber; i <= endNumber; i++)
{
    var counter = 0;
    for (var j = 2; j <= i/2; j++)
    {
        if (i % j == 0)
        {
            counter++;
            break;
        }
    }
    if (counter == 0 && i != 1)
    {
        console.log(i + " ");
    }
}
