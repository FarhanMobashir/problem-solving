/*

? Problem Statement : Given a list of integers, count and return the number of times each value appears as an array of integers.

*/
function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}
function countingSort(arr) {
    let result = [];
    let max = findMax(arr);
    for (let i = 0; i <= max; i++) {
        result.push(0);
    }
    for (let i = 0; i <= arr.length; i++) {
        result[arr[i]] += 1;

    }

    return result
}

console.log(countingSort([1, 1, 3, 2, 3]))