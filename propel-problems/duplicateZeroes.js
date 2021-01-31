/*

? Problem Statement : Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.
? Note that elements beyond the length of the original array are not written.
? Do the above modifications to the input array in place, do not return anything from your function.

* Input : [1,0,2,3,0,4,5,0] -> // ! [1,0,0,2,3,0,0,4]
* Output : null
* Explanation : After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

todo Coming Up With Logic

? --> Breaking the Problem
- loop through the array and find the index of element having the value zero 0.
- insert another zero at the place after the index with value as zero

*/

function duplicateZeroes(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            console.log(i);
        }
    }
    console.log(arr);
}

duplicateZeroes([1, 0, 2, 3, 0, 4, 5, 0]); // [1,0,0,2,3,0,0,4]