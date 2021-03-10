function maximumPerimeterTriangle(arr) {
    arr = arr.sort((a, b) => a - b);
    let result;
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        let a = (arr[i + 1] + arr[i + 2])
        let b = (arr[i] + arr[i + 2])
        let c = (arr[i] + arr[i + 1])
        if (arr[i] < a && arr[i + 1] < b && arr[i + 2] < c) {
            let sum = arr[i] + arr[i + 1] + arr[i + 2];
            if (sum > max) {
                max = sum;
                result = [arr[i], arr[i + 1], arr[i + 2]];
            }

        }
    }
    if (result.length === 0) {
        return -1
    } else {
        return result;
    }
}

console.log(maximumPerimeterTriangle([1, 2, 3, 4, 5, 10]))