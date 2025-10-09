/*
 * Output:
   Enter a string: listen
   Enter another string: silent
   listen and silent are Anagrams
*/

const prompt = require('prompt-sync')();

let str1 = prompt("Enter a string: ");
let str2 = prompt("Enter another string: ");
let isAnagram = false;
for (let c of str1)
{
    if (!str2.includes(c))
    {
        isAnagram = false;
        break;
    }
    else
        isAnagram = true;
}
if(isAnagram && str1.length == str2.length)
    console.log(str1 + " and " + str2 + " are Anagrams");
else
    console.log(str1 + " and " + str2 + " are not Anagrams");