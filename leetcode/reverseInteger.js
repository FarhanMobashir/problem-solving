/*

? Problem Statement : Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
? Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

* Input : 123 -> 321
* Input : -123 -> -321


*/

function reverseInt(x) {
    x = x.toString().split('');
    let result = [];
    // -2147483648 to 2147483647
    if (x[0] === '-') {
        result.push(x[0]);
        for (let i = x.length - 1; i > 0; i--) {
            result.push(x[i])
        }
    } else if (x[0] !== '-') {
        for (let i = x.length - 1; i >= 0; i--) {
            result.push(x[i])
        }
    }
    result = result.join('');
    if (Math.abs(result) > Math.pow(2, 32) / 2) {
        return 0;
    } else {
        return result;
    }

}

console.log(reverseInt(-2147483412));
console.log(reverseInt(1534236469));

