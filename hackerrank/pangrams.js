/*

? Problem Statement : A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

*/

function pangrams(s) {
    let checker = 'abcdefghijklmnopqrstuvwxyz'
    let checker2 = checker.toUpperCase();
    let counter = 0;
    for (let i = 0; i <= s.length; i++) {
        if (s.includes(checker[i]) || s.includes(checker2[i])) {
            counter += 1;
        }
    }
    if (counter === 26) {
        return 'pangram'
    } else {
        return 'not pangram'

    }

}

console.log(pangrams('we promptly judged antique ivory buckles for the next prize'))
console.log(pangrams('we promptly judged antique ivory buckles for the prize'))
