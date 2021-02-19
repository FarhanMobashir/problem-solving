/*

? Problem Statement : Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return -1.

*/

function getMoneySpent(keyboards, drives, b) {
    let arr = [];
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            arr.push(keyboards[i] + drives[j])
        }
    }
    let result = arr.sort((a, b) => b - a).filter((i) => i <= b)
    if (result.length === 0) {
        return -1;
    } else {
        return result[0]

    }
}

console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60)) // 58