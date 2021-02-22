/*

? Problem Statement : You wish to buy video games from the famous online video game store Mist.
? Usually, all games are sold at the same price, p dollars. However, they are planning to have the seasonal Halloween Sale next month in which you can buy games at a cheaper price. Specifically, the first game will cost p dollars, and every subsequent game will cost d dollars less than the previous one. This continues until the cost becomes less than or equal to m dollars, after which every game will cost m dollars. How many games can you buy during the Halloween Sale?

Complete the howManyGames function in the editor below.

howManyGames has the following parameters:

    int p: the price of the first game
    int d: the discount from the previous game price
    int m: the minimum cost of a game
    int s: the starting budget

* Input : 20 3 6 80 -> 6
* Input : 20 3 6 85 -> 7

*/

function howManyGames(p, d, m, s) {
    let gameCount = 1;
    let gamePrice = p;
    if (s > p) {
        let budget = s - p
        while (gamePrice > m) {
            gamePrice -= d;
            budget -= gamePrice;
            if (gamePrice > budget) {
                return gameCount;
            }

            gameCount++
        }
        budget += gamePrice
        gamePrice += d;
        console.log('budget', budget);
        gameCount += (budget - budget % m) / m;
        return gameCount - 1;
    } else {
        return 0;
    }

}

console.log(howManyGames(20, 3, 6, 85))
console.log(howManyGames(100, 1, 1, 99))
console.log(howManyGames(100, 19, 1, 180))
