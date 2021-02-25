/*

? Problem Statement : Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value that describe a range of integers, inclusive of the endpoints. Sherlock must determine the number of square integers within that range.



*/

function squares(a, b) {
    let counter = 0;
    a = Math.ceil(Math.sqrt(a));
    b = Math.floor(Math.sqrt(b))
    for (let i = a; i <= b; i++) {
        counter++;
    }
    return counter
}

console.log(squares(465868129, 988379794))
console.log(squares(3, 9))
