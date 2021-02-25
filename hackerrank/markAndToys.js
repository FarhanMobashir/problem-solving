/*

? Problem Statement : Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money. Given a list of toy prices and an amount to spend, determine the maximum number of gifts he can buy.
Note Each toy can be purchased only once. 

* Input : 50, 1 12 5 111 200 1000 10 -> 4
* Input : 7,1 2 3 4 -> 3


*/

function maximumToys(prices, k) {
    let result = [];
    prices = prices.sort((a, b) => a - b);
    let i = 0;
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < k) {
            if (sum + prices[i] > k) {
                break;
            }
            result.push(prices[i])
            sum += prices[i];

        }
    }
    return result;
}

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));
console.log(maximumToys([3, 7, 2, 9, 4], 15));
