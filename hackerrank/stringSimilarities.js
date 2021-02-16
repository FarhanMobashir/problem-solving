/*

? Problem Statement : For two strings A and B, we define the similarity of the strings to be the length of the longest prefix common to both strings. For example, the similarity of strings "abc" and "abd" is 2, while the similarity of strings "aaa" and "aaab" is 3.
? Calculate the sum of similarities of a string S with each of it's suffixes.

* Input : ababaa  -> 11


*/

function suffixes(str) {
    let len = str.length;
    let result = [];
    str = str.split('');
    for (let i = 0; i < len; i++) {
        result.push(str.join(''));
        str.shift();
    }
    return result;
}

function commonPrefix(str1, str2) {
    let counter = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[0] === str2[0]) {
            if (str1[i] === str2[i]) {
                counter++;
            } else {
                break;
            }
        } else {
            counter = 0;
        }
    }
    return counter;
}
// console.log(commonPrefix('abad', 'ibabaaba'))
// console.log(suffixes('ababaa'))

function stringSimilarity(s) {
    let result = 0;
    let strings = suffixes(s);
    for (let i = 0; i < strings.length; i++) {
        result += commonPrefix(strings[i], s);
    }
    return result;
}
console.log(stringSimilarity('ababaa'))
// console.log(commonPrefix('ababaa', 'ababaa'))
// console.log(commonPrefix('ababaa', 'babaa'))