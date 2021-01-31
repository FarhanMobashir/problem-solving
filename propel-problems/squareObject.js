/*

? Define a function which returns an object containing the square of each number from 1 to n

*/

function square(n) {
    let result = {}
    for (let i = 0; i <= n; i++) {
        result[i] = i * i;
    }
    return result;
}

console.log(square(5));