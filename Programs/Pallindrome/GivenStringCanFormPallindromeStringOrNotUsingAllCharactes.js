/*
 * Output:
   Can "addafaaa" be rearranged into a palindrome? false

   Can "civic" be rearranged into a palindrome? true
*/

function canFormPalindrome(str) {
    // Object to store character frequency
    const charCount = {};

    // Count frequency of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let oddCount = 0;

    // Count characters with odd occurrences
    for (let char in charCount) {
        if (charCount[char] % 2 !== 0) {
            oddCount++;
        }
    }

    // Check for palindrome possibility
    if (str.length % 2 === 0 && oddCount === 0) {
        return true; // Even length, all characters have even count
    } else if (str.length % 2 !== 0 && oddCount === 1) {
        return true; // Odd length, only one odd character allowed
    }

    return false; // Cannot form palindrome
}

const testString = "civic"; // Example: "civic" can form a palindrome
console.log(`Can "${testString}" be rearranged into a palindrome?`, canFormPalindrome(testString));
