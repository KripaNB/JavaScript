/*
 * Output:
   Enter a string: Kripa
   Enter another string: Bangera
   The strings before swapping : name1 = Kripa; name2 = Bangera
   The strings after swapping  : name1 = Bangera; name2 = Kripa
*/

const prompt = require("prompt-sync")();

var name1 = prompt("Enter a string: ");
var name2 = prompt("Enter another string: ");
console.log("The strings before swapping : name1 = " + name1 + "; name2 = " + name2);
name1 = name1 + name2;
name2 = name1.slice(0, name1.length - name2.length);
name1 = name1.slice(name2.length);
console.log("The strings after swapping : name1 = " + name1 + "; name2 = " + name2);
