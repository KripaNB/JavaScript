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
console.log("Indices are:" + getTwoSums(nums, target));

function getTwoSums(nums, target)
{
    for (let i = 0; i < nums.length; i++)
    {
        for (let j = i + 1; j < nums.length; j++)
        {
            if (nums[j] == target - nums[i])
            {
                return [i, j];
            }
        }
    }
    return [];
}

/*
    Complexity Analysis:
    Time complexity: O(n^2)
    For each element, we try to find its complement by looping through the rest of the array which takes O(n) time. Therefore, the time complexity is O(n^2).

    Space complexity: O(1).
    The space required does not depend on the size of the input array, so only constant space is used.
*/