// Create a function that determines if there is an upward trend.

// Examples
// upwardTrend([1, 2, 3, 4]) ➞ true

// upwardTrend([1, 2, 6, 5, 7, 8]) ➞ false

// upwardTrend([1, 2, 3, "4"]) ➞ "Strings not permitted!"

// upwardTrend([1, 2, 3, 6, 7]) ➞ true

function upwardTrend(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false
        }
    }
    return true;
}

console.log(upwardTrend([1, 2, 3, 6, '4', 7]))