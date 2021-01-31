
// ? --> Problem Statement

// * Find the contiguous sub-array within a one dimensional array of numbers which has the largest sum

// todo --> Understanding the problem

// Examples :

// * Input 1 : [1,2,4,-3,6]
// ? Output : [2,4,3,6]

// * Input 2 :  [8,-7,5,2,11]
// ? Output : [5,2,11]

// * Input 3 : [1]
// ? Output : [1]

// ------------------------------------
// ? 1.Come up with more test cases
// ? 2. Don't worry about ***how*** we are going to solve the problem at this stage

// * --> Come up with a plan

// --- Programming
// ? 1 Come up with a logic
// ? 2 Write some pseuducode
// ? 3 Verify your logic


// todo --> Coming up with the logic
// 1. Generate all the sub-array belonging to the array // ! hard part
// 2. Find the sub-array with the largest sum // * Easy part

// Input : // ? [1,2,7,-3]
// Sub-arrays : 
// [1,2,7,-3]
// ? --- [0..0] [0..1],[0..2], [0...3]
// [2,7,-3]
// [7,-3]
// [-3]

// todo --> Writing up a pseudocode
// let allSubArr = [];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//         subArr = arr[0, j];
//         allSubArr.push(subArr);
//     }

// }


// todo --> Writing code

// ? What are the arguments ?
// ? What will be the result type ?

function maxSubarray(arr) {
    let subArray = allSubArr(arr);
    let result = findMaxSubarray(subArray);
    return result
}

function findMaxSubarray(subArray) {
    let maxSum = -Infinity;
    let maxSubarray = [];
    for (let arr of subArray) {
        let sum = arrSum(arr);
        if (sum > maxSum) {
            maxSum = sum;
            maxSubarray = arr;
        }
    }
    return maxSubarray;

}

function arrSum(arr) {
    return arr.reduce((acc, item) => acc + item)
}

console.log(arrSum([1, 2, 3, 4]));


function allSubArr(arr) {
    let allSubArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let subArr = arr.slice(i, j + 1);
            allSubArr.push(subArr);
        }

    }
    return allSubArr
}

// ? helper function
function areArraysEqual(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

function testMaxSubarray() {
    let inputandExpectedOutput = [
        [[1], [1]],
        [[], []],
        [[1, 2, -3, 4], [1, 2, -3, 4]],
        [[1, -10, 2, 3], [2, 3]]
    ]

    for (let [input, expectedOutput] of inputandExpectedOutput) {
        let actualOutput = maxSubarray(input);
        console.log('input : ', input, 'actualOutput :', actualOutput, 'expectedOutput :', expectedOutput)
        if (areArraysEqual(actualOutput, expectedOutput)) {
            console.log('Test is passed !!')
        } else {
            console.log('Test is failed !!');
        }
    }
}

testMaxSubarray();

