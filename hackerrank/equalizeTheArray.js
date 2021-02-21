/*

? Problem Statement : Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.

* Input : [1,2,2,3] -> 2
* Input : [3, 3, 2, 1, 3] -> 2

*/
function myHashmap(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in obj)) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]] += 1;
        }
    }
    return obj;
}
function equalizeArray(arr) {
    let checker = myHashmap(arr);
    let counter = 0;
    let max = 0;
    let set = new Set(arr);
    let newArr = [...set];
    for (let i = 0; i < newArr.length; i++) {
        if (checker[newArr[i]] > max) {
            max = checker[newArr[i]]
        }
    }
    return arr.length - max;
}

console.log(equalizeArray([1, 2, 2, 3]))
console.log(equalizeArray([3, 3, 2, 1, 3]))