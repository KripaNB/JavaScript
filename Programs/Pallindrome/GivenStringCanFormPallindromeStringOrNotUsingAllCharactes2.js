/*
 * Output:
   Can "addafaaa" be rearranged into a palindrome? false

   Can "civic" be rearranged into a palindrome? true
*/

function canFormPalindrome(str) {
	let temp = "";
    for (let c of str)
	{
		if(!temp.includes(c))
			temp = temp + c;
		else
			temp = temp.replace(c, "");
	}
	if(temp.length == 0 || temp.length == 1)
		return true;
	return false;
}

const testString = "civic"; // Example: "civic" can form a palindrome
console.log(`Can "${testString}" be rearranged into a palindrome?`, canFormPalindrome(testString));
