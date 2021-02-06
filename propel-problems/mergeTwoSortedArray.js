/*

? Problem Statement 
--> We are given two sorted of equal or unequal length ang we need to merge then=m in a new array in sorted order

--> You are given two sorted arrays that contain only integers. Your task is to find a way to merge them into a single one, sorted in ascending order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

--> You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

--> Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

* Input : arr1 = [1, 2, 3, 4, 5]; arr2 = [6, 7, 8, 9, 10];
* Output : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* Input : arr5 = [1, 3, 5, 7, 9, 11, 12];  arr6 = [1, 2, 3, 4, 5, 10, 12];
* Output : [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

todo Coming Up With The logic and pseuducode

? --> Breaking the problem
- looping through 1st array and checking its every element which is lesser in both and push the same in our new array;
-- If array are of unequal length then when 


*/


function mergeArray(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    arr1.sort((a, b) => a - b)
    arr2.sort((a, b) => a - b)
    let loop = arr1.length + arr2.length;
    while (result.length !== loop) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        }
        else if (arr1[i] === arr2[j]) {
            result.push(arr1[i])
            i++
            // loop -= 1;
        }
        else {
            result.push(arr2[j]);
            j++
        }
    }
    let set = new Set(result);
    result = [...set]
    return result;
}


console.log(mergeArray([1, 3, 3, 5, 7, 9, 11, 12, 13], [1, 2, 3, 3, 4, 5, 10, 12, 14, 19]))





