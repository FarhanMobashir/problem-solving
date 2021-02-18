/*

? Problem Statement : Little Bobby loves chocolate. He frequently goes to his favorite store P & T, Penny Auntie, to buy them. They are having a promotion at Penny Auntie. If Bobby saves enough wrappers, he can turn them in for a free chocolate. 

* Input : 15,3,2 -> 9
15 -> 5 -> 5 -> 0
5 -> 4 -> 2 -> 3
3 -> 2 -> 1 -> 2
2 -> 2 -> 1 -> 0


*/
// n = 15 , c = 3 , m = 2

function chocolateFeast(money, cost, freeCount) {
    let candyCount = Math.floor(money / cost);
    let remainingWrapper = money / cost;
    while (remainingWrapper >= freeCount) {
        let freeCandy = (remainingWrapper - (remainingWrapper % freeCount)) / freeCount;
        candyCount += freeCandy
        remainingWrapper = remainingWrapper - (freeCount * Math.floor(remainingWrapper / freeCount))
        remainingWrapper += freeCandy
    }
    return candyCount;
}

console.log(chocolateFeast(15, 3, 2))
// console.log(chocolateFeast(7, 3, 2)) // 3
// console.log(chocolateFeast(10, 2, 5)) // 6

