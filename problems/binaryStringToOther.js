/*

? Write a function that returns the minimum number of swaps to convert the first binary string into the second.
? Both binary strings will be of equal length.
? Both binary strings will have an equal number of zeroes and ones.
? A swap is switching two elements in a string (swaps do not have to be adjacent).

* Input : "1100", "1001" -> 1
* Input : "10011001", "01100110" -> 4

todo Coming Up With Logic

? --> Breaking the problem

*/

function minSwap(str1, str2) {
    let swap = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            swap += 1;
        }
    }
    return swap / 2;
}

console.log(minSwap("1100", "1001"));
console.log(minSwap("11110011001", "01100110111"));
