function insertionSort2(n, arr) {
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let last = i - 1;
        while (last > -1 && current < arr[last]) {
            arr[last + 1] = arr[last];
            last--

        }
        arr[last + 1] = current;
        console.log(arr.join(' '))
    }

}