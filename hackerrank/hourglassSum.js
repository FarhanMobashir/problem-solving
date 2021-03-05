function sum(arr) {
}

console.log(sum([
    [1, 1, 1, 0, 0, 0],

    [0, 1, 0, 0, 0, 0],

    [1, 1, 1, 0, 0, 0]]))
function hourglassSum(arr) {
    let result = [];

    for (let i = 0; i < 4; i++) {
        let idx = 0;
        for (let j = 0; j < 4; j++) {
            let sumOf = 0;
            // let up = 0;
            // let mid = 1;
            // let down = 0;
            sumOf += arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
            result.push(sumOf);
            sumOf = 0;

        }


    }



    return result.sort((a, b) => b - a)[0];
}

// console.log(hourglassSum([
//     [1, 1, 1, 0, 0, 0],

//     [0, 1, 0, 0, 0, 0],

//     [1, 1, 1, 0, 0, 0],

//     [0, 0, 2, 4, 4, 0],

//     [0, 0, 0, 2, 0, 0],

//     [0, 0, 1, 2, 4, 0]])) // 19

console.log(hourglassSum([
    [-9, -9, -9, 1, 1, 1],

    [0, -9, 0, 4, 3, 2],

    [-9, -9, -9, 1, 2, 3],

    [0, 0, 8, 6, 6, 0],

    [0, 0, 0, -2, 0, 0],

    [0, 0, 1, 2, 4, 0]])) // 28

