function insertionSort2(n, arr) {
    let counter = 0;

    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let last = i - 1;
        // console.log('current', current, 'last', arr[last]);
        while (last > -1 && current < arr[last]) {
            counter += 1;
            arr[last + 1] = arr[last];
            last--

        }
        arr[last + 1] = current;
    }
    return counter

}

console.log(insertionSort2(5, [2, 1, 3, 1, 2]))
/*
[[1,5 ,2,7,3,4]]
[1,2,3,1,2]
[1, 1, 2,2,3] -> 1
*/