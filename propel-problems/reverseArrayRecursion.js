function reverse(arr, i) {

    if (i === arr.length) {
        return
    } else {

        reverse(arr, i + 1)
        console.log(arr[i])

    }
}
console.log(reverse([1, 2, 3, 4, 5, 6], 0))