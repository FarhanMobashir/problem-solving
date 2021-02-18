/*

? Problem Statement : The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

* Input : 5 -> 14
* Input : 2 -> 3;
*/

function utopianTree(n) {
    let result = 1;
    let time = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            result += 1;
        } else {
            result = result * 2;
        }
    }
    return result;
}

console.log(utopianTree(5));
console.log(utopianTree(0));
console.log(utopianTree(4));
