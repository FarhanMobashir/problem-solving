/*

? Problem Statement : Given two strings, determine if they share a common substring. A substring may be as small as one character. 

* Input : 'and' , 'art' -> YES
* Input : 'be' , 'cat' -> NO

*/
function cache(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (!(str[i] in obj)) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]] += 1;
        }
    }
    return obj;
}
function twoStrings(s1, s2) {
    let checker = cache(s1);
    for (let i = 0; i < s2.length; i++) {
        if (s2[i] in checker) {
            return 'YES'
        }
    }
    return 'NO'
}
console.log(cache('hello'))
console.log(twoStrings('hello', 'world'));
console.log(twoStrings('van', 'world'));
