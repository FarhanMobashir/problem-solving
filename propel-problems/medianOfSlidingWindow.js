/*
? Problem Statement : Given an array of integer arr[] and an integer k, the task is to find the median of each window of size k starting from the left and moving towards the right by one position each time.

* Input : [-1, 5, 13, 8, 2, 3, 3, 1] , k = 3 --> Output : 5 8 8 3 3 3
* Input : [-1, 5, 13, 8, 2, 3, 3, 1] , k = 4 --> Output : 6.5 6.5 5.5 3.0 2.5

todo Coming Up With Logic 

? --> Breaking the problem
- writing a media function
- passing it through all the sub-array starting from k 
- pushing all the median in outr result array
*/

function main(arr, k) {
    let result = [];
    let length = arr.length - (k - 1)
    for (let i = 0; i < length; i++) {
        let subArr = arr.slice(i, i + k)
        let median = findMedian(subArr);
        result.push(median)
    }
    return result
}

function findMedian(arr) {
    let result;
    arr = arr.sort((a, b) => a - b);
    console.log(arr);
    if (arr.length % 2 !== 0) {
        let idx = (arr.length + 1) / 2
        result = arr[idx - 1]
    } else {
        let idx = (arr.length) / 2
        result = (arr[idx - 1] + arr[idx]) / 2
    }
    return result
}

function subArr(arr, k) {
    let subArr = [];
    let end = k;
    let length = arr.length - (k - 1)
    for (let i = 0; i < length; i++) {
        subArr.push(arr.slice(i, k))
        k++;
    }
    return subArr;
}

// console.log(median([1, 4, 3, 2, 5, 6]))
console.log(main([-1, 5, 13, 8, 2, 3, 3, 1], 4))