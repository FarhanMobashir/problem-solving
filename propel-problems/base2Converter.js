/*

? Problem Statement : Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.
? Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).

* Input : 5 -> '101'
* Input : 1 -> '1'
* Input : 10 -> '1010'

todo Coming Up With Logic
? --> Breaking the problem 
- use a while until input !== 0
- make a variable result and set it to an empty array
- start dividing the input by 2 and at the same time divide the input by modulo operator
- push the remainder in the array
*/

function base2Converter(n) {
    let result = [];

    if (n === 0) {
        return 0;
    } else {
        while (n !== 0) {
            result.unshift(n % 2);
            n = Math.floor(n / 2);
        }
        return result.join('')
    }

}

console.log(base2Converter(141));
console.log(base2Converter(0));
