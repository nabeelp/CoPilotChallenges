function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function countVowels(str) {
    return str.match(/[aeiouAEIOU]/g).length;
}

function isPalindrome(str) {
    return str === reverseString(str);
}