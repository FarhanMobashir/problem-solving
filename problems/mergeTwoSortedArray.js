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


function merge(arr1, arr2) {
    let result = [];
    let j = 0;
    let k = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[j] < arr2[k]) {
            console.log('im if :')
            result.push([arr1[j], j]);
            j++;
        }
        else if (arr1[j] = arr2[k]) {
            console.log('im if else 1 :')
            result.push([arr1[j], j, k]);
            j++;
            k++;
        }
        else if (arr1[j] > arr2[k]) {
            console.log('im if else 2 :')
            result.push([arr2[k], k]);
            k++;
        }
    }
    console.log(j, k)
    return result;
}

console.log(merge([1, 3, 5], [5, 10, 12]))





