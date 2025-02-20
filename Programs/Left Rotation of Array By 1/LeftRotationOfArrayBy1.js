/*
* Original Array: 1,2,3,4,5
  Left Rotated Array by 1: 2,3,4,5,1
*/

const prompt = require('prompt-sync')();

var originalArray = [1,2,3,4,5];
var leftRotatedArray = [];
console.log("Original Array: " + originalArray);
var x = originalArray[0];
for (var i = 1; i < originalArray.length; i++) {
    leftRotatedArray[i-1] = originalArray[i];
}
leftRotatedArray[originalArray.length-1] = x;
console.log("Left Rotated Array by 1: " + leftRotatedArray);
