/*

? Problem Statement : The distance between two array values is the number of indices between them. Given , find the minimum distance between any pair of equal elements in the array. If no such value exists, return -1.

* Input : 7 1 3 4 1 7 -> 3
* Input : 3 2 1 2 3 -> 2
*/

function minimumDistances(a) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] === a[j]) {
                result.push(j - i);
            }
        }
    }
    if (result.length === 0) {
        return -1;
    } else {
        return result.sort((a, b) => a - b)[0];

    }
}

console.log(minimumDistances([7, 1, 3, 4, 1, 7]))
console.log(minimumDistances([3, 2, 1, 2, 3]))