function permutationEquation(p) {
    let result1 = [];
    let result2 = [];
    p.unshift(0);
    for (let i = 1; i < p.length; i++) {
        for (let j = 1; j < p.length; j++) {
            if (i === p[j]) {
                result1.push(j);
            }
        }
    }
    for (let i = 1; i < p.length; i++) {
        for (let j = 1; j < p.length; j++) {
            if (i === p[p[j]]) {
                result2.push(j);
            }
        }
    }
    console.log(result1, result2);
}

console.log(permutationEquation([4, 3, 5, 1, 2])) // 1 3 5 4 2
console.log(permutationEquation([2, 3, 1])) // 1 3 5 4 2
