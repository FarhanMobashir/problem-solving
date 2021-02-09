/*

? Problem Statement : You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

- x1 = kangaroo 1 input
- v1 = kangaroo 1 speed
- x2 = kangaroo 2 input
- v2 = kangaroo 2 speed

* Input : 0 3 4 2 -> YES

*/

function distance(index, startValue, speed) {
    let distance = startValue;
    for (let i = 0; i < index; i++) {
        distance += speed;
    }
    return distance;
}
function jump(index) {
    let distance = 0;
    for (let i = 0; i < index; i++) {
        jump++;
    }
    return jump;
}

console.log(distance(3, 1, 2))
function kangaroo(x1, v1, x2, v2) {
    for (let i = 0; i < 10000; i++) {
        if (distance(i, x1, v1) === distance(i, x2, v2)) {
            return ('YES')
            
        }
    }
    return 'NO'
}

console.log(kangaroo(0, 3, 4, 2))