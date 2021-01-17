/*

? Problem Statement: You are given two array of same number of elemnts and you have to exchange the elements of both in reverse order

* Input: my_array = ['a', 'b', 'c'] <-> other_array = [1, 2, 3]
* Output: my_array == [3, 2, 1] <->  other_array == ['c', 'b', 'a']

todo Coming up with Logic and pseuducode

? Breaking the problem
- looping through the array
- taking first element of first array and assign it to the last element of the array
- We can also think about swapping
- Finally returning both array 
*/

// todo Writing Actual Code

function arrayExchange(arr1, arr2) {
    // for (let i = 0; i < arr1.length; i++) {
    //     [arr1[i], arr2[arr1.length - i - 1]] = [arr2[arr1.length - i - 1], arr1[i]];

    // }
    return [[...arr2.reverse()], [...arr1.reverse()]]
}

console.log(arrayExchange(['a', 'b', 'c'], [1, 2, 3]));
console.log(arrayExchange(['a', 'b', 'c', 'd'], [1, 2, 3, 4]));
