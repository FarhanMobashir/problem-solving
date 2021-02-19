function alphaWeight() {
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let obj = {};
    for (let i = 0; i < alphabets.length; i++) {
        if (!(alphabets[i] in obj)) {
            obj[alphabets[i]] = i + 1;
        }
    }
    return obj
}

function stringWeight(str) {
    let obj = alphaWeight();
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let sum = 0;
        if (str[i] === str[i + 1]) {

            sum += obj[str[i]];
        }
        result.push(sum);
    }
    return result;
}

console.log(stringWeight('aaabbbbcccddd'))

function weightedUniformStrings(s, queries) {

}

console.log(weightedUniformStrings('aaabbbbcccddd', [9, 8, 7, 12, 5]))