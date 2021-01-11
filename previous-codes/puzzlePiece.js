// Write a function that takes two arrays and adds the first element in the first array with the first element in the second array, the second element in the first array with the second element in the second array, etc, etc. Return true if all element combinations add up to the same number. Otherwise, return false.
// Examples

// puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]) ➞ true
// // 1 + 4 = 5;  2 + 3 = 5;  3 + 2 = 5;  4 + 1 = 5
// // Both arrays sum to [5, 5, 5, 5]

// puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]) ➞ true

// puzzlePieces([1, 2], [-1, -1]) ➞ false

// puzzlePieces([9, 8, 7], [7, 8, 9, 10]) ➞ false

// Notes

//     Each array will have at least one element.
//     Return false if both arrays are of different length.


function puzzlePiece(arr1, arr2) {
    let sum = [];
    if (arr1.length !== arr2.length) {
        return false;
    } else {
        for (let i = 0; i < arr1.length; i++) {
            sum.push(arr1[i] + arr2[i]);
        }
        for (let i = 0; i < sum.length; i++) {
            if (sum[i] === sum[i + 1]) {
                return true;
            } else {
                return false;
            }
        }

    }
}

console.log(puzzlePiece([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]))