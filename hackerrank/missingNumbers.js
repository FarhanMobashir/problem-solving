/*

? Problem Statement : Given two arrays of integers, find which elements in the second array are missing from the first array.

* Input : arr = [7,2,5,3,5,3] brr = [7,2,5,4,6,3,5,3] -> [4,6]
*/
function cache(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in result)) {
            result[arr[i]] = 1;
        } else {
            result[arr[i]] += 1;
        }
    }
    return result;
}
function missingNumbers(arr, brr) {
    let out = [];
    let main = cache(brr);
    let missing = cache(arr);
    let set = new Set(brr);
    brr = [...set]
    console.log(main);
    console.log(missing);
    brr.forEach(function (rItem) {
        if (!(rItem in missing)) {
            out.push(rItem)
        } else if (main[rItem] !== missing[rItem]) {
            out.push(rItem)
        }
    })
    return out;
}

console.log(missingNumbers([203, 204, 205, 206, 207, 208, 203, 204, 205, 206], [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]))

console.log(missingNumbers([11, 4, 11, 7, 13, 4, 12, 11, 10, 14], [11, 4, 11, 7, 3, 7, 10, 13, 4, 8, 12, 11, 10, 14, 12]))
