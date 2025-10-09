/*
 * Output:
   Enter a string: listen
   Enter another string: silent
   listen and silent are Anagrams
*/

const prompt = require('prompt-sync')();

let str1 = prompt("Enter a string: ");
let str2 = prompt("Enter another string: ");
let sortedStr1 = str1.split('').sort().join('');
let sortedStr2 = str2.split('').sort().join('');
if(sortedStr1 === sortedStr2)
    console.log(str1 + " and " + str2 + " are Anagrams");
else
    console.log(str1 + " and " + str2 + " are not Anagrams");