/*

? Problem Statement : Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

* Input : haystack = "hello", needle = "ll" -> 2
* Input : haystack = "aaaaa", needle = "bba" -> -1

*/

function findIndex(haystack, needle) {
    if (needle === '') {
        return 0
    }
    let end = needle.length;
    let start = 0;
    for (let i = 0; i < haystack.length; i++) {
        // console.log(haystack.slice(i, end));
        if (haystack.slice(i, end) === needle) {
            return i;
        }
        end = end + 1
    }
    return -1
}


console.log(findIndex("mississippi", "issip"));
console.log(findIndex("", "a"));
// console.log(findIndex('aaaaa', 'bba'));