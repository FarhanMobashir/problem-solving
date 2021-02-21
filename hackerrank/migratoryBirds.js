/*

? Problem Statement : Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.


* Input : [1,1,2,2,3] -> 1
* Input : [1 4 4 4 5 3] -> 4
* Input : [1 2 3 4 5 4 3 2 1 3 4] -> 3
*/
function myHashmap(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in obj)) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]] += 1;
        }
    }
    return obj
}
function migratoryBirds(arr) {
    let checker = myHashmap(arr);
    // console.log(checker);
    let set = new Set(arr);
    let newArr = [...set];
    let max = 0;
    let result = [];
    for (let i = 0; i < newArr.length; i++) {
        if (checker[newArr[i]] > max) {
            max = checker[newArr[i]]
            // result.push(newArr[i]);
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        if (checker[newArr[i]] === max) {
            result.push(newArr[i]);
        }
    }
    return result.sort()[0];
}

console.log(migratoryBirds([1, 1, 2, 2, 3]));
console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
console.log(migratoryBirds([1, 2, 4, 3, 5, 4, 3, 2, 1, 3, 4]));