/*
* Output:
  Enter the input string : Hello
  All Substrings of the input string : H,He,Hel,Hell,Hello,e,el,ell,ello,l,ll,llo,l,lo,o
*/

const prompt = require('prompt-sync')();

let inputString = prompt("Enter the input string : ");
console.log("All Substrings of the input string : " + findAllSubstrings(inputString));

function findAllSubstrings(inputString) {
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
            subStrings.push(sub);
        }
    }
    return subStrings;    
}