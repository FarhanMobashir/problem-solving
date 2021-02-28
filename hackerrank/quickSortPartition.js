/*

? Problem Statement : Write to program for the partion used in quick-sort algorithm

*/

function quickSort(arr) {
    let pivot = arr[0];
    let left = []
    let right = [];
    let equal = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            equal.push(arr[i])
        }
    }
    console.log([...left, ...equal, ...right])
}

quickSort([4, 5, 3, 7, 2])