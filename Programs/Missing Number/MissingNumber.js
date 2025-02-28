/*
* Problem : Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one missing number.

  Output:
  Input Array : 3, 0, 1
  Missing Number : 2

  Input Array : 0, 1, 2, 4, 5
  Missing Number : 3
*/

const prompt = require('prompt-sync')();

let inputArray = [0, 1, 2, 4, 5];
console.log("Input Array : " + inputArray);
console.log("Missing Number : " + findMissingNumber(inputArray));

function findMissingNumber(inputArray) {
    let length = inputArray.length;
    let expectedSum = (length * (length + 1)) / 2;
    let actualSum = 0;
    for (let i = 0; i < length; i++) {
        actualSum += inputArray[i];
    }
    return expectedSum - actualSum;    
}