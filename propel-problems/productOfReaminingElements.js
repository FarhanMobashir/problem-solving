/*
? Problem Statement : Write a function that returns true if you can partition an array into one element and the rest, such that this element is equal to the product of all other elements excluding itself.

* Input : [2, 8, 4, 1] -> Output : true
* Input : [-1, -10, 1, -2, 20] -> Output : false

todo  1. Coming Up With Logic

? Breaking the problem
- loop through the array and on each iteration pick one element and multiply all the other element and divid it by the picked element.
- If both the picked element and the multiplied element is same return true else false

? Pseuducode
 function main(arr) {

 }

*/

function productOfRemainingElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        let product = 1;
        for (let j = 0; j < arr.length; j++) {
            product *= arr[j];
        }
        if (arr[i] === product / arr[i]) {
            return true;
        }
    }
    return false;
}

// function test() {
//     let inputsAndExpectedOutputs = [
//         [[1, 1, -1, 1], false],
//         [[2, 4, 8, 1], true],
//         [[-1, -10, 1, -2, 20], false],
//         [[-1, -20, 5, -1, -2, 2], true]
//         [[-1, 1, -1], true],
//         [[0, 1, 1, -1], false]
//     ];

//     for (let [input, expectedOutput] of inputsAndExpectedOutputs) {
//         let actualOutput = productOfRemainingElement(input);
//         console.log("\n");
//         console.log("Input", input);
//         console.log("Actual Output", actualOutput);
//         console.log("expectedOutput", expectedOutput);
//     }

// }

console.log(productOfRemainingElement([-1, -1, 1, 1]));
// console.log(productOfRemainingElement([-1, -10, 1, -2, 20]));

// test()
