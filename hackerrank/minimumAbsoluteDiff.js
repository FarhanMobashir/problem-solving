/*

? Problem Statement : Given an array of integers, find the minimum absolute difference between any two elements in the array.

* Input : [-59 -36 -13 1 -53 -92 -2 -96 -54 75] -> 1
* Input : [1 -3 71 68 17] -> 3

*/

function minimumAbsoluteDifference(arr) {
    let min = Infinity;
    arr = arr.sort();
    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i] - arr[i + 1]) < min) {
            min = Math.abs(arr[i] - arr[i + 1]);
        }

    }
    return min;
}

console.log(minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75])) // 1
console.log(minimumAbsoluteDifference([1, -3, 71, 68, 17])) // 3
