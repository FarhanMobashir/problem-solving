/*

? Problem Statement : You will be given an array of widths at points along the road (indices), then a list of the indices of entry and exit points. Considering each entry and exit point pair, calculate the maximum size vehicle that can travel that segment of the service lane safely.

* Input : width = [2, 3, 1, 2, 3, 2, 3, 3], cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]
* Output : 1 2 3 2 1
*/

function findMin(arr) {
    let min = +Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min;
}

function serviceLane(n, cases) {
    let result = [];
    for (let i = 0; i < cases.length; i++) {
        let min = findMin(n.slice(cases[i][0], cases[i][1] + 1))
        result.push(min)
    }
    return result;
}

console.log(serviceLane([2, 3, 1, 2, 3, 2, 3, 3], [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]))
console.log(serviceLane([1, 2, 2, 2, 1], [[2, 3], [1, 4], [2, 4], [2, 4], [2, 3]]))
