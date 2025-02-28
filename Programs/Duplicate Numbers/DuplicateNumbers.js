/*
* Output:
  Input Array : 4, 3, 2, 7, 8, 2, 3, 1
  Output : 2, 3

  Input Array : 1, 2, 3, 4, 5
  Output : 

  Input Array : 5, 5, 5, 5, 5
  Output : 5
*/

const prompt = require('prompt-sync')();

let inputArray = [5, 5, 5, 5, 5];
console.log("Input Array : " + inputArray);
console.log("Output : " + findDuplicate(inputArray));

function findDuplicate(inputArray) {
    let duplicateArray = [];
    let length = inputArray.length;
    for (let i = 0; i < length - 1; i++) 
    {
        for (let j = 0; j < length - i - 1; j++) 
        {
            if (inputArray[j] > inputArray[j + 1]) 
            {
                let temp = inputArray[j];
                inputArray[j] = inputArray[j + 1];
                inputArray[j + 1] = temp;
            }
        }
    }
    for (let i = 0; i < length - 1; i++) 
    {
        if (inputArray[i] == inputArray[i + 1]) 
        {
            if (!duplicateArray.includes(inputArray[i])) 
            {
                duplicateArray.push(inputArray[i]);
            }
        }
    }
    return duplicateArray;
}