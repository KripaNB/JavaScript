/* 
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.
*/

/*
    Output:
        Enter an array of numbers separated by comma: 2,7,11,15
        Enter a target number: 9
        Indices are: 0,1
*/

const prompt = require('prompt-sync')();

let nums = prompt("Enter an array of numbers separated by comma: ").split(',').map(Number);
let target = Number(prompt("Enter a target number: "));
console.log("Indices are: " + getTwoSums(nums, target));

function getTwoSums(nums, target)
{
    let map = new Map();
    for(let i = 0; i < nums.length; i++)
    {
        map.set(nums[i], i);
    }
    for (let i = 0; i < nums.length; i++)
    {
        const complement = target - nums[i];
        if (map.has(complement) && map.get(complement) !== i)
            return [i, map.get(complement)];
    }
    return [];
}

/*
    Complexity Analysis:
    Time complexity: O(n).
    We traverse the list containing n elements exactly twice. Since the hash table reduces the lookup time to O(1), the overall time complexity is O(n).

    Space complexity: O(n).
    The extra space required depends on the number of items stored in the hash table, which stores exactly n elements.
*/