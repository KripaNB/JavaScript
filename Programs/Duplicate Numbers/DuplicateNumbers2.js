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
    for (let c of inputArray)
    {
        let count = 0;
        for (let i = 0; i < inputArray.length; i++)
        {
            if (inputArray[i] == c)
                count++;
        }
        if (count > 1 && !duplicateArray.includes(c))
            duplicateArray.push(c);
    }
    return duplicateArray;
}