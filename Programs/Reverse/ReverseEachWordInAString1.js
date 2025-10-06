/*
* Output:
  Enter a String: Hello World
  Reverse Word String: olleH dlroW
*/

const prompt = require("prompt-sync")();

function reverseWordsInString(inputString) {
    let reversedWordString = "";
    let charList = "";

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === ' ' || i === inputString.length - 1) 
        {
            if (i === inputString.length - 1) 
            {
                charList = charList + inputString[i];
            }
            for (let j = charList.length - 1; j >= 0; j--) 
            {
                reversedWordString = reversedWordString + charList[j];
            }
            reversedWordString += ' ';
            charList = "";
        } 
        else 
        {
            charList = charList + inputString[i];
        }
    }
    return reversedWordString.trim();
}

const inputString = prompt("Enter a String: ");
console.log("Reverse Word String:", reverseWordsInString(inputString));
