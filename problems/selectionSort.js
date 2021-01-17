function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                min = j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}

// function findMin(arr) {
//     let min = Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }


console.log(selectionSort([9, 8, 7]))