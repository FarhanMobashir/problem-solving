/*

? Problem Statement : Watson gives Sherlock an array of integers. His challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right. 

* Input : [1,1,4,1,1] -> YES
* Input : [5,6,8,11] -> YES

*/

function frontSum(arr, idx) {
    let sum = 0;
    for (let i = 0; i < idx; i++) {
        sum += arr[i];
    }
    return sum;
}

function backSum(arr, idx) {
    let sum = 0;
    for (let i = idx + 1; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function balancedSums(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (frontSum(arr, i) === backSum(arr, i)) {
            return 'YES'
        }
    }
    return 'NO';
}

console.log(balancedSums([5, 3, 3, 8, 11]));