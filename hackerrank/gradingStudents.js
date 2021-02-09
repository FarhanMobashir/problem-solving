/*

? Problem Statement : 
-> Every student recieve a grade from 0 - 100
-> Any grade less than 40 is a failing grade
* Rules for grading
-> If the difference between the grade and the next multiple 5 of is less than 3 , round grade up to the next multiple of 5.
-> if grade is less than 38 no rounding occurs

* Input : [73,67,38,33] -> [75,67,40,33]
*/

function findNextMultipleOf(num, multipleOf) {
    let multiplier = Math.floor(num / multipleOf);
    return (multiplier + 1) * multipleOf;
    // console.log(multiplier);
}

function round(num) {
    let difference = findNextMultipleOf(num, 5) - num;
    // console.log(difference);
    if (difference < 3) {
        return findNextMultipleOf(num, 5);
    } else {
        return num;
    }
}

function gradingStudent(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 38) {
            result.push(arr[i]);
        } else {
            let roundedGrade = round(arr[i]);
            result.push(roundedGrade);
        }
    }
    return result;

}

// console.log(findNextMultipleOf(76, 5))
console.log(round(73));
console.log(gradingStudent([73, 67, 38, 33]))