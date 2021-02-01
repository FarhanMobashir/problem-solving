/*

? Problem Statement : Write a function to find the longest common prefix string amongst an array of strings.
? If there is no common prefix, return an empty string "".

* Input : strs = ["flower","flow","flight"] -> 'fl'
* Input : strs = ["dog","racecar","car"] -> ''

todo Coming Up With Logic
? --> Breaking the problem
- 


*/
function findSmall(arr) {
    let small = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < small.length) {
            small = arr[i];
        }
    }
    return small
}

function checkFirstLetter(arr) {
    let firstWord = arr[0][0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i][0] !== firstWord) {
            return false;
        }
    }
}

function longestCommonPrefix(strs) {
    let smallestWord = findSmall(strs)
    if (checkFirstLetter(strs) === false || strs.length == 0) {
        return ''
    } else {
        let set = new Set(strs);
        strs = [...set]
        if (strs.length === 1) {
            console.log('im 1')
            return strs[0]
        }
        let small = smallestWord;
        let counter = 0;
        for (let i = 0; i < strs.length; i++) {
            for (let j = 1; j <= small.length; j++) {
                if ((strs[i].slice(0, j) !== (small.slice(0, j)))) {
                    console.log('jello')
                    return strs[i].slice(0, j - 1)

                }

            }

        }

    }
    return smallestWord
}



// console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]))
console.log(longestCommonPrefix(["abca", "aba", "aaab"]))
// console.log(longestCommonPrefix(["abaa", "abc", "abca"]))
// console.log(longestCommonPrefix(["flower", "flow", "flight"]))
// console.log(longestCommonPrefix(["flower", "fkow"]))


