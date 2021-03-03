/*

? Problem Statement : Given a string of lowercase letters in the range ascii[a-z], determine the index of a character that can be removed to make the string a palindrome. There may be more than one solution, but any will do. If the word is already a palindrome or there is no solution, return -1. Otherwise, return the index of a character to remove. 

*/
function checkPalindrome(s, idx) {
    let result = [];
    for (let i = s.length - 1; i >= 0; i--) {
        result.push(s[i]);

    }
    if (result.join('') === s) {
        return true;
    } else {
        return false;
    }
}

function palindromeIndex(s) {
    let counter = 0;
    for (let i = 0; i < Math.floor(s.length); i++) {
        let checker = s.slice(0, i) + s.slice(i + 1);
        if (checkPalindrome(checker)) {
            return i;
        }
    }
    return -1;
}

console.log(palindromeIndex('aaab')); // 3
console.log(palindromeIndex('aaa')); // 0