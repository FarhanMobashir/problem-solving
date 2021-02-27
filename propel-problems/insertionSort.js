/*

? Problem Statement : Implement Insertion Sort

*/

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        // Choosing the first element in our unsorted subarray
        let current = arr[i];
        // The last element of our sorted subarray
        let j = i - 1;
        while ((j > -1) && (current < arr[j])) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

console.log('Sorted', insertionSort([2, 4, 6, 8, 3]))