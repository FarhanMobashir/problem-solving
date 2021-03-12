function twoArrays(k, a, b) {
    a = a.sort((a, b) => a - b);
    b = b.sort((a, b) => b - a);
    for (let i = 0; i < a.length; i++) {
        if (!((a[i] + b[i]) >= k)) {
            return 'NO'
        }
    }
    return 'YES'
}

console.log(twoArrays(10, [2, 1, 3], [7, 8, 9])) // YES
console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4])) // NO
