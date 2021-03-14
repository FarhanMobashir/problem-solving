function optimalMove(n) {
    while (n !== 0) {
        if (n > 0 && n <= 3) {
            n -= 2;
        } else if (n > 3 && n <= 5) {
            n -= 5;
        } else if (n > 5) {
            n -= 5;
        }
    }
}


function gameOfStones(n) {
    let counter = 0;
    while (n > 0) {
        if (n > 0 && n <= 3) {
            n -= 2;
            counter++;
        } else if (n > 3 && n <= 5) {
            n -= 3;
            counter++;
        } else if (n > 5) {
            n -= 5;
            counter++;
        }
    }
    if (counter % 2 !== 0) {
        return 'Second'
    } else {
        return 'First'
    }

}

console.log(gameOfStones(1));
console.log(gameOfStones(2));
console.log(gameOfStones(3));
console.log(gameOfStones(4));
console.log(gameOfStones(5));
console.log(gameOfStones(6));
console.log(gameOfStones(7));
console.log(gameOfStones(8));
console.log(gameOfStones(9));
console.log(gameOfStones(10));
