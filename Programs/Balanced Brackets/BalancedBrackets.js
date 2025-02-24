/*
* Output:
  Enter a string of brackets: {[()]}
  Is Balanced? : true
*/

const prompt = require('prompt-sync')();

var str = prompt("Enter a string of brackets: ");
console.log("Is Balanced? : " + isBalanced(str));

function isBalanced(str) 
{
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (const char of str)
    {
        if (char === '(' || char === '{' || char === '[')
        {
            stack.push(char);
        }
        else if (char === ')' || char === '}' || char === ']')
        {
            if (stack.length == 0 || stack.pop() !== pairs[char])
            {
                return false;
            }
        }
    }
    return stack.length === 0;
}