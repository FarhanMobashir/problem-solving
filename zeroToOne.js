function zeroToONe(str) {
    let result = '';
    str = str.split(' ');
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'zero') {
            result += 0
        } else if (str[i].toLowerCase() === 'one') {
            result += 1;
        }
    }
    return result;
}

console.log(zeroToONe('Zero one zero ONE zero one zero one'));



// Create a function that takes a string as an argument. The function must return a string containing 1s and 0s based on the string argument's words. If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it. The returned string's length should be a multiple of 8, if the string is not a multiple of 8 you should remove the numbers in excess.
// Examples

// textToNumberBinary("zero one zero one zero one zero one") ➞ "01010101"

// textToNumberBinary("Zero one zero ONE zero one zero one") ➞ "01010101"

// textToNumberBinary("zero one zero one zero one zero one one two") ➞ "01010101"

// textToNumberBinary("zero one zero one zero one zero three") ➞ ""

// textToNumberBinary("one one") ➞ ""

// Notes

// You must return the result as a string.