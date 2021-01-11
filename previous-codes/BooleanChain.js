// Write three functions:

//     AND
//     OR
//     XOR

// These functions should evaluate an array of true and false values, starting from the leftmost element and evaluating pairwise.
// Examples

// and([true, true, false, true]) ➞ false
// // and([true, true, false, true]) => and([true, false, true]) => and([false, true]) => false

// or([true, true, false, false]) ➞ true
// // or([true, true, false, true]) => or([true, false, false]) => or([true, false]) => true

// xor([true, true, false, false]) ➞ false
// // xor([true, true, false, false]) => xor([false, false, false]) => xor([false, false]) => false

// Notes

//     XOR is the same as OR, except that it excludes [true, true].
//     Each time you evaluate an element at 0 and at 1, you collapse it into the single result.



function and(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i] !== arr[i + 1]) {
            return false
        }

    }
    return true

}

// console.log(and([true, true, false, false, true, false]))

function or(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i] !== arr[i + 1] || arr[i] === arr[i + 1]) {
            return true
        } else {
            return false
        }

    }

}


console.log(or([true, true, true, false, true, false]))
