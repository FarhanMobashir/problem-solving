/*
? Write a program to merge two sorted array
*/

function mergeArray(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (result.length !== (arr1.length + arr2.length)) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        } else if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
            j++;
        }
        else {
            result.push(arr2[j]);
            j++
        }
    }
    return result;
}

console.log(mergeArray([1, 5, 8, 2, 4], [3, 17, 6, 7, 18]))