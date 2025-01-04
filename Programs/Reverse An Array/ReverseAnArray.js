/*
* Output:
  Original Array Elements : 1,2,3,4,5
  Reversed Array Elements : 5 4 3 2 1  
*/

const prompt = require('prompt-sync')();

var arr = [1, 2, 3, 4, 5];
console.log("Original Array Elements : " + arr);
ResverseElements(arr, 0 , arr.length - 1);
console.log("Reversed Array Elements : " + arr);

function ResverseElements(arr, start, end) {
    while (start < end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}