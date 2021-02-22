/*

? Problem Statement : You are the benevolent ruler of Rankhacker Castle, and today you're distributing bread. Your subjects are in a line, and some of them already have some loaves. Times are hard and your castle's food stocks are dwindling, so you must distribute as few loaves as possible according to the following rules:

--> Every time you give a loaf of bread to some person i, you must also give a loaf of bread to the person immediately in front of or behind them in the line (i.e.,i+1 persons or i-1).
--> After all the bread is distributed, each person must have an even number of loaves.

* Given the number of loaves already held by each citizen, find and print the minimum number of loaves you must distribute to satisfy the two rules above. If this is not possible, print NO.

* Input : 2 3 4 5 6 -> 4
* Input : 1 2 -> NO

*/

// ! ----- NOT SOLVED YET -----
function evenChecker(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            counter += 1;
        }
    }
    if (counter === arr.length) {
        return true
    } else {
        return false;
    }
}

// console.log(evenChecker([8, 1, 4]))
function fairRations(arr) {
    let loaf = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            arr[i] += 1;
            arr[i + 1] += 1;
            i++;
        }
    }
    return arr;
}

console.log(fairRations([2, 3, 4, 5, 6])) // 4
console.log(fairRations([1, 2])) 
