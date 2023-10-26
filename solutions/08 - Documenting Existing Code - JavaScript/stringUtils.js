/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string} The input string with the first letter capitalized.
 */
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Reverses a given string.
 * @param {string} str - The string to be reversed.
 * @returns {string} - The reversed string.
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * Counts the number of vowels in a given string.
 * @param {string} str - The input string to count vowels from.
 * @returns {number} - The number of vowels in the input string.
 */
function countVowels(str) {
    return str.match(/[aeiouAEIOU]/g).length;
}

/**
 * Checks if a given string is a palindrome.
 * @param {string} str - The string to check.
 * @returns {boolean} - Returns true if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
    return str === reverseString(str);
}