function gemstones(arr) {
    let checker = arr[0].split('');
    let set = new Set(checker);
    checker = [...set]
    console.log(checker)
    let obj = {};
    let counter = 0;
    for (let i = 0; i < checker.length; i++) {
        let result = null;
        let count = 0;
        for (let j = 0; j < arr.length; j++) {

            if ((arr[j]).includes(checker[i])) {
                count++;
            }
        }
        if (count === arr.length) {
            counter++;
        }
    }
    return counter
}

console.log(gemstones(['abcdde', 'baccd', 'eeabg'])) // 2