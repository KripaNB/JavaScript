/*
* Original Array: 1,2,3,4,5
  Enter Position of rotation: 3
  Left Rotated Array by 3: 4,5,1,2,3
*/

const prompt = require('prompt-sync')();

var originalArray = [1,2,3,4,5];
var leftRotatedArray = [];
console.log("Original Array: " + originalArray);
var position = parseInt(prompt("Enter Position of rotation: "));
var count = 1;
while (count <= position)
{
    var x = originalArray[0];
    for (var i = 1; i < originalArray.length; i++) {
        leftRotatedArray[i-1] = originalArray[i];
    }
    leftRotatedArray[originalArray.length-1] = x;
    originalArray = leftRotatedArray
    count++;
}
console.log("Left Rotated Array by " + position + ": " + leftRotatedArray);