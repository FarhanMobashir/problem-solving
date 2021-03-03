/*
? Problem Statement : finding three array element with largest product

* Input : [1,2,3,4,5] -> 24
[1,2,3]
[1,3,4]
[1,2,5]
[2,3,4]
[1,2,4]
*/

function findPairs(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log([arr[i], arr[j + 1], arr[j + 2]])
        }
    }
}

// console.log(findPairs([1, 2, 3, 4]))

function strSwap(str) {
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        let checkStr = str.slice();
        console.log(checkStr)
    }
}
console.log(strSwap('abca'))

