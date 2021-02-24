/*

? Problem Statement : Given the values of n, k, and the configuration of the clouds as an array c , determine the final value e of after the game ends.

Complete the jumpingOnClouds function in the editor below.

jumpingOnClouds has the following parameter(s):

    int c[n]: the cloud types along the path
    int k: the length of one jump

* Input : n = 8, k = 2, c = [0, 0, 1, 0, 0, 1, 1, 0] -> 92

*/

function jumpingOnClouds(c, k) {
    let energy = 100;
    for (let i = 0; i < c.length; i++) {
        let jump = c[i + (k % c.length)];
        if (jump === 1) {
            energy -= 3;
        } else if (jump === 0) {
            break;
        }
        energy--;
    }
    return energy;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2)); // 92
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 3)); // 80
