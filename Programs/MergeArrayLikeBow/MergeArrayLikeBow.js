/*
 * Output:
   Merged Array : a,1,b,2,c,d,e             // array1 = ["a","b","c", "d", "e"] ; array2 =["1","2"]

   Merged Array : a,1,b,2,c,3,d,4,e,5,6,7   // array1 = ["a","b","c", "d", "e"] ; array2 =["1","2","3","4","5", "6","7"]
*/

const prompt = require('prompt-sync')();

let array1 = ["a","b","c", "d", "e"];
let array2 = ["1","2"];
let outputArray = [];
let length = array1.length + array2.length;
for (let i = 0; i < length; i++)
{
    if (i < array1.length)
        outputArray.push(array1[i]);
    if (i < array2.length)
        outputArray.push(array2[i]);
}
console.log("Merged Array : " + outputArray);