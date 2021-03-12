function beautifulPairs(a, b) {
    let set = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                set.push([i, j])
            }

        }
    }
    return set;
}

console.log(beautifulPairs([1, 2, 3, 4], [1, 2, 3, 3])) // 4
console.log(beautifulPairs([3, 5, 7, 11, 5, 8], [5, 7, 11, 10, 5, 8])) // 6
