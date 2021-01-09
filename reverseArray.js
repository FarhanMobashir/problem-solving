// Define a function that takes an array as input and prints all values of the array in reverse order. 

function reverseArray(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i])
    }
    return result;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]))