/*

? Problem Statement : Given a range of numbered days, and a number , determine the number of days in the range that are beautiful. Beautiful numbers are defined as numbers where is evenly divisible by . If a day's value is a beautiful number, it is a beautiful day. Return the number of beautiful days in the range.

*/

function beautifulDays(i, j, k) {
    let counter = 0;
    for (let idx = i; idx <= j; idx++) {
        console.log(Math.abs(idx - ((idx.toString().split('').reverse().join('')))))
        if (Math.abs(idx - parseInt((idx.toString().split('').reverse().join('')))) % k === 0) {
            counter += 1;
        }
    }
    return counter
}

console.log(beautifulDays(20, 23, 6)); // 2