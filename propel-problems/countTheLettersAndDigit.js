/*

? Problem Statement : Write a function that takes a string and calculates the number of letters and digits within it. Return the result as an object.
? --> Tests contain only alphanumeric characters.
? --> Spaces are not letters.
? -->  All tests contain valid strings.

* Input : "H3ll0 Wor1d" -> Output : { "LETTERS":  7, "DIGITS": 3 }

todo Coming Up With Logic

? --> Breaking the problem
- loop through the string
- make a letter counter and a digit counter
- push the value of letter and digit to our result object
*/

// todo Writing actual code

function countTheLettersAndDigit(str) {
    let result = {};
    let letters = 0;
    let digits = 0;
    for (let i = 0; i < str.length; i++) {
        let reL = /[a-z]/gi;
        let reD = /[0-9]/g;
        if (reL.test(str[i])) {
            letters++;
        } else if (reD.test(str[i])) {
            digits++
        }

    }
    result['LETTERS'] = letters;
    result['DIGITS'] = digits
    return result;
}

console.log(countTheLettersAndDigit('Hello my bro 210943'))