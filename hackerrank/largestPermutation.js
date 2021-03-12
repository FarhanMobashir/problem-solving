function findMax(arr, idx) {
    let max = arr[idx];
    let m = idx;
    for (let i = idx + 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            m = i;
        }
    }
    return m;
}

function largestPermutation(k, arr) {
    for (let i = 0; i < k; i++) {
        let max = findMax(arr, i);
        [arr[i], arr[max]] = [arr[max], arr[i]];
    }
    return arr;
}

console.log(largestPermutation(1, [4, 2, 3, 5, 1]));