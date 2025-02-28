/*
* Output:
  Enter the input string : babad
  Longest Pallindrome Substring of the input string : bab
*/

const prompt = require('prompt-sync')();

let inputString = prompt("Enter the input string : ");
console.log("Longest Pallindrome Substring of the input string : " + findLongestPallindromeSubstring(inputString));

function findLongestPallindromeSubstring(inputString) {
    let length = inputString.length;
    let longestPallindrome = "";
    let maxLength = 0;
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
                if (sub.length > maxLength) {
                    maxLength = sub.length;
                    longestPallindrome = sub;
                }
            }
        }
    }
    return longestPallindrome;    
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