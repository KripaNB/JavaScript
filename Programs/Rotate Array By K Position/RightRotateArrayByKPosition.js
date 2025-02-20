/*
* Original Array: 1,2,3,4,5
  Enter Position of rotation: 3
  Right Rotated Array by 3: 3,4,5,1,2
*/

const prompt = require('prompt-sync')();

var originalArray = [1,2,3,4,5];
var rightRotatedArray = [];
console.log("Original Array: " + originalArray);
var position = parseInt(prompt("Enter Position of rotation: "));
var count = 1;
while (count <= position)
{
    var x = originalArray[originalArray.length-1];
    for (var i = originalArray.length-1; i > 0; i--) {
      rightRotatedArray[i] = originalArray[i-1];
    }
    rightRotatedArray[0] = x;
    originalArray = rightRotatedArray
    count++;
}
console.log("Right Rotated Array by " + position + ": " + rightRotatedArray);