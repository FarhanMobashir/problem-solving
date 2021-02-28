/*

? Problem Statement : Given a list of unsorted integers,arr , find the pair of elements that have the smallest absolute difference between them. If there are multiple pairs, find them all.

* Input : -20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854 
* Output : -20 30

*/

function findMin(arr) {
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function closestNumbers(arr) {
    arr = arr.sort((a, b) => a - b);
    let obj = {};
    let min = Infinity;
    for (let i = 0; i < arr.length - 1; i++) {
        if (!(Math.abs((arr[i] - arr[i + 1])) in obj)) {
            obj[Math.abs((arr[i] - arr[i + 1]))] = [];
            obj[Math.abs((arr[i] - arr[i + 1]))].push([arr[i], arr[i + 1]])
            min = Math.min(min, Math.abs((arr[i] - arr[i + 1])));
        } else {
            obj[Math.abs((arr[i] - arr[i + 1]))].push([arr[i], arr[i + 1]])
            min = Math.min(min, Math.abs((arr[i] - arr[i + 1])));
        }
    }
    // let min = findMin(diff);
    // console.log(obj);
    return [].concat(...obj[min]);
}

console.log(closestNumbers([-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854, -520, -470])) /// -520 -470 -20 30

// [9, 8, 7, 6, 5]-- > [[5, 6, 7, 8, 9]]

// [9,8,6,4,2] -> 