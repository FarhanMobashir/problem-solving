/*

? Problem Statement : Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer. 

* Input : '124' -> 3

*/

function findDigits(n) {
    let digits = n.toString().split('')
    let result = 0;
    for (let i = 0; i < digits.length; i++) {
        if (n % digits[i] === 0) {
            result += 1;
        }
    }
    return result;
}

console.log(findDigits(124));