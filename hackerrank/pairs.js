/*

? Problem Statement : Given an array of integers and a target value, determine the number of pairs of array elements that have a difference equal to the target value. 

*/



function pairs(k, arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) === k) {
                counter++;
            }
        }
    }
    return counter;

}

console.log(pairs(2, [1, 5, 3, 4, 2]))