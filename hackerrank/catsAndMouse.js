/*

? Problem Statment : Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.
catAndMouse has the following parameter(s):

int x: Cat A's position
int y: Cat B's position
int z: Mouse C's position

* Input  :2,5,4 -> Cat B
* Input  :1,2,3 -> Cat B
* Input  :1,3,2 -> Mouse C
*/

function catAndMouse(x, y, z) {
    if (Math.abs((z - x)) < Math.abs((z - y))) {
        return 'Cat A'
    } else if (Math.abs((z - x)) > Math.abs((z - y))) {
        return 'Cat B'
    } else {
        return 'Mouse C'
    }

}

console.log(catAndMouse(2, 5, 4))
console.log(catAndMouse(1, 2, 3))
console.log(catAndMouse(1, 3, 2))
