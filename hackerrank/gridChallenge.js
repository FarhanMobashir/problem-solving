function gridChallenge(grid) {
    for (let i = 0; i < grid.length; i++) {
        grid[i] = grid[i].split("").sort().join('');
    }
    for (let i = 0; i < grid.length - 1; i++) {
        if (grid[i].charCodeAt(i) > grid[i + 1].charCodeAt(i)) {
            return 'NO'
        }
    }
    return 'YES'
}

console.log(gridChallenge(['eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv']))
console.log(gridChallenge(['kc', 'iu']))
console.log(gridChallenge(['uxf', 'vof', 'hmp']))
console.log(gridChallenge(['zzzzzwz', 'zzzzzzw', 'wzzzzzz', 'zzwzzzz', 'zzyzzzz', 'zzzzyzz', 'zzzzzyz']))


