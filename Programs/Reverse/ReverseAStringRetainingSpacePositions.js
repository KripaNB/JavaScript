/*
* Output:
  Enter a String: hello world
  Reversed Strings with spaces: dlrow olleh

  Enter a String: Hi I Am Kripa 
  Reversed Strings with spaces: ap i rK mAIiH  
*/

const prompt = require("prompt-sync")();

function reverseStringWithSpaces(inputString) {
    let n = inputString.length;
    let charArray = new Array(n);

    let letters = [];
    for (let i = 0; i < n; i++)
    {
        if (inputString[i] !== ' ')
        {
            letters.push(inputString[i]);
        }
    }
    
    let lettersIndex = letters.length-1;
    for (let i = 0; i < n; i++)
    {
        if (inputString[i] === ' ')
        {
            charArray[i] = ' ';
        }
        else
        {
            charArray[i] = letters[lettersIndex];
            lettersIndex--;
        }
    }

    let result = "";
    for (let i = 0; i < n; i++)
    {
        result = result + charArray[i];
    }
    return result;
}

const inputString = prompt("Enter a String: ");
console.log("Reversed Strings with spaces: ", reverseStringWithSpaces(inputString));