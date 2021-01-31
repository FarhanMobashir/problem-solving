/*

? Problem Statement : Write a function that returns true if the binary string can be rearranged to form a string of alternating 0s and 1s.

* Input : "0001111" -> true
* Input : "010001" -> false

todo Coming Up With The Logic

? --> Breaking the problem
- make a variable balance set it to zero
- loop through the string and increment when it is 1 and decrement whwn it is 0
- if balanced is 0 return true else return false
*/

// todo Writig Actual Code

function alternatingZeroesAndOnes(str) {
    let balanced = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            balanced += 1;
        } else if (str[i] === '1') {
            balanced -= 1
        }
    }
    if (balanced === -1 || balanced === 1 || balanced === 0) {
        console.log(balanced);
        return true;
    } else {
        console.log(balanced);
        return false;
    }

}

console.log(alternatingZeroesAndOnes('0001111'))
console.log(alternatingZeroesAndOnes('010101000'))
console.log(alternatingZeroesAndOnes('101'))
