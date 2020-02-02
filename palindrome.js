/**
 * Check whether a string is a palindrome
 * i.e. the same when reversed
 * 
 * @param {string} word
 */
exports.isPalindrome = (word) => {
	return word === word.split('').reverse().join('');
}