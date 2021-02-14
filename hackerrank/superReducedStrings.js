/*

? Problem Statement : Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. In each operation, select a pair of adjacent letters that match, and delete them.
? Delete as many characters as possible using this method and return the resulting string. If the final string is empty, return Empty String

* Input : aaabccddd -> abd

*/

function deleter(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i, 2);
        }
    }
    return arr;
}
function superReducedStrings(str) {
    str = str.split('');
    let res;
    for (let i = 0; i < 10000; i++) {
        res = deleter(str);
    }
    if (res.length === 0) {
        return 'EMPTY STRING'
    }
    return res.join('');
}

console.log(superReducedStrings('aaabccddd'))
console.log(superReducedStrings('oagciicgaoyjmahhamjymmwjnnjwmmvpxhpphxpvlikappakilyygvkkvgyymlpfddfplmhiodvvdoihfxpkggkpxfuevvuuvveu'))
console.log(superReducedStrings('baab'))

