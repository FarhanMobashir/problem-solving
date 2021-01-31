// function indexOf(arr, item) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === item) {
//             return i;
//         }
//     }
//     return -1
// }
// console.log(indexOf([2, 3, 7, 4, 12, 18, 19], 19))

function indexOfRecursion(arr, item, i = 0) {
    if (i > arr.length) {
        return -1;
    } else if (arr[i] === item) {
        return i;
    }
    return indexOfRecursion(arr, item, i + 1);
}
console.log(indexOfRecursion([2, 3, 7, 4, 12, 18, 19], 2))

