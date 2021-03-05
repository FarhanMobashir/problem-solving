/* 
? Problem Statement : Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just 1 character at 1 index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.

*/
function myHashmap(arr1) {
    let letterCount1 = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!(arr1[i] in letterCount1)) {
            letterCount1[arr1[i]] = 1;
        } else {
            letterCount1[arr1[i]] += 1;
        }
    }
    return letterCount1;
}
function isValid(s) {
    let obj = myHashmap(s);
    let arr = Object.values(obj)
    // let set = new Set(arr);
    // let checker = [...set]
    arr = arr.sort((a, b) => a - b);
    // console.log(arr)
    if (arr[0] === 1) {
        for (let i = 1; i < arr.length - 1; i++) {
            if (arr[i] !== arr[i + 1]) {
                return 'NO'
            }
        }
        return 'YES'

    } else {
        obj[s[0]] = obj[s[0]] - 1;
        let firstElement = obj[s[0]];
        // obj[firstElement] = obj[s[0]] - 1;
        let newChecker = Object.values(obj);
        // console.log(arr)
        // console.log(newChecker);
        for (let i = 0; i < arr.length; i++) {
            if (newChecker[i] !== firstElement) {
                return 'NO'
            }
            //  else {
            //     return 'NO'
            // }
        }
        return 'YES'
    }
}

console.log(isValid('aabbccddeefghi')) // NO
console.log(isValid('abcdefghhgfedecba')) // YES
console.log(isValid('aaaabbcc')) // NO
console.log(isValid('aabbc')) // YES


