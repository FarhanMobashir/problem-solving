/*

? Problem Statement : An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.

* Input : [1, 1, 1, 1, -3, -4] -> false
* Input : [5, 99, 832, -3, -4] -> true
* Input : [5, 0] -> true

todo Coming Up With Logic
? --> Breaking the problem
- first find all the unique elements in the array
- make a counter named balanced and set it to zero
- if the elemenet is +ve add 1 if -ve subtract 1
- if finally the balanced is greater than 0 return true else return false

*/

function positiveDominant(arr) {
    let unique = new Set(arr);
    arr = [...unique];
    let balanced = 0;
    arr.forEach(function (item) {
        if (item > 0) {
            balanced += 1
        } else if (item < 0) {
            balanced -= 1;
        }
    })
    if (balanced > 0) {
        return true;
    } else {
        return false;
    }
}

console.log(positiveDominant([1, 1, 1, 1, -3, -4]))
console.log(positiveDominant([1, 0, 0, -1]))
console.log(positiveDominant([5, 0]))
