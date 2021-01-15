/*

Problem: https://www.hackerrank.com/challenges/cut-the-sticks/problem

Initial pseudocode:

result = []
while (arr.length > 0) {
   find min
   new_arr = arr[i] - min
   remove min from arr
   arr = new_arr
   result.push([a.length])
}
*/

function findMin(arr) {
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}




function cutStick(a) {
    let result = [];
    while (a.length > 0) {
        result.push(a.length);
        let min = findMin(a);
        let b = [];
        for (let i = 0; i < a.length; i++) {
            if (a[i] === min) {

            } else {
                let x = a[i] - min;
                b.push(x);
            }
        }
        a = b;
    }
    return result;
}

function test() {
    let inputsAndExpectedOutputs = [
        [
            [1, 2, 3],
            [3, 2, 1],
        ],
        [
            [1, 2, 3, 4],
            [4, 3, 2, 1],
        ],
        [
            [3, 3, 2, 1],
            [4, 3, 2],
        ],
    ];
    for (let [input, expectedOutput] of inputsAndExpectedOutputs) {
        let actualOutput = cutStick(input);
        console.log("\n");
        console.log("Input", input);
        console.log("Actual Output", actualOutput);
        console.log("expectedOutput", expectedOutput);
    }
}

test();
