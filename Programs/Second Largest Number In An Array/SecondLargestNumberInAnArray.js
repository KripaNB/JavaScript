/*
 * Output:
Input the size of array:
5
Input 5 elements in the array:
element - 0 : 35
element - 1 : 4
element - 2 : 56
element - 3 : 89
element - 4 : 104
The Second largest element in the array is:  89 
*/

const { Console } = require('console');

const prompt = require('prompt-sync')();

var size = prompt("Input the size of array:\n");
var arr = [];
var largest = 0;
var secondLargest = 0;
var i, j = 0;
console.log("Input " + size + " elements in the array:\n");
for (i = 0; i < size; i++) {
    console.log("element - " + i + " : ");
    arr[i] = parseInt(prompt());
}
for (i = 0; i < size; i++)
{
    if (largest < arr[i])
    {
        largest = arr[i];
        j = i;
    }
}
for (i = 0; i < size; i++)
{
    if (i == j)
    {
        continue;
    }
    else if (secondLargest < arr[i])
    {
        secondLargest = arr[i];
    }
}
console.log(largest);
console.log("The Second largest element in the array is:  " + secondLargest + "\n");
