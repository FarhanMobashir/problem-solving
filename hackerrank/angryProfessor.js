/*

? Problem Statement : Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.

Complete the angryProfessor function in the editor below. It must return YES if class is cancelled, or NO otherwise.

angryProfessor has the following parameter(s):

    int k: the threshold number of students
    int a[n]: the arrival times of the n  students

* Input : k = 3, a = [-2,-1,0,1,2] -> 'YES'
* Input : k = 3, a = [-1, -3, 4,2] -> 'YES'
* Input : k = 2, a = [0,-1,2,1] -> 'NO'


*/

function angryProfessor(k, a) {
    let counter = 0;
    for (let i = 0; i <= a.length; i++) {
        if (a[i] <= 0) {
            counter += 1;
        }
    }
    if (counter >= k) {
        return 'NO'
    } else {
        return 'YES'
    }

}

console.log(angryProfessor(3, [-2, -1, 0, 1, 2])) // YES
console.log(angryProfessor(3, [-1, -3, 4, 2])) // YES
console.log(angryProfessor(2, [0, -1, 2, 1])) // NO