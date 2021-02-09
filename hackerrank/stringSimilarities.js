/*

? Problem Statement : For two strings A and B, we define the similarity of the strings to be the length of the longest prefix common to both strings. For example, the similarity of strings "abc" and "abd" is 2, while the similarity of strings "aaa" and "aaab" is 3.
? Calculate the sum of similarities of a string S with each of it's suffixes.

* Input : ababaa  -> 11


*/

function commonPrefix(str1, str2) {
    let i;
    for (i = 0; i < str2.length; i++) {
        if (str2[i] !== str1[i]) {
            return i;
        }
    }
    if (i <= str1.length) {
        return i;
    } else {
        return 0;
    }

}

function stringSimilarity(s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let similar = commonPrefix(s, s.slice(i))
        console.log(similar)
        result += similar;
    }
    return result;
}
console.log(stringSimilarity('ababaa'))
// console.log(commonPrefix('ababaa', 'ababaa'))
// console.log(commonPrefix('ababaa', 'babaa'))