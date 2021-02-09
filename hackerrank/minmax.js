/*

? Problem Statement : Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers. 

* Input : [1, 2, 3, 4, 5] -> 10,14

*/

function findSum(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr.length; j++) {

            sum += arr[j];

        }
        result.push(sum - arr[i]);
    }
    return result;
}

console.log(findSum([1, 2, 3, 4, 5], 4))

function minMaxSum(arr) {
    let sum = findSum(arr);
    sum.sort((a, b) => a - b);
    console.log(sum[0], sum[sum.length - 1]);
}

console.log(minMaxSum([1, 2, 3, 4, 5]))