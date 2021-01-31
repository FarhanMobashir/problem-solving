/*

? Problem Statement : You are given an array of integers and you have all pairs of elements whose difference is 2 and the pairs should be in sorted in ascending

* Input : [1,2,3,4]
* Output : [[1,3],[2,4]]

* Input : [4,1,2,3]
* Output : [[1,3], 2,4]

* Input : [4, 3, 1, 5, 6]
* Output : [[1, 3], [3, 5], [4, 6]]

todo Coming Up with the logic and pseuducode

? --> Breaking the problem
- loop through the arr
- pick every element and check whether its difference with other element equals zero or not
- if yes push that picked element with its pair
- make sure the element of you result array are in ascending order

? --> Pseudocode
- function main(arr) {
    let result = [];
    arr = arr.sort((a,b) => a+b)
    for(let i = arr.length; i >= 0; i--) {
    for(let j = 0; j < arr.length; j++) {
        if(arr[i] - arr[j] === 2) {
            result.push([arr[i], arr[j]]);
        }
    }
    return result;
}
}
*/

// todo Writing Actual Code

function differenceOfTwo(arr) {
    let result = [];
    arr = arr.sort((a, b) => a + b)
    // for (let i = arr.length; i >= 0; i--) {
    //     // console.log('im up here')
    //     for (let j = i + 1; j < arr.length; j++) {
    //         // console.log('im here')
    //         if (arr[i] - arr[j] === 2) {
    //             // console.log('hello')
    //             result.unshift([arr[j], arr[i]]);
    //         }
    //     }

    // }
    return result;
}
// [1,2, 3, 4, 5]

console.log(differenceOfTwo([1, 2, 3, 4]))
console.log(differenceOfTwo([4, 3, 1, 5, 6]))
