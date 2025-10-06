/*
* Output:
  Enter a String: Hello World
  Reverse Word String: olleH dlroW
*/

const prompt = require("prompt-sync")();

function reverseWordsInString(inputString) {
    let inputArray = inputString.split(" ");
    let reversedArray = [];
    for (let i = 0; i < inputArray.length; i++)
    {
        let reverse = "";
        for (let c of inputArray[i])
            reverse = c + reverse;
        reversedArray.push(reverse);
    }
    return reversedArray.join(" ");
}

const inputString = prompt("Enter a String: ");
console.log("Reverse Word String:", reverseWordsInString(inputString));