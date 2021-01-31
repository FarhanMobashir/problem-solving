// function arrManipulation(arr) {
//     for (let i = arr.length - 1; i >= 0; i--) {

//         arr[i + 1] = arr[i]

//     }
//     arr[0] = 3
//     return arr
// }

// console.log(arrManipulation([1, 0, 2]));

function collatz(num) {
    if (num === 1) {
        return 0;
    } else if (num % 2 === 0) {
        return 1 + collatz(num / 2);
    }
    else {
        return 1 + collatz(3 * num + 1);
    }
}

console.log(collatz(3))