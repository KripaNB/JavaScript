/*
* Original Array: 1,2,3,4,5
  Right Rotated Array by 1: 5,1,2,3,4
*/

const prompt = require('prompt-sync')();

var originalArray = [1,2,3,4,5];
var rightRotatedArray = [];
console.log("Original Array: " + originalArray);
var x = originalArray[originalArray.length-1];
for (var i = originalArray.length-1; i > 0; i--) {
  rightRotatedArray[i] = originalArray[i-1];
}
rightRotatedArray[0] = x;
console.log("Right Rotated Array by 1: " + rightRotatedArray);