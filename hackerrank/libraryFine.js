/*

? Problem Statement : Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any).

*/

function libraryFine(d1, m1, y1, d2, m2, y2) {
    let fine = 0;
    if (d1 > d2 && m1 === m2 && y1 === y2) {
        fine = 15 * (d1 - d2)
    }
    else if (m1 > m2 && y1 === y2) {
        fine = 500 * (m1 - m2)
    } else if (y1 > y2) {
        fine = 10000;
    }
    return fine;
}

console.log(libraryFine(2, 7, 1014, 1, 1, 1014))
console.log(libraryFine(6, 6, 2015, 9, 6, 2016))
console.log(libraryFine(2, 5, 2015, 30, 5, 2015))
// console.log(libraryFine(2, 7, 1014, 1, 1, 1014))
// console.log(libraryFine(2, 7, 1014, 1, 1, 1014))
