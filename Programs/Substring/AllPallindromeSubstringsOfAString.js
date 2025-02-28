/*
* Output:
  Enter the input string : Hello
  All Pallindrome Substrings of the input string : H,e,l,ll,l,o
*/

const prompt = require('prompt-sync')();

let inputString = prompt("Enter the input string : ");
console.log("All Pallindrome Substrings of the input string : " + findAllPallindromeSubstrings(inputString));

function findAllPallindromeSubstrings(inputString) {
    let length = inputString.length;
    let subStrings = [];
    for (let i = 0; i < length; i++) 
    {
        for (let j = i; j < length; j++) 
        {
            let sub = "";
            for (let k = i; k <= j; k++) 
            {
                sub += inputString[k];
            }
            if (isPallindrome(sub)) {
                subStrings.push(sub);
            }
        }
    }
    return subStrings;    
}

function isPallindrome(sub) {
    let length = sub.length;
    for (let i = 0; i < length/2; i++) {
        if (sub[i] != sub[length - i - 1]) {
            return false;
        }
    }
    return true;
}