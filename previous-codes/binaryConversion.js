// Write a function that returns the minimum number of swaps to convert the first binary string into the second.
// Examples

// minSwaps("1100", "1001") ➞ 1

// minSwaps("110011", "010111") ➞ 1

// minSwaps("10011001", "01100110") ➞ 4

// Notes

//     Both binary strings will be of equal length.
//     Both binary strings will have an equal number of zeroes and ones.
//     A swap is switching two elements in a string (swaps do not have to be adjacent).

function binaryConversion(first, second) {
    let count = 0;
    let arr1 = first.split("");
    let arr2 = second.split("");
    // console.log(arr2);
    let idx = 0;
    for (let i = 0; i < first.length; i++) {
        if (first[i] !== second[i]) {
            console.log('if :' + i);
            idx = i;
        } else {
            console.log('else :' + i);
        }
    }
}

console.log(binaryConversion("11001", "10010"));