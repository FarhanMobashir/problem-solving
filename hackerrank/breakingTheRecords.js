
function findMax(arr, idx) {
    let max = arr[idx];
    for (let i = 0; i <= idx; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log('find Max :', findMax([1, 2, 3, 4, 5, 6], 3))

function findMin(arr, idx) {
    let min = arr[idx];
    for (let i = 0; i <= idx; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function breakingRecords(scores) {
    let maxCounter = 0;
    let minCounter = 0;
    for (let i = 0; i < scores.length; i++) {
        if (findMax(scores, i + 1) > findMax(scores, i)) {
            // console.log('Max +1 : ', findMax(scores, i + 1), 'Max : ', findMax(scores, i))
            maxCounter += 1;
        }
        else if (findMin(scores, i + 1) < findMin(scores, i)) {
            // console.log('Min + 1 : ', findMin(scores, i + 1), 'Min :', findMin(scores, i))
            minCounter += 1;
        }

    }
    console.log(maxCounter, minCounter)
}

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])) // 4 0
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])) // 2 4