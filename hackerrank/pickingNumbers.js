
function pickingNumbers(a) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        let count = 0;
        let larger = -Infinity;
        for (let j = i + 1; j < a.length; j++) {

            if (Math.abs(a[i] - a[j]) <= 1) {
                larger = Math.max(a[i], arr[j]);
                count++;
            }
        }
        result.push(count)
    }
    return result.sort((a, b) => b - a)[0]
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]))
console.log(pickingNumbers([2, 2, 2, 2, 2, 2, 2]))
