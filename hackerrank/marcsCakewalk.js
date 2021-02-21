/*

? Problem Statement : Given the individual calorie counts for each of the cupcakes, determine the minimum number of miles Marc must walk to maintain his weight. Note that he can eat the cupcakes in any order. 

* Input : [5,10,7] -> 44
* Input : [1,3,2] -> 11
* Input : [7,4,9,6] -> 79


*/

function marcsCakewalk(calorie) {
    calorie = calorie.sort((a, b) => b - a);
    console.log(calorie)
    let result = 0;
    for (let i = 0; i < calorie.length; i++) {
        result += calorie[i] * Math.pow(2, i)
    }
    return result;

}

console.log(marcsCakewalk([5, 10, 7])); // 44
console.log(marcsCakewalk([1, 3, 2])); // 11
console.log(marcsCakewalk([7, 4, 9, 6])); // 79