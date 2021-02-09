/*

? Problem Statement : 

*/

function getTotalX(a, b) {
    let arr = [...a, ...b];
    let count = 0;
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] % arr[i] === 0) {
                temp++;
            }
        }
        if (temp === arr.length) {
            count++
        }
    }
    return count;

}

console.log(getTotalX([2, 4], [16, 32, 96]));