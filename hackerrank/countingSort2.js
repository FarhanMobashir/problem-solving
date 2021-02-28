/*

? Problem Statement : Implement counting sort 

*/

// helper
function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}
function counting(arr) {
    let result = [];

    let max = findMax(arr);
    for (let i = 0; i <= max; i++) {
        result.push(0);
    }
    for (let i = 0; i < arr.length; i++) {
        result[arr[i]] += 1;

    }

    return result
}



function countingSort(arr) {
    let countArr = counting(arr);
    let result = [];
    console.log(countArr)
    for (let i = 0; i < countArr.length; i++) {
        for (let j = 0; j < countArr[i]; j++) {
            result.push(i)
        }
    }
    return result;
}

console.log(countingSort([2, 2, 4, 4, 3, 5, 6, 7, 8, 4, 4, 1, 8, 9, 0, 2, 0]))
// ? [0,0,0,0,0,0,0,0,0,0]
// ? [0,0,1,0,0,0,0,0,0...]
// ? [0,0,2,0,0,...]
// ? [0,0,2,0,1,0]