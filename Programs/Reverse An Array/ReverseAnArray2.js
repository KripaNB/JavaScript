/*
* Output:
  Original Array Elements : [ 1, 2, 3, 4, 5 ]
  Reversed Array Elements : [ 5, 4, 3, 2, 1 ]  
*/

const prompt = require('prompt-sync')();

var arr = [1, 2, 3, 4, 5];
console.log("Original Array Elements : " + arr);
var result = [];
for (let i = arr.length-1; i >=0; i--)
{
    result.push(arr[i]);
}
console.log("Reversed Array Elements : " + result);